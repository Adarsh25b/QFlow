import express from 'express'
import Stripe from 'stripe'
import {addPlan} from '../utils/addPlan.js'

const router =express.Router()

const priceItems={
	'Silver':100,
	'Gold':1000
}

router.post("/purchasePlan", async(req,res)=>{
   try
   {
     
   	 const stripe= new Stripe(process.env.STRIPE_SECRET_KEY)
    
   	 const plan=req.body.plan  
   	 const id=req.body.id  
     const amount=priceItems[plan]

     const paymentIntent= await stripe.paymentIntents.create({
     	amount:(amount),
     	currency:"inr",
     	automatic_payment_methods:{
     		enabled:true,
     	},
      setup_future_usage:'off_session'
     });
     
     res.send({
     	clientSecret:paymentIntent.client_secret,
     });
     return addPlan(id,plan)
   }

   catch(e)
   {
   	 console.log('payment purchase plan', e.message)
   	 return res.status(500).json({error:e.message})
   }	
})

export default router