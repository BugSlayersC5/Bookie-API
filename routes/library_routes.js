import { Router } from "express";
import { postBooks, getBooks, patchBooks, deleteBooks, getOneBook } from "../controllers/library_controllers.js";

export const booksRouter = Router()

booksRouter.get('/books', getBooks)

booksRouter.post('/books', postBooks)

booksRouter.patch('/books/:id', patchBooks)

booksRouter.delete('/books/:id', deleteBooks)

booksRouter.get('/books/:id', getOneBook)
