import express from 'express'
import {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderStatistics,
} from '../controllers/orderController.js'

const router = express.Router()

router.route('/').get(getAllOrders).post(createOrder)
router.route('/statistics').get(getOrderStatistics)
router.route('/:id').get(getOrderById).put(updateOrder).delete(deleteOrder)

export default router
