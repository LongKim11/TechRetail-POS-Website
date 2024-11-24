import express from 'express'

import { uploadAvatar } from '../middlewares/uploadImage/multer.js'
import { isAuthenticated } from '../middlewares/auth/auth.js'
import {
    forgotPassword,
    login,
    logout,
    refresh,
    resetPassword,
} from '../controllers/authController.js'
import { createStaff } from '../controllers/staffController.js'

const router = express.Router()

router.post('/login', login)

router.route('/logout').post(logout)

router.route('/refresh').get(refresh)

router.route('/forgotPassword').post(forgotPassword)

router.route('/resetPassword/:token').patch(resetPassword)

router.post('/signup', uploadAvatar.single('avatar'), createStaff)

export default router
