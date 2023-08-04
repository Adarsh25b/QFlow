import mongoose from 'mongoose'

const OTPSchema=mongoose.Schema({

	name:{type:String},
	email:{type:String, unique:true},
	otp:{type:String},
	createdAt:{type:Date},
	expiresAt:{type:Date},
	
})

export default mongoose.model("OTP", OTPSchema)