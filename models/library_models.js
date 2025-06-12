import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose"

const bookSchema = new Schema({
    title: {
        type:String,
        required: true
    },
   
    author: {
        type:String,
        required:true
    },
    publicationYear: {
        type: Number,
        required: true
    },
    bookCategory: {
        type: String,
    },
    publicationCompany:{
        type: String
    },
    image: {
        type: String
    }
    

},{timestamps: true})

bookSchema.plugin(normalize);

export const Books = model ('Book', bookSchema)