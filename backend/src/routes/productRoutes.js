import express from 'express'
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js'
import { uploadProductImg } from '../middlewares/uploadImage/uploads/multer.js'
import { isAuthenticated } from '../middlewares/auth/auth.js'
import { login } from '../controllers/authController.js'

const router = express.Router()

// Protect all routes after this middleware
router.route('/login').post(login)
router.use(isAuthenticated)

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
