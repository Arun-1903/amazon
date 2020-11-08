import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useSetValue } from './stateProvider';
import "./payment.css"
import { Link, useHistory } from "react-router-dom";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js"
import { getBasketTotal } from './Reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

function Payment() {
    const history=useHistory();
    const [{basket,name}]=useSetValue();
    const stripe=useStripe();
    const elements=useElements();
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [processing,setProcessing]=useState(false)
    const [succeeded,setSucceeded]=useState(false);
    const [clientsecret,setclientsecret]=useState(true);
    useEffect(()=>{
const getClientSecret= async() =>{
const response=await axios({
    method:"post",
    url:  `payments?total=${getBasketTotal(basket) * 100}`
});
setclientsecret(response.data.clientsecret)
console.log(response);
}
getClientSecret();

    },[basket])
    
    console.log(clientsecret);
    
    const handle=async(e) =>{
e.preventDefault();
setProcessing(true)
const payload = await stripe.confirmCardPayment(clientsecret, {
    payment_method: {
      card: elements.getElement(CardElement)
    }
  });
  if (payload.error) {
    setError(`Payment failed ${payload.error.message}`);
    setProcessing(false);
  } else {
    setError(null);
    setProcessing(false);
    setSucceeded(true);
    history.replace("/oders")
  }
};
    
    
   
    const handlechange =e =>{
        setError(e.error?e.error.message:"");
        setDisabled(e.empty)

    }
    return (<div className="payment">
      
        <div className="payment__container">
        <h1>
Checkout(<Link to="/checkout">{basket.length}items</Link>)

        </h1>
          <div className="payment__section">
<div className="payment__title">
   <h3> Delivery Address</h3>
</div>
<div className="payment__address">
    <p>{name}</p>
    <p>Address line 1</p>
    <p>address  line 2</p>
</div>
          </div>
          <div className="payment__section">
             <div className="payment__title">
                <h3> Review items and delivery</h3>
                 </div> 
                 <div className="payment__items">
                     {basket.map((item)=>(

<CheckoutProduct
 
id={item.key}
image={item.image}
cost={item.cost}
rating={item.rating}
title={item.title}


/>


                     ))}
                 </div>
          </div>
          <div className="payment__section">
              <div className="payment__title">
                  <h3>Payment Methods</h3>
              </div>
              <div className="payment__details">
                  <form onSubmit={handle}>
                      <CardElement onChange={handlechange} />
                      <div className="payment__pricecontainer">
                      <CurrencyFormat
          
          renderText={(value) =>(
        <>
          <h3>Order Total:{value}</h3>
  





             </>



          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}

          thousandSeparator={true}
          prefix={"₹"}
          
          /> 
          <button disabled={processing ||succeeded ||disabled}>
              <span>{processing?<p>Processing...</p>:"Buy Now" } </span>
          </button>
                      </div>
                      
                      
                    {error && <div> {error}</div>}
                    
                  </form>
                 
                   
                  
              </div>
              </div>
        </div>
        </div>
    )
}

export default Payment
