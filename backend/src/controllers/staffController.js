import crypto from 'crypto'
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'

import { Staff } from '../models/staffModel.js'
import sendEmail from '../utils/email.js'

const getStaffs = catchAsync(async (req, res, next) => {
    const { fullname } = req.query
    if (fullname) {
        const staffs = await Staff.find({
            'account.username': { $ne: 'admin' },
            fullname: { $regex: fullname, $options: 'i' },
        }).sort({ createdAt: -1 })

        return res.status(200).json({
            status: 'success',
            results: staffs.length,
            data: staffs,
        })
    }

    const staffs = await Staff.find({
        'account.username': { $ne: 'admin' },
    }).sort({ createdAt: -1 })

    res.status(200).json({
        status: 'success',
        results: staffs.length,
        data: staffs,
    })
})

const getStaffById = catchAsync(async (req, res, next) => {
    const { id } = req.params
    if (id === 'admin') {
        return res.status(200).json({
            status: 'success',
            data: {
                _id: 'admin',
                fullname: 'Admin',
                email: 'admin@gmail.com',
                avatar: 'default-avatar.png',
                account: {
                    username: 'admin',
                },
                status: 'Active',
                createdAt: '2024-11-19T09:10:39.988Z',
                updatedAt: '2024-11-19T09:10:39.988Z',
            },
        })
    }

    const staff = await Staff.findById(id)

    if (!staff) {
        return next(new AppError('No staff found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: staff,
    })
})

const createStaff = catchAsync(async (req, res, next) => {
    const avatar = 'default-avatar.png'
    const username = req.body.email.split('@')[0]
    const password = username

    const randomToken = crypto.randomBytes(32).toString('hex')
    const loginToken = crypto
        .createHash('sha256')
        .update(randomToken)
        .digest('hex')

    const newStaff = await Staff.create({
        ...req.body,
        account: { username, password },
        avatar,
        loginToken,
    })

    if (!newStaff) {
        return next(new AppError('Failed to create staff', 400))
    }

    // send email with temporary password
    const url = `${req.protocol}://${req.get('host')}/api/v1/auth/login?token=${loginToken}`
    const message = `Your account has been created. Your username is ${username} and password is ${password}. Please login to ${url} to change your password.`
    try {
        sendEmail({
            email: newStaff.email,
            subject: 'Account created',
            message,
        })
    } catch (err) {
        return next(new AppError('Failed to send email', 500))
    }

    res.status(201).json({
        status: 'success',
        data: newStaff,
    })
})

const updateStaff = catchAsync(async (req, res, next) => {
    // const editStaff = await Staff.findByIdAndUpdate(
    //     req.params.id,
    //     { ...req.body, avatar: req.file.filename },
    //     {
    //         new: true,
    //         runValidators: true,
    //     },
    // )
    const editStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    if (!editStaff) {
        return next(new AppError('No staff found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: editStaff,
    })
})

const deleteStaff = catchAsync(async (req, res, next) => {
    const deleteStaff = await Staff.findByIdAndDelete(req.params.id)

    if (!deleteStaff) {
        return next(new AppError('No staff found with that ID', 404))
    }

    res.status(204).json({
        status: 'success',
        data: deleteStaff,
    })
})

export { getStaffs, getStaffById, createStaff, updateStaff, deleteStaff }
