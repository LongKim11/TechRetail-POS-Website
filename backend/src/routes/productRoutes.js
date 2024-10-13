import express from 'express'
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js'
import { uploadProductImg } from '../middlewares/uploadImage/uploads/multer.js'

const router = express.Router()

router
    .route('/')
    .get(getAllProducts)
    .post(uploadProductImg.single('product-form'), createProduct)
router
    .route('/:id')
    .get(getProductById)
    .put(uploadProductImg.single('product-form'), updateProduct)
    .delete(deleteProduct)

export default router
