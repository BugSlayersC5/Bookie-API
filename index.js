import express from "express"
import { booksRouter } from "./routes/library_routes.js";
import mongoose from "mongoose";
import "dotenv/config"
import cors from cors

const app = express ()

const PORT = process.env.PORT || 7788
app.use(express.json())
app.use(cors())

app.use("/api/v1", booksRouter)
const mongoURI = process.env.MONGO_URI;


await mongoose.connect(mongoURI);

app.listen(PORT, ()=>{
    console.log(`server is up on port ${PORT}`)
})
