import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import validator from 'validator'

const accountSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            minlength: [6, 'Username must be at least 6 characters long'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters long'],
            select: false,
        },
    },
    { _id: false },
)

const staffSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            required: [true, 'Fullname is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: [true, 'Email already exists'],
            lowercase: [true, 'Email must be in lowercase'],
            validate: [validator.isEmail, 'Please provide a valid email'],
        },
        avatar: {
            type: String,
            required: [true, 'Avatar is required'],
        },
        account: accountSchema,
        status: {
            type: String,
            required: [true, 'Status is required'],
            enum: ['active', 'inactive'],
            default: 'active',
        },
        is_locked: {
            type: Boolean,
            required: [true, 'is_locked is required'],
            enum: ['true', 'false'],
            default: 'false',
        },
    },
    { timestamps: true },
)

staffSchema.pre('save', function (next) {
    if (this.isModified('account.password')) {
        this.account.password = bcrypt.hashSync(this.account.password, 12)
    }
    next()
})

staffSchema.methods.comparePassword = async (enteredPassword,   userPassword) => {
    console.log(enteredPassword, userPassword)
    return await bcrypt.compare(enteredPassword, userPassword)
}

staffSchema.methods.jwtToken = function () {
    const user = this
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}

const Staff = mongoose.model('Staff', staffSchema)

export { Staff }
