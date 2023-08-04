import mongoose from "mongoose";

const userSchema=mongoose.Schema({

	name:{type:String, required:true},
	email:{type:String, required:true},
	password:{type:String, required:true},
	about:{type:String},
	tags:{type:[String]},
	joinedOn:{type:Date, default:Date.now},
	planOpted:{type:String,default:'Free',required:true},
	planOptedOn:{type:Date, default:Date.now},
    noOfQuestions:{type:Number,default:1,required:true},
    followings:{type:[String],default:[]},
    followers:{type:[String], default:[]},

},
{ timestamps: true }
)

export default mongoose.model("User", userSchema)

