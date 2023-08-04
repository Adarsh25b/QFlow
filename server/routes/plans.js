import express from 'express'
import {getCurrentPlan} from '../controllers/getCurrentPlan.js'
import {getNoOfQuestions} from '../controllers/getNoOfQuestions.js'

const router=express.Router()

router.post('/getCurrentPlan',getCurrentPlan)
router.post('/getNoOfQuestions',getNoOfQuestions)

export default router