import express from 'express'
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js'
import { isAuthenticated } from '../middlewares/auth/auth.js'
import { login } from '../controllers/authController.js'

const router = express.Router()

// Protect all routes after this middleware
// router.route('/login').post(login)
// router.use(isAuthenticated)

router.route('/').get(getProducts).post(createProduct)
router
    .route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct)

export default router
