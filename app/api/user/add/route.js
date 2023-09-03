import connect from "@/dbconfig/dbconfig"
import vocabModel from "@/model/model"
import { NextResponse } from "next/server"
connect()

export async function POST(request) {
    try {
        const req = await request.json()
        const vocab = req.vocabulary
        console.log(vocab)
        await vocabModel.create({
            vocabulary: vocab
        })
        return NextResponse.json({ message: "Add Successfully!", success: true });
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: err, success: false });
    }
}