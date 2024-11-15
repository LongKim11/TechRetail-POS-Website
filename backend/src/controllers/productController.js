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
    // const image = req.file.filename
    // const newProduct = new Product({ ...req.body, image })

    const savedProduct = await Product.create(req.body)
    res.json(savedProduct)
})

const updateProduct = catchAsync(async (req, res, next) => {
    const image = req.file.filename
    const id = req.params.id
    const updatedProduct = new Product({
        ...req.body,
        image,
    })

    const result = await Product.findByIdAndUpdate(id, updatedProduct)
    res.json({ message: 'Product updated successfully' })
})

const deleteProduct = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await Product.findByIdAndDelete(id)

    if (!result) {
        return res.status(404).json({ message: 'Product not found' })
    }

    res.json({ message: 'Product deleted successfully' })
})

export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}
