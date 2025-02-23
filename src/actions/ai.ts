"use server";
import type { CoreMessage } from "ai";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { addDays, getData } from "./astro-days-action";

export const generateNewDay = async () => {
	const previousDays = await getData();

	const messages: CoreMessage[] = [
		{ role: "system", content: "Ты космонавт из будущего, ведущий дневник." },
		{
			role: "user",
			content: `Вот предыдущие дни: ${previousDays.map((d) => d.text).join("\n")} Напиши новый день.`,
		},
	];

	const model = openai("gpt-3.5-turbo");
	const result = await generateText({
		model,
		messages,
		maxTokens: 128,
		temperature: 0.7,
		topP: 1,
	});

	const newText = result.text;

	await addDays(previousDays.length + 1, newText);

	return newText;
};
