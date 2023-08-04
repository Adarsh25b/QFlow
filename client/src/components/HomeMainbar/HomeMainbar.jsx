import React from 'react'
import {Link,useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import Questions from './Questions'
import QuestionsList from './QuestionsList'
import {useSelector} from 'react-redux'

const HomeMainbar=()=>
{
     var user=useSelector((state)=>(state.currentUserReducer))
    const navigate=useNavigate()

    const questionList=useSelector(state=> state.questionsReducer)
 

const location=useLocation()

const checkAuth=()=>
{
    if(user==null)
    {
        alert("login or signup to ask a question")
        navigate('/Auth')
    }
    else 
    {
        navigate('/AskQuestion')
    }

}

 return (

<div className="main-bar">
<div className="main-bar-header">
    {
        location.pathname=='/' ? <h1>Top questions </h1> : <h1> All questions </h1>
    }
<button  onClick={checkAuth} className='ask-btn'>Ask Question</button>
 
</div>

<div>
    {
        questionList.data==null ?
        <h1>Loading...</h1> 
        : 
        <>
        <p>
            { questionList.data.length} questions
            
        </p>
        <QuestionsList  questionList={questionList.data}/>
        </>
    }
</div>
</div>

 	)
}

export default HomeMainbar