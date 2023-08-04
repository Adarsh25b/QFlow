import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   auth: {
     user: process.env.EMAIL_ID,
     pass: process.env.EMAIL_PASSWORD
   }
   });

transporter.verify((error, success)=>
{
   if(error)
   {
   	 console.log(error)
   }
   else
   {
   	 console.log('Ready for messages')
   	 console.log(success)
   }
})

const sendEmail=async(mailOptions)=>
{
	try
	{
		await transporter.sendMail(mailOptions)
		return ;
	}
	catch(error)
	{
		throw(error)
	}
}

export default sendEmail