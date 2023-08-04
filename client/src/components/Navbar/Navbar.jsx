import React ,{useEffect, useState} from 'react'
import {Link,useNavigate  } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import logo from '../../assests/logo.png'
import search from '../../assests/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button  from '../../components/Button/Button'
import {setCurrentUser} from '../../actions/currentUser'
import './Navbar.css'
import decode from 'jwt-decode'
import { useLocation } from "react-router-dom";

const Navbar=()=>  {

	let dispatch= useDispatch()
 let location = useLocation();
	var User=useSelector((state)=>(state.currentUserReducer))
  const navigate =useNavigate()
  const handleLogout=()=>
  {
     dispatch({type:'LOGOUT'});
     navigate('/') 
     dispatch(setCurrentUser(null))
   }
  
    useEffect(()=>
      {
      	const token=User?.token
        
      	if(token)
      	{
           const decodedToken= decode(token)

           if(decodedToken.exp*1000 < new Date().getTime())
           {
                 console.log('Token expired')           
                 handleLogout();
           }
      	}
         dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
      	

      },
      [dispatch,location]
      )

    const [state,setState]=useState(false)
  
  

	return (
        <nav className='main-nav'>
            <div className={state?'navbar-mobile':'navbar'}>
            <Link to='/' className='nav-item nav-logo-mobile'>
                    <img src={logo} alt='logo'  width="140"/>
            </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/CommunityHome' className='nav-item nav-btn'>Community</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='Search...'/>
                    <img src={search} alt="search" width="18" className='search-icon'/>
                </form>
                { User === null ? 
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> : 
                    <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                    </>
                }
            </div>
            <div className='toggle-button' onClick={()=>setState(!state)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}

export default Navbar