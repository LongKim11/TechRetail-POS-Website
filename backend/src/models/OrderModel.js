import {mongoose, Schema} from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        staff_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Staff',
        },
        customer_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Customer',
        },
        totalAmount: {
            type: Schema.Types.Decimal128,
            required: true,
        },
        receivedAmount: {
            type: Schema.Types.Decimal128,
            required: true,
        },
        change: {
            type: Schema.Types.Decimal128,
            required: true,
        },
        items: [
            {
                product_id: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                },
                price: {
                    type: Schema.Types.Decimal128,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                subTotal: {
                    type: Schema.Types.Decimal128,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true },
)

const Order = mongoose.model('Order', orderSchema)

export { Order }
