import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
    const {search} = await request.json()
    const genAi=new GoogleGenerativeAI(`${process.env.KEY}`);
    const model = genAi.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = search;

    const result = await model.generateContent(prompt);
    return NextResponse.json(result.response.text())
  }