import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'
import { Product } from '../models/productModel.js'
import { Brand } from '../models/brandModel.js'

const getAllProducts = catchAsync(async (req, res, next) => {
    const products = await Product.find()

    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products,
        },
    })
})

const getProductById = catchAsync(async (req, res, next) => {
    const id = req.params.id
    const product = await Product.findById(id)
    if (!product) {
        res.json({ status: 'fail', message: 'Product not found' })
    }
    res.json(product)
})

const createProduct = catchAsync(async (req, res, next) => {
    const {
        brand_id,
        name,
        barcode,
        import_price,
        retail_price,
        category_name,
        category_type,
    } = req.body

    const image = req.file.filename

    if (
        !brand_id ||
        !name ||
        !barcode ||
        !import_price ||
        !retail_price ||
        !category_name ||
        !category_type ||
        !image
    ) {
        return res.status(400).json({
            status: 'fail',
            message:
                'Send all required fieds: brand_id, name, barcode, import_price, retail_price, category, image',
        })
    }

    // get brand id from brand name
    const brand = await Brand.findById(brand_id)
    if (!brand) {
        return res.status(400).json({ message: 'Brand not found' })
    }

    const newProduct = new Product({
        brand_id: brand.id,
        name,
        barcode,
        import_price,
        retail_price,
        category: {
            name: category_name,
            type: category_type,
        },
        image,
    })

    const savedProduct = await Product.create(newProduct)
    res.json(savedProduct)
})

const updateProduct = catchAsync(async (req, res, next) => {
    const brand_id = req.body.brand_id
    const name = req.body.name
    const barcode = req.body.barcode
    const import_price = req.body.import_price
    const retail_price = req.body.retail_price
    const category = req.body.category
    const image = req.file.filename

    if (
        !brand_id ||
        !name ||
        !barcode ||
        !import_price ||
        !retail_price ||
        !category ||
        !image
    ) {
        return res.status(400).json({
            status: 'fail',
            message:
                'Send all required fieds: brand_name, name, barcode, import_price, retail_price, category, image',
        })
    }

    const id = req.params.id
    const updatedProduct = new Product({
        name,
        barcode,
        import_price,
        retail_price,
        category,
        image,
    })

    const result = await Product.findByIdAndUpdate(id, updatedProduct)
    res.json({ message: 'Product updated successfully' })
})

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Product.findByIdAndDelete(id)
        res.json({ message: 'Product deleted successfully' })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message })
    }
}

export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}
