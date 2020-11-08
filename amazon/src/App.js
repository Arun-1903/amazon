
import  Home  from "./Home";
import './App.css';
import  Header from "./Header";
import{ BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Checkout from "./Checkout"
import Login from "./Login";
import { auth } from "./firebase";
import { useSetValue } from "./stateProvider";
import { useEffect } from "react";
import Payment from "./Payment.js"
import Createaccount from "./Createaccount";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"


const promise=loadStripe("pk_test_51HkmwwIQnIwJz7kRCEPUvXFlvi5JhYgfRCMC4h33xrVMGm921zNaDM44myyTGXdJPCAqGPaJudx0t1BRgSjOMy7000d0iC9Rk2c")
function App() {

  
  const [,dispatch]=useSetValue();
  useEffect(() => {
  
    auth.onAuthStateChanged(authUser =>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
    return () => {
      
    }
  }, [dispatch])
  return (

    <Router>
    
    <div className="App">
 
    <Switch>
 <Route path="/login">
<Login />
 </Route>
 <Route path="/createaccount">
<Createaccount />
 </Route>
      <Route path="/checkout">
      <Header />
      
<Checkout />

</Route>
<Route path="/payment">
      <Header />
     <Elements stripe={promise} >
<Payment />
</Elements> 
</Route>
      <Route path="/">
      <Header />
   
      
   <Home />
   </Route>
   </Switch>
    </div>
    </Router>
  );
}

export default App;
