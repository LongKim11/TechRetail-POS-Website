import express from 'express'
import {
    getAllStaffs,
    getStaffById,
    createStaff,
    updateStaff,
    deleteStaff,
} from '../controllers/staffController.js'

import { uploadAvatar } from '../middlewares/uploadImage/uploads/multer.js'
import { isAuthenticated } from '../middlewares/auth/auth.js'

const router = express.Router()

router.use(isAuthenticated)

router.route('/').get(getAllStaffs).post(uploadAvatar.single('avatar'), createStaff)

router
    .route('/:id')
    .get(getStaffById)
    .put(uploadAvatar.single('avatar'), updateStaff)
    .delete(deleteStaff)

export default router
