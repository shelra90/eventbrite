import express from 'express'
<<<<<<< HEAD
import { authUser } from '../controllers/userController.js'
=======
import { authUser, getUserProfile, updateUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
>>>>>>> 69d54748a73bff52f5db16d0ca51137658e4bab2

const router = express.Router()

// @desc    Authenticate user and generate token
// @route   POST /api/users/login
<<<<<<< HEAD
// @access  public 
router.post('/login', authUser)

=======
// @access  public
router.post('/login', authUser)

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
router.route('/').post(registerUser)

// @desc    Get the user profile
// @route   GET /api/users/profile
// @access  Private
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

>>>>>>> 69d54748a73bff52f5db16d0ca51137658e4bab2
export default router