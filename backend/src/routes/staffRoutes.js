import express from 'express'
import {
    getAllStaffs,
    getStaffById,
    createStaff,
    updateStaff,
    deleteStaff,
} from '../controllers/staffController.js'

import { uploadAvatar } from '../middlewares/uploadImage/multer.js'
import { isAuthenticated } from '../middlewares/auth/auth.js'
import { restrictTo } from '../controllers/authController.js'

const router = express.Router()

// router.use(isAuthenticated)

router.route('/').get(getAllStaffs).post(createStaff)

router
    .route('/:id')
    .get(getStaffById)
    .put(uploadAvatar.single('avatar'), updateStaff)
    .delete(restrictTo('admin'), deleteStaff)

export default router
