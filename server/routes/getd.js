import express from 'express'
const router =express.Router()

router.post('/', async(req,res)=>
{ 
	try{
	const {idd}=req.body;


    
    var [amount,pm]= await fetch(`https://api.stripe.com/v1/payment_intents/${idd}`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${process.env.STRIPE_SECRET_KEY}`, "Content-Type": "application/json" },
           
        })
        .then((res) => res.json())
        .then((data) => {return [data.amount,data.payment_method]});

    
    var [email,brand,country] =await fetch(`https://api.stripe.com/v1/payment_methods/${pm}`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${process.env.STRIPE_SECRET_KEY}`, "Content-Type": "application/json" },
           
        })
        .then((res) => res.json())
        .then((data) => {return [data.billing_details.email, data.card.brand,  data.card.country]});

   res.status(200).json({amount:amount, email:email, brand:brand, country:country})
}
catch(error)  
	 {
	 	res.status(500).json(error);
	 }
})

export default router