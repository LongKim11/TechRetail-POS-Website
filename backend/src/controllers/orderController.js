import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'

import { Order } from '../models/orderModel.js'

const getAllOrders = catchAsync(async (req, res, next) => {
    const orders = await Order.find()

    res.status(200).json({
        status: 'success',
        results: orders.length,
        data: {
            orders,
        },
    })
})

const getOrderById = catchAsync(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (!order) {
        return next(new AppError('No order found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            order,
        },
    })
})

const createOrder = catchAsync(async (req, res, next) => {
    const newOrder = await Order.create(req.body)

    res.status(201).json({
        status: 'success',
        data: {
            order: newOrder,
        },
    })
})

const updateOrder = catchAsync(async (req, res, next) => {
    const editOrder = await Order.findByIdAndUpdate

    if (!editOrder) {
        return next(new AppError('No order found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            order: editOrder,
        },
    })
})

const deleteOrder = catchAsync(async (req, res, next) => {
    const order = await Order.findByIdAndDelete(req.params.id)

    if (!order) {
        return next(new AppError('No order found with that ID', 404))
    }

    res.status(204).json({
        status: 'success',
        data: order,
    })
})

export { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder }
