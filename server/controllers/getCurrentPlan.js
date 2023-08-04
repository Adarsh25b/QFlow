import User from '../models/auth.js'
export const getCurrentPlan=async(req,res)=>
{
	try
	{
		const plan=await Users.findById(req.body.id).planOpted
		return res.status(200).json({plan:plan})
	}
	catch(error)
	{
		console.log(error)
		return res.status(500).json({error})
	}
}