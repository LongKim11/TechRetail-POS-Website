import { mongoose, Schema } from 'mongoose'

const itemsSchema = mongoose.Schema(
    {
        product_id: {
            type: Schema.Types.ObjectId,
            required: [true, 'Product ID is required'],
            ref: 'Product',
        },
        price: {
            type: Schema.Types.Decimal128,
            required: [true, 'Price is required'],
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity is required'],
        },
        subTotal: {
            type: Schema.Types.Decimal128,
            required: [true, 'SubTotal is required'],
        },
    },
    { _id: false },
)

const orderSchema = mongoose.Schema(
    {
        staff_id: {
            type: Schema.Types.ObjectId,
            required: [true, 'Staff ID is required'],
            ref: 'Staff',
        },
        customer_id: {
            type: Schema.Types.ObjectId,
            required: [true, 'Customer ID is required'],
            ref: 'Customer',
        },
        totalAmount: {
            type: Schema.Types.Decimal128,
            required: [true, 'Total amount is required'],
        },
        receivedAmount: {
            type: Schema.Types.Decimal128,
            required: [true, 'Received amount is required'],
        },
        change: {
            type: Schema.Types.Decimal128,
            required: [true, 'Change is required'],
        },
        items: [itemsSchema],
    },
    { timestamps: true },
)

const Order = mongoose.model('Order', orderSchema)

export { Order }
