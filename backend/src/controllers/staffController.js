import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'

import { Staff } from '../models/staffModel.js'

const getAllStaffs = catchAsync(async (req, res, next) => {
    const staffs = await Staff.find()

    res.status(200).json({
        status: 'success',
        results: staffs.length,
        data: {
            staffs,
        },
    })
})

const getStaffById = catchAsync(async (req, res, next) => {
    const staff = await Staff.findById(req.params.id)

    if (!staff) {
        return next(new AppError('No staff found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            staff,
        },
    })
})

const createStaff = catchAsync(async (req, res, next) => {
    const {
        fullname,
        email,
        account_username,
        account_password,
        status,
        is_locked,
    } = req.body

    const avatar = req.file.filename

    const newStaff = await Staff.create({
        fullname,
        email,
        avatar,
        account: {
            username: account_username,
            password: account_password,
        },
        status,
        is_locked,
    })

    if (!newStaff) {
        return next(new AppError('Failed to create staff', 400))
    }

    res.status(201).json({
        status: 'success',
        data: {
            staff: newStaff,
        },
    })
})

const updateStaff = catchAsync(async (req, res, next) => {
    const editStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    if (!staff) {
        return next(new AppError('No staff found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            staff: editStaff,
        },
    })
})

const deleteStaff = catchAsync(async (req, res, next) => {
    const deleteStaff = await Staff.findByIdAndDelete(req.params.id)

    if (!staff) {
        return next(new AppError('No staff found with that ID', 404))
    }

    res.status(204).json({
        status: 'success',
        data: null,
    })
})

export { getAllStaffs, getStaffById, createStaff, updateStaff, deleteStaff }
