import express from 'express'
import mongoose from 'mongoose'

import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from   './routes/Answers.js'
import dotenv from 'dotenv'
import chatbotRoutes from './routes/Chatbot.js'
import otpRoutes from './routes/Otp.js'
import paymentRoutes from './routes/payment.js'
import updatePlans from './utils/updatePlans.js'
import plans from './routes/plans.js'
import postRoutes from './routes/post.js'
import getd from './routes/getd.js'
import cron from 'node-cron'

const app=express();
dotenv.config();
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get('/',(req,res)=>
{
	res.send("This is a stack-overflow clone API")

})

app.use('/user',userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)
app.use('/chatbot',chatbotRoutes)
app.use('/otp',otpRoutes)
app.use('/payment',paymentRoutes)
app.use('/plans',plans)
app.use('/post', postRoutes);
app.use('/getd', getd);


const DATABASE_URL=process.env.CONNECTION_URL


const PORT= process.env.PORT || 5000
cron.schedule('0 1 * * *',()=>{
	console.log('Plans are being updated', Date.now());
	updatePlans()
});

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})

.then(()=> app.listen(PORT, ()=>{console.log(`server running on PORT ${PORT}`)}))
.catch((err) => console.log(err.message))





