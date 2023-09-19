import { NextResponse } from "next/server"
import OpenAI from "openai"
import dotenv from 'dotenv'
dotenv.config()

export async function POST(request) {
    try {
        const req = await request.json()
        const question = req.question

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user",
                "content": question
            }],
            temperature: 0,
            max_tokens: 256,
        });

        const gptResponse = response.choices[0].message['content']
        console.log(gptResponse)
        return NextResponse.json({ message: "Add Successfully!", success: true, answer: gptResponse });
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: err, success: false });
    }
}