import jwt from 'jsonwebtoken'

import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'

import { Staff } from '../models/staffModel.js'

const login = catchAsync(async (req, res, next) => {
    const { username, password } = req.body
    // 1) Check if email and password exist
    if (!username || !password) {
        return next(new AppError('Please provide email and password!', 400))
    }

    // 2) Check if this is admin login
    if (username === 'admin' && password === '123') {
        return res.status(200).json({
            status: 'success',
            token: jwt.sign(
                { id: 'admin', role: 'admin' },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN,
                },
            ),
        })
    }

    // 3) Check if staff exists && password is correct
    const staff = await Staff.findOne({ 'account.username': username }).select(
        '+account.password',
    )
    if (
        !staff ||
        !(await staff.comparePassword(password, staff.account.password))
    ) {
        return next(new AppError('Incorrect username or password', 401))
    }

    const token = staff.jwtToken()
    staff.account.password = undefined

    res.status(200).json({
        status: 'success',
        data: {
            staff,
        },
        token,
    })
})

export { login }
