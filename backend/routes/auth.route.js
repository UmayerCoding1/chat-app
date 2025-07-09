import express from 'express';
import { logout, otherUser, userLogin, userRegister } from '../controllers/user.controller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/logout', logout);
router.get('/', isAuthenticated, otherUser);

export default router;