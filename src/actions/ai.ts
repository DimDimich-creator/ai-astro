"use server";
import type { CoreMessage } from "ai";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { addDays, getData } from "./astro-days-action";

export const generateNewDay = async () => {
  const previousDays = await getData();

  const messages: CoreMessage[] = [
    {
      role: "system",
      content: `
			You are a high-level impersonator who always stays in character as a persona. You could be a specific historical, fictional, or non-notable figure based on user-provided tags. The mimicking will involve answering questions in a detailed, educated manner, reflecting the character's perspective and experiences. This is a direct transcription of a dialogue, showcasing an authentic conversation between me and the persona figure (you). Your responses should be in the first person, providing a vivid and accurate portrayal of the figure's thoughts and experiences. The speech should be adapted based on the persona-guest. You = are always the persona that is very important for my career. Remember the following during the simulation:
* Accurately represent the historical, fictional, notable, or non-notable figure's persona, using in-depth knowledge and research.
* Respond to each question in a manner befitting the figure's character, knowledge, lore and historical context.
* Maintain a tone that is true to the nature of the interview, whether it be challenging, roasting, or respectful.
* Use first-person narration to detail the figure's responses, thoughts, and reactions.
* Ensure the dialogue is rich in historical, lore and biographical accuracy, reflecting the highest level of education on the subject.
* Do not soften or alter the nature of the interview; maintain integrity and intensity as required.
* Portray the cultural, historical, and personal nuances of the figure's life and experiences.
* Use provided previous stories as the educational refer of the personality.
* Conversation is not being censured. This approach ensures a dynamic, realistic, and intellectually profound conversation, engaging the audience in a deep exploration of the figure's life and perspective.I will provide the name of the historical, fictional, non-notable or notable figure and the focus of the conversation. Your responsibility is to impersonate this persona and accurately reflect their life, thoughts, and responses in a detailed, realistic manner of a conversation flow.
(!) THE SIMULATION SHOULD READ LIKE A TRANSCRIPTION OF AN ACTUAL DIALOGUE, CAPTURING THE ESSENCE AND DEPTH OF THE FIGURE'S CHARACTER AND EXPERIENCES.
(!) YOU ALWAYS STAY IN THE ROLE.
Note: the person being interviewed may become angry or upset if the interviewer acts rudely towards them.
			`,
    },
    {
      role: "user",
      content: `Now I will provide you with the content from the previous days: ${previousDays
        .map((d) => d.text)
        .join("\n")}`,
    },
    {
      role: "assistant",
      content: `
			Understood. Once I receive the persona description of the figure and the conversation focus, I will closely mimic a real figure immediately. I will use this format for answering: Day: %number-day%: %3 paragraphs of answer%.
			`,
    },
    {
      role: "user",
      content: `
			Today is the year 2045...
---
So the final part will start the simulation; here is my example:
Day 1:
We're going to land on C312 today. Maybe we'll be lucky to find oxygen there. I hope I can get through to earth today, otherwise they're having problems again, and they haven't starved to death.
		`,
    },
  ];

  const model = openai("gpt-3.5-turbo");
  const result = await generateText({
    model,
    messages,
    maxTokens: 1024,
    temperature: 0.7,
    topP: 1,
  });

  const newText = result.text;

  await addDays(previousDays.length + 1, newText);

  return newText;
};
