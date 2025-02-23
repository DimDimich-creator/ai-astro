import { NextResponse } from "next/server";
import { generateNewDay } from "@/actions/ai";

export async function GET() {
	await generateNewDay();
	return NextResponse.json({ status: "generated" });
}
