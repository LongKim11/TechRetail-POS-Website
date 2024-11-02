import {mongoose, Schema} from 'mongoose'

const productSchema = mongoose.Schema(
    {
        brand_id: {
            type: Schema.Types.ObjectId,
            required: [true, 'Brand ID is required'],
            ref: 'Brand',
        },
        name: {
            type: String,
            required: [true, 'Product name is required'],
        },
        barcode: {
            type: String,
            required: [true, 'Barcode is required'],
        },
        import_price: {
            type: Schema.Types.Decimal128,
            required: [true, 'Import price is required'],
        },
        retail_price: {
            type: Schema.Types.Decimal128,
            required: [true, 'Retail price is required'],
        },
        category: {
            name: {
                type: String,
                required: [true, 'Category name is required'],
                enum: {
                    values: ['phone', 'accessories'],
                    message: 'Category name must be either phone or accessories',
                },
            },
            type: {
                type: String,
            },
        },
        image: {
            type: String,
            required: [true, 'Image URL is required'],
        },
    },
    { timestamps: true },
)

const Product = mongoose.model('Product', productSchema)

export { Product }
