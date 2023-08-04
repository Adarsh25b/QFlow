import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Questions from './pages/Questions/Questions.jsx'
import DisplayQuestion from './pages/Questions/DisplayQuestion.jsx'
import Tags from './pages/Tags/Tags.jsx'
import Users from './pages/Users/Users.jsx'
import UserProfile from './pages/UserProfile/UserProfile'
import StripeForm from './pages/Payment/StripeForm'
import Plans from './pages/Plans/Plans'
import Success from './pages/Plans/Success'
import Failure from './pages/Plans/Failure'
import  CommunityHome from './pages/Community/CommunityHome'
import PostPage from './pages/PostPage/PostPage'
const AllRoutes=()=>
{

 return (

<Routes>
	 <Route  path='/' element={<Home/>}/>
	 <Route  path='/Auth' element ={<Auth/>}/>
     <Route  path='/Questions' element={<Questions/>}/>
     <Route  path='/AskQuestion' element={<AskQuestion/>}/>
     <Route  path='/Questions/:id' element={<DisplayQuestion/>}/>
      <Route  path='/Tags' element={<Tags/>}/>
      <Route path='/Users' element ={<Users/>}/>
      <Route path='/Users/:id' element={<UserProfile/>}/>
      <Route path='/Plans' element={<Plans/>}/>
      <Route path='/Payment' element={<StripeForm/>}/>
      <Route path='/S' element={<Success/>}/>
      <Route path='/Failure' element={<Failure/>}/>
      <Route path='/CommunityHome' element={<CommunityHome/>}/>
   
       <Route path="/stackoverflow-community/post/:id" element={<PostPage />} />
      <Route path="/stackoverflow-community" element={<CommunityHome />} />
</Routes> 
 	)
}

export default AllRoutes 