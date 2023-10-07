import connect from "@/dbconfig/dbconfig"
import vocabModel from "@/model/model"
import { NextResponse } from "next/server"
connect()

export async function GET() {
    try {
        const random_doc = await vocabModel.aggregate([{ $sample: { size: 1 } }])
        const random_vocab = random_doc[0].vocabulary
        console.log(random_vocab)
        console.log('hi there')

        return NextResponse.json({ message: `Next Word Is ${random_vocab}`, success: true, vocab: random_vocab });
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: err, success: false });
    }
}