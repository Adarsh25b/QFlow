
import React from 'react'
import LefSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar.jsx'
import '../../App.css'  

const Home=()=>
{

 return (

<div className='home-container-1'>

<LefSidebar/>
<div className="home-container-2">
	<HomeMainbar/>
	<RightSidebar/>
</div>

</div>
 	)
}
 
export default Home
 