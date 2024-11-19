import express from 'express'
import {
    getCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
} from '../controllers/customerController.js'
import { getOrdersByCustomerId } from '../controllers/orderController.js'
import { isAuthenticated } from '../middlewares/auth/auth.js'

const router = express.Router()

// Protect all routes after this middleware
// router.use(isAuthenticated)

router.route('/').get(getCustomers).post(createCustomer)
router
    .route('/:id')
    .get(getCustomerById)
    .put(updateCustomer)
    .delete(deleteCustomer)
router.route('/:id/orders').get(getOrdersByCustomerId)
export default router
