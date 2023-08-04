import React from 'react'

import '../../App.css'
import LefSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar.jsx'

const Questions=()=>{
     return ( 
     

     <div className='home-container-1'>
     <LefSidebar/>
     <div className='home-container-2'>
     	<HomeMainbar/>
        <RightSidebar/>
     </div> 
     </div>

     	)

}

export default Questions