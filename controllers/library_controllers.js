//CRUD
import { error } from "console";
import { Books }from "../models/library_models.js"
import { bookSchema } from "../schemas/library_schema.js"
import mongoose from "mongoose"

export const postBooks = async(req, res) => {
   try{
    const {error, value} = bookSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            error: error.details[0].message
        })
    }

const addBooks = await Books.create(value);
return res.status(201).json({
    success: true,
    data: addBooks,
    message: 'Books added successfully.'
})
} catch (error) {

    return res.status(500).json({
        success: false,
        error: error.message,
        message: 'Failed to Create event. An unexpected error occured'
    })
}

   }


 export const getBooks = async (req, res) => {
    try{
        const books = await Books.find();

        if(!books) {
            return res.status(404).json({
                success: false,
                message: 'No books found'
            })
        }
        return res.status(200).json({
            success: true,
            data: books,
            message: 'Books retrived sucessfully.'
        })

    } catch(error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message:'Failed to retrive books. An unexpected error occured'
        })
    }
       

    }
    

export const getOneBook = async(req, res) => {
    try{ 
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID format.'
            });
        }
    const book = await Books.findById(id);
    if(!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found.'
        })
    }    

    return res.status(200).json({
        success: true,
        data: book,
        message: 'Book retrived successfully.'
    });
        
    
}catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Failed to retrive book. An unexpected error occurred.',
        error: error.message
    })
} 
}



export const patchBooks = async (req, res) => {
    try{
        const id = req.params.id;
        const updateData = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID format.'
            });
        }

        const { error, value } = bookSchema.validate(updateData);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        const patchBooks = await Books.findByIdAndUpdate(
            id,
            value,
            { new: true, runValidators: true }
        );

        if (!patchBooks) {
            return res.status(404).json({
                success: false,
                message: 'Book not found.'
            });
        }

        return res.status(200).json({
            success: true,
            data: patchBooks,
            message: 'Books updated successfully.'
        });


    } catch (eeror) {
        console.error('Error updating event:', error);

        return res.status(500).json({
            success: false,
            message: 'Failed to update book. An unexpected error occured.',
            error: error
        });
    }

   
}

export  const deleteBooks = async(req, res) => {
    try{
         const id = req.params.id;
         if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID format'
            });
         }
         const book = await Books.findByIdAndDelete(id);

         if(!book) {
            return res.status(404).json({
                success: false,
                message: 'Books not found.'
            });
         }

         return res.status(200).json({ 
            success: true,
            message: 'Book deleted successfully.'

         });
    
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: 'failed to delete a book. An unexpected error occurred.'
        });
    }
   

    
}



