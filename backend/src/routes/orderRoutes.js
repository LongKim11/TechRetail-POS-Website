import express from 'express'
import {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
} from '../controllers/orderController.js'

const router = express.Router()

router.route('/').get(getAllOrders).post(createOrder)
router.route('/:id').get(getOrderById).put(updateOrder).delete(deleteOrder)

export default router
