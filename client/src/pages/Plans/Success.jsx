import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './Success.css'
import {setCurrentUser} from '../../actions/currentUser'
const Success=()=>

{
   const dispatch= useDispatch()


 var user = JSON.parse(localStorage.getItem('Profile'))
 if(user===null)
 {
 	alert('Login Please')
 }

  dispatch(setCurrentUser(null));



 const [amount, setamt] = useState('');
 const [email, seteml] = useState('');
 const [brand, setbrand]= useState('');
 const [country,setcount]=useState(' ');
  const  idd = new URLSearchParams(window.location.search).get(
      "payment_intent"
    );
  console.log(idd);

fetch("https://adarsh12345.onrender.com/getd", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
             body: JSON.stringify({ idd:idd})
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('dsfsdf')
        	setamt(data.amount);
            seteml(data.email);
            setbrand(data.brand);
            setcount(data.country);
    });
    

     console.log(amount);
    var plan=amount===100 ? 'Silver': 'Gold';
     	
var date = new Date();   
	var current_time = date.getDate()+":"+date.getMonth()+ ":" +date.getFullYear()+"  "+ date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

  
    return (
    	<div class="starting">
     <div class="container">
        <div class="printer-top"></div>

        <div class="paper-container">
            <div class="printer-bottom"></div>

            <div class="paper">
                <div class="main-contents">
                    <div class="success-icon">&#10004;</div>
                    <div class="success-title">
                        Transaction Complete
                    </div>
                    <div class="success-description">
                        Thank you for completing the payment! Here are the details of the Transaction!
                    </div>
                    <div class="order-details">
                    <div class="order-number-label">Trnasaction id</div>
                        <div class="order-number">{idd}</div>
                           <div class="order-number-label">Plan Buyed</div>
                        <div class="order-number">{plan}</div>
                         <div class="order-number-label">Date</div>
                        <div class="order-number">{current_time}</div>
                        <div class="order-number-label">Amount</div>
                        <div class="order-number">Rs {amount}</div>
                          <div class="order-number-label">Name</div>
                        <div class="order-number">{user.result.name}</div>
                         <div class="order-number-label"> Transaction Email ID</div>
                        <div class="order-number">{email}</div>
                         <div class="order-number-label">Card Brand</div>
                        <div class="order-number">{brand}</div>
                      
                        <a href='/Auth' class="complement">Log In Again Please</a>	
                        <br/>
                        <br/>
                        <div class="complement">Thank You!</div>

                    </div>
                </div>
                <div class="jagged-edge"></div>
            </div>
        </div>
    </div>
    </div>
    	);
   }

export default Success

