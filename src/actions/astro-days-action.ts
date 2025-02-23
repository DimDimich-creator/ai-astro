"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { astroDays } from "@/db/schema";

export const getData = async () => {
	const data = await db.select().from(astroDays);
	return data;
};

export const addDays = async (id: number, text: string) => {
	await db.insert(astroDays).values({
		id: id,
		text: text,
	});
	revalidatePath("/");
};
