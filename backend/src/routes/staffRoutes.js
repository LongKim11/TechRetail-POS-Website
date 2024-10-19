import express from 'express'
import {
    getAllStaffs,
    getStaffById,
    createStaff,
    updateStaff,
    deleteStaff,
} from '../controllers/staffController.js'

import { uploadAvatar } from '../middlewares/uploadImage/multer.js'

const router = express.Router()

router
    .route('/')
    .get(getAllStaffs)
    .post(uploadAvatar.single('avatar'), createStaff)
router
    .route('/:id')
    .get(getStaffById)
    .put(uploadAvatar.single('avatar'), updateStaff)
    .delete(deleteStaff)

export default router
