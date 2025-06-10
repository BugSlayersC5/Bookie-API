import express from "express"
import { booksRouter } from "./routes/library_routes.js";
import mongoose from "mongoose";
import "dotenv/config"

const app = express ()
app.use(express.json())
const port = 7575

app.use(booksRouter)
const mongoURI = process.env.MONGO_URI;


await mongoose.connect(mongoURI);

app.listen(port, ()=>{
    console.log(`server is up on port ${port}`)
})
