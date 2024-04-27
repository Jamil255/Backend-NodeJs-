import express from 'express';
import signup from '../controllers/authController.js';
const router = express.Router();
// Signup route
router.post('/signup', signup);
export default router;