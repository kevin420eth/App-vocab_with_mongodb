import mongoose from "mongoose"

const vocabSchema = new mongoose.Schema({
    vocabulary:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    meaning:{
        type:[String]
    },
    synonymous:{
        type:[String]
    },
    add_time:{
        type:Date,
        default:Date.now,
        immutable:true
    }
})

const vocabModel = mongoose.models.Vocab || mongoose.model('Vocab', vocabSchema)
export default vocabModel