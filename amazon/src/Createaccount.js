import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./createaccount.css"
import { auth } from './firebase'
import { useSetValue } from "./stateProvider";

function Createaccount() {
    const [,dispatch]=useSetValue();
    const history=useHistory();
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[mobile,setmobile]=useState("")
    const handlecreate= e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
           
            if(auth){
             
                history.push("/")
           }
        })
        .catch(err => alert(err.message))
        dispatch({
            type:"SET_DETAILS",
            name:name,
            mobile:mobile
        })
    }
    return (
        <div className="createaccount">
           <img className="createaccount__image" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Amazon.com-Logo.svg" alt=""/> 
           <div className="createaccount__container">
               <h2>Create Account</h2>
               <form >
 <h5>Your Name</h5>                  
<input type="text" value={name} onChange={e=>setname(e.target.value)}/>

<h5>Mobile Number</h5>
<input type="tel"  value={mobile} onChange={e => setmobile(e.target.value)} placeholder="Mobile Number"  required/>
<h5>Email</h5>
<input type="text"  value={email} onChange={e => setemail(e.target.value)} required/>
<h5>Password</h5>
<input type="password" value={password} onChange={e =>setpassword( e.target.value)}  placeholder="At leaast 6 character"     required/>

     </form>   
      
     <button className="createaccount__button" type="submit" onClick={handlecreate}>Continue</button>
           </div>
        </div>
    )
}

export default Createaccount
