import mongoose from 'mongoose'
import app from './app.js'

const PORT = process.env.PORT || 8080
const MONGODB_URI =
    process.env.MONGODB_URI || `mongodb://localhost/phone-store-pos`

mongoose
    .connect(MONGODB_URI, {})
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log(error)
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`)
})
