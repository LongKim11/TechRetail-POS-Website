import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'

import { Brand } from '../models/brandModel.js'

const getAllBrands = catchAsync(async (req, res, next) => {
    const brands = await Brand.find()

    res.status(200).json({
        status: 'success',
        results: brands.length,
        data: {
            brands,
        },
    })
})

const getBrandById = catchAsync(async (req, res, next) => {
    const brand = await Brand.findById(req.params.id)

    if (!brand) {
        return next(new AppError('No brand found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            brand,
        },
    })
})

const createBrand = catchAsync(async (req, res, next) => {
    const newBrand = await Brand.create(req.body)

    res.status(201).json({
        status: 'success',
        data: {
            brand: newBrand,
        },
    })
})

const updateBrand = catchAsync(async (req, res, next) => {
    const editBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    if (!brand) {
        return next(new AppError('No brand found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            brand: editBrand,
        },
    })
})

const deleteBrand = catchAsync(async (req, res, next) => {
    const deleteBrand = await Brand.findByIdAndDelete(req.params.id)

    if (!brand) {
        return next(new AppError('No brand found with that ID', 404))
    }

    res.status(204).json({
        status: 'success',
        data: deleteBrand,
    })
})

export { getAllBrands, getBrandById, createBrand, updateBrand, deleteBrand }
