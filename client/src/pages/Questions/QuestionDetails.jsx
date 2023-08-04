import React,{useState} from 'react'
import {useParams,Link, useNavigate, useLocation} from 'react-router-dom'
import upvote from '../../assests/upvote.png'
import downvote from '../../assests/downvote.png'
import './Question.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer.jsx'
import {useSelector, useDispatch} from 'react-redux'
import {postAnswer} from '../../actions/question'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import {deleteQuestion,voteQuestion} from '../../actions/question'

 
const QuestionDetails=()=>
{
	   const {id}= useParams()
       const questionList=useSelector(state=> state.questionsReducer)
	/*   var questionList=[{
    _id:'1',
    upVotes:7,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"What is a fucntion?",
    questionBody:'It mean to be',
    questionTags :["java","nodejs", "reactjs","mongodb"],
    userPosted: "mano",
    askedOn:"jan 1",
    userId:1,
    answer:[
        {
            answerBody:"Answer",
            userAnswered:"kumar",
            answerOn:"jan 2",
            userId:2,
        }
        ]

},
{
     _id:'2',
    upVotes:8,
    downVotes:2,
    noOfAnswers:0,
    questionTitle:"What is a fucntion?",
    questionBody:'It mean to be',
    questionTags :["javascript","python","R"],
    userPosted:"mano",
    askedOn:"jan 1",
    userId:2,
     answer:[
        {
            answerBody:"Answer",
            userAnswered:"kumar",
            answerOn:"jan 2",
            userId:2,
        }
        ]

},
{
    _id:'3',
    upVotes:1,
    downVotes:3,
    noOfAnswers:0,
    questionTitle:"What is a fucntion?",
    questionBody:'It mean to be',
    questionTags :["javascript","python","R"],
    userPosted:"mano",
    askedOn: "jan 1",
    userId:3,
    answer:[
    {
        answerBody:"Answer",
            userAnswered:"kumar",
            answerOn:"jan 2",
            userId:2,
        
    }]

}]
*/
   const Navigate = useNavigate()    
   const User= useSelector((state)=>(state.currentUserReducer))
   const [Answer, setAnswer]= useState('')
   const dispatch= useDispatch()
   const handlePostAns= (e, answerLength)=>{
     e.preventDefault()
     if(User==null)
     {
        alert('Login or Sinup to answer a question')
        Navigate('/Auth')
     }
     else  
     {
        if(Answer==='')
        {
            alert('Enter an answer before submitting')  
        }

        else  
        {
            dispatch(postAnswer({ id, noOfAnswers:answerLength+1, answerBody:Answer, userAnswered:User.result.name, userId:User.result._id}))
        }
        
        }
     }

    const location=useLocation()
    const url= 'https://adarsh25b.netlify.app'
    const handleShare=()=>
    {
       copy(url+location.pathname)
    alert('Copied url :'+url+location.pathname)
    }

    const handleDelete=()=>
    {
        dispatch(deleteQuestion(id,Navigate))
    }

    const handleUpVote=()=>
    {
         if(User==null)
     {
        alert('Login or Sinup to upvote a question')
        Navigate('/Auth')
     }
        else
        {
         dispatch(voteQuestion(id, 'upVote',User.result._id))
        }

    }

    const handleDownVote=()=>
    {
         if(User==null)
     {
        alert('Login or Sinup to downvote a question')
        Navigate('/Auth')
     }
        else{
         dispatch(voteQuestion(id, 'downVote',User.result._id))
        }

    }

   return(
     <div className='question-details-page'>
         {
         	  questionList.data==null? 
         	   <h1>Loading....</h1>:
         	   <>
               {
               	 questionList.data.filter(question =>question._id===id).map(question=>(
                   <div key={question._id}>
                   	  <section className="question-details-container">
                   	       	<h1>{question.questionTitle}</h1>
                   	  	 <div className='question-details-container-2'>
                              <div className="question-votes">
                              	 <img src={upvote} alt="" width='18' className='votes-icon' onClick={handleUpVote}/>
                              	 <p> {question.upVotes.length - question.downVotes.length}</p>
                              	 <img src={downvote} alt="" width='18' className='votes-icon' onClick={handleDownVote}/>
                              </div>
                              <div style={{width:"100%"}}>
                              	<p className='question-body'>{question.questionBody}</p>
                              	<div className="question-details-tags">
                              		{
                              			question.questionTags.map((tag)=>
                              			(
                              				<p key={tag}>{tag}</p>
                              			))
                              		}
                              	</div>
                              	<div className="question-actions-user">
                              		<div>
                              			<button type='button' onClick={handleShare}>Share</button>
                                        {
                                            User?.result?._id ===question?.userId &&
                                            (
                                                 <button type='button' onClick={handleDelete}>Delete</button>
                                                  
                                                )
                                        }
                              			
                              		</div>
                              	  	<div>
                              	  		<p>asked {moment(question.askedOn).fromNow()}</p>
                              	  		<Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                              	  			<Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                              	  			<div>
                              	  				 {question.userPosted}
                              	  			</div>
                              	  		</Link>
                              	  	</div>
                              	</div>
                              </div>
                   	  	 </div>
                   	  </section>
                   	  {
                   	  	question.noOfAnswers !=0 && (
                            <section>
                            <h3>{question.noOfAnswers} Answers</h3>
                            <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                            </section>
                   	  		)
                   	  }
                   	  <section className='post-ans-container'>
                       <h3>Your Answer</h3>
                       <form  onSubmit={ (e)=>{handlePostAns(e, question.answer.length)}}>
                       	<textarea name="" id="" cols="30" rows="10" onChange={e =>setAnswer(e.target.value)}></textarea><br/>
                       	<input type="submit" className="post-ans-btn" value="Post Your answers"/>
                       </form>
                       <p>Browse other Question tagged</p>
                       {
                          question.questionTags.map((tag)=>
                          	(
                          		<Link to='/Tags' key={tag} className="ans-tags">{tag}</Link>
                          		))

                       }

                                                 or  
                          <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}>Ask your own question.</Link>


                   	  </section>
 
                   </div>
                     
               	 ))
               }
           
         	   </>
         }
       
    </div>
 
   	)
}

export default QuestionDetails