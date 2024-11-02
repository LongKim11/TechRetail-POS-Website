import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'

import { Customer } from '../models/customerModel.js'

const getAllCustomers = catchAsync(async (req, res, next) => {
    const customers = await Customer.find()

    res.status(200).json({
        status: 'success',
        results: customers.length,
        data: {
            customers,
        },
    })
})
const getCustomerById = catchAsync(async (req, res, next) => {
    const customer = await Customer.findById(req.params.id)

    if (!customer) {
        return next(new AppError('No customer found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            customer,
        },
    })
})
const createCustomer = catchAsync(async (req, res, next) => {
    const newCustomer = await Customer.create(req.body)

    res.status(201).json({
        status: 'success',
        data: {
            customer: newCustomer,
        },
    })
})
const updateCustomer = catchAsync(async (req, res, next) => {
    const editCustomer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        },
    )

    if (!customer) {
        return next(new AppError('No customer found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            customer: editCustomer,
        },
    })
})
const deleteCustomer = catchAsync(async (req, res, next) => {
    const customer = await Customer.findByIdAndDelete(req.params.id)

    if (!customer) {
        return next(new AppError('No customer found with that ID', 404))
    }

    res.status(204).json({
        status: 'success',
        data: customer,
    })
})

export {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
}
