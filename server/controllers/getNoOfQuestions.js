import User from '../models/auth.js'

export const getNoOfQuestions=async(req,res)=>
{
	try
	{
		const noOfQuestions= await User.findById(req.body.id).getNoOfQuestions
		return res.status(200).json({noOfQuestions:noOfQuestions})

	}
	catch(error)
	{
		console.log(error)
		return res.status(500).json({error})
	}
}