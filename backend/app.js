import express from 'express'
import cors from 'cors'

import customerRoute from './src/routes/customerRoutes.js'
import productRoute from './src/routes/productRoutes.js'
import brandRoute from './src/routes/brandRoutes.js'
import staffRoute from './src/routes/staffRoutes.js'
import orderRoute from './src/routes/orderRoutes.js'

import AppError from './src/utils/appError.js'

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static('public'))

// Routes
app.use('/api/v1/customers', customerRoute)
app.use('/api/v1/products', productRoute)
app.use('/api/v1/brands', brandRoute)
app.use('/api/v1/staffs', staffRoute)
app.use('/api/v1/orders', orderRoute)

// Error Handling
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

export default app
