import React from 'react'
import './RightSidebar.css'
import comment from '../../assests/comment.svg'
import pen from '../../assests/pen.svg'
import black from '../../assests/black.png'

const Widget=()=>
{

 return (

           <div className='widget'>
             
             <h4>The overflow blog</h4>
            <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
            <img src={pen} alt="pen" width='18'/>
               <p>Observibilty is key to the future of software and (and your DevOps Career)</p>
            </div>

             <div className="right-sidebar-div-2">
            <img src={pen} alt="pen" width='18'/>
               <p>Podcast 374? How valuable is your screen name ?</p>
            </div>

            </div>

            <h4>Featured on Meta</h4>
            <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
            <img src={comment} alt="comment" width='18'/>
               <p>
AI/ML Tool examples part 3 - Title-Drafting Assistant
</p>
            </div>

             <div className="right-sidebar-div-2">
            <img src={comment} alt="comment" width='18'/>
               <p>
We are graduating the updated button styling for vote arrows </p>
            </div>

            <div className="right-sidebar-div-2">
            <img src={black} alt="black" width='18'/>
               <p>
The [connect] tag is being burninated
</p>

            </div>
            </div>

             <h4>Hot Meta Posts</h4>
            <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
            <p>38</p>
               <p>Why was this spam flag declined, yet the question marked as spam </p>
            </div>

             <div className="right-sidebar-div-2">
           <p>24 </p>
               <p>Is a link to the "How to ask" help page a useful comment ?</p>
            </div>

                <div className="right-sidebar-div-2">
           <p>17</p>
               <p>What is the best course of action when user has high rep to</p>
            </div>


            </div>

           </div>
         
 	)
}

export default Widget
