import React, { useState } from 'react'
import { auth } from './firebase'
import "./login.css"
import {useHistory} from "react-router-dom"


function Login() { 
    const history=useHistory();
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const signin = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            
            
             
                history.push("/")
        
        })
        .catch(err => alert(err.message))
    }

   const handlecreate =()=>{
       history.push("/createaccount")
   } 
    
 
    return (
        
        <div className="login">
           <img className="login__image" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Amazon.com-Logo.svg" alt=""/> 
           <div className="login__container">
               <h2>Login</h2>
               <form >
 <h5>Email</h5>                  
<input type="text" value={email} onChange={e => setemail(e.target.value)}/>
<h5>Password</h5>
<input value={password} onChange={e =>setpassword(e.target.value)} type="password"/>

<div >
<button className="login__button" type="submit" onClick={signin} >Log in</button>
</div>
<p>By continuing, you agree to Amazon's
     Conditions of  Use and Privacy Notice.</p>
     </form>    
           </div>
   <h6>New To Amazon?</h6>
   <button className="login__createbutton" type="submit" onClick={handlecreate}>Create Your Amazon Account</button>
  
        </div>
    )
}

export default Login
