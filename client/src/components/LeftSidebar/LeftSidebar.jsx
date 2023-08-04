import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import globe from '../../assests/globe.jpg'

const LeftSidebar=()=>
{

 return (

<div className='left-sidebar'>
<nav className='side-nav'>
    <NavLink to='/' className='side-nav-links' activeClassName='active'>
      <p>Home</p>

    </NavLink>
   <div className='side-nav-div' className='side-nav-links'>
       <div><p>PUBLIC</p></div>
    <NavLink to= '/Questions' className='side-nav-links' activeClassName='active' style={{paddingLeft:"40px"}}>
        <img src ={globe} alt='Globe'  width="20"/>
        <p style={{paddingLeft:"10px"}}>Questions</p>
    </NavLink>
     
    <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:"40px"}}>
        <p>Tags</p>
    </NavLink>
       <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft:"40px"}}>
        <p>Users</p>
    </NavLink>
     <NavLink to='/Plans' className='side-nav-links' activeClassName='active' style={{paddingLeft:"40px"}}>
        <p>Plans</p>
    </NavLink>
   </div>
</nav>
</div>
 	)
}

export default LeftSidebar