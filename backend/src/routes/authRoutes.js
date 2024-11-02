import express from 'express'

import { uploadAvatar } from '../middlewares/uploadImage/uploads/multer.js'
import { isAuthenticated } from '../middlewares/auth/auth.js'
import { login } from '../controllers/authController.js'
import { createStaff } from '../controllers/staffController.js'

const router = express.Router()

router.post('/login', login)

router.post('/signup', uploadAvatar.single('avatar'), createStaff)

export default router