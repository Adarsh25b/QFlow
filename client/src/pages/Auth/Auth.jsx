import React ,{useState} from 'react'
import './Auth.css'
import icon from '../../assests/icon.png'
import AuthAbout from './AuthAbout.jsx'
import {signup, login} from '../../actions/auth'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Auth=()=>
{
	const [isSignup, setIsSignup]= useState(false)
   const [name, setName] =useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword]=useState('')
   const dispatch= useDispatch()
   const navigate= useNavigate()


	const handleSwitch= ()=>{
		setIsSignup(!isSignup)
	}

   const handleSubmit=(e)=>
   {
      console.log('grger')
      e.preventDefault()
      if(!email || !password)
      {
         alert('Enter email and password both')
      }
      if(isSignup)
      {
         if(password.length<8)
         {
            alert('password should be atleast 8 characters')
         }
         if(!name)
         {
            alert("Enter a name to continue")
         }
          if(name && password.length>=8)
         dispatch(signup({name, email, password},navigate))
      }
      else
      {
        dispatch(login({email, password},navigate))  
      }
      console.log({name,email,password})
   }

 return (

   <section className='auth-section'>
{

isSignup && <AuthAbout/>

}
   



   <div className='auth-container-2'>
   	  { !isSignup && <img src={icon}  alt='stack overflow' className='login-logo'/>}
       
      <form onSubmit={handleSubmit}>
         {
           
            isSignup && (

                 <label htmlFor="'name">
                 	<h4>Display name</h4>
                    <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
                 </label>


            	)
         }

      	<label htmlFor="email">
      		
        <h4>
        	Email
        </h4>
        <input type="email" name='email'  id='email' onChange={(e)=>{setEmail(e.target.value)}} />
      	</label>

      	<label htmlFor="password" >
      		
        <div style={{display:"flex", justifyContent:"space-between"}}>
	          <h4>
	          	 Password
	          </h4>
	         {!isSignup  &&  <p style={{ color : "#007ac6", fontSize:"13px"}}> Forgot Password</p>}

        </div>
        <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} />
         { isSignup && <p style={{ color : "#666767", fontSize:"13px"}}>
         	 Password must contain atleast 8 charachters !

         </p>  }
         
      	</label>

      	{
      		isSignup && (
                      <label htmlFor="check">
                         <input type= "checkbox"  id="check" />
                          <p>Opt in to receive occasional, <br/>
                           product updates, user research and digests.
  
                          </p>
                      </label>

      			)
      	}
    <button type="submit" className="auth-btn" onClick={handleSubmit}>{isSignup ? 'SingUp' : 'LogIn'} </button>

      	{
      		isSignup && (
                      
                          <p style={{ color : "#666767", fontSize:"13px"}}>By clicking "Sign up", you agree to our<br/>
                            <span style=   {{ color : "#007ac6"}}> terms of service </span>, <span style=   {{ color : "#007ac6"}}>privacy policy</span> and <span style=   {{ color : "#007ac6"}}> cookie poilcy </span>  
                          </p>

      			)
      	}

      </form>
     <p>
     	{isSignup ? 'already have an account?' : "Don't have an account?"}
     	<button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log In" : "sign up" }</button>
     </p>
   </div>
   </section>   

 	)
}

export default Auth