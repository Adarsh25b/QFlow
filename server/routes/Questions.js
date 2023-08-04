import express from 'express'
import {AskQuestion} from '../controllers/Question.js'
import {getAllQuestions, deleteQuestion, voteQuestion} from '../controllers/Question.js'
import auth from '../middleware/auth.js'
const router=express.Router()

router.post('/ask', auth,AskQuestion)
router.patch('/vote/:id', auth, voteQuestion);
router.get('/get', getAllQuestions)
router.delete('/delete/:id',auth, deleteQuestion);
export default router 