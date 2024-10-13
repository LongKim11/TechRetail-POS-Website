import mongoose from 'mongoose'

const customerSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
)

const Customer = mongoose.model('Customer', customerSchema)

export { Customer }
