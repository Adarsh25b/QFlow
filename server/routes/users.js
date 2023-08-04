import express from 'express';
const router=express.Router();
import {login, signup} from '../controllers/auth.js'
import {follow,unfollow,getAllUsers,updateProfile} from '../controllers/users.js'
import auth from '../middleware/auth.js' 

router.post('/signup', signup)
router.post('/login', login)
router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id',auth,  updateProfile)
router.put("/follow/:id", auth,follow )
router.put("/unfollow/:id",auth, unfollow)   
export default router 