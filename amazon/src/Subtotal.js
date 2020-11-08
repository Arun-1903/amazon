import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useSetValue } from './stateProvider';
import "./subtotal.css";
import {getBasketTotal} from "./Reducer"
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history=useHistory();
  const handlecheckout=() => {
    
    history.push("/payment");
  }
    const [{basket}]=useSetValue()
    console.log(getBasketTotal(basket));
    
    return (
      <div>
        <div className="subtotal">
          <CurrencyFormat
          
          renderText={(value) =>(
        <>
          <p>Subtotal({basket.length} items):<strong>{value}</strong></p>
  





             </>



          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}

          thousandSeparator={true}
          prefix={"₹"}
          
          /> 
          
        <small className="subtotal__gift"> 
  
  <input className="checkbox" type="checkbox" />This Order contains a gift 
  
  </small> 
      
          <button onClick={handlecheckout}>Procced To Checkout</button>
        </div>
        
        </div>
      
    )
}

export default Subtotal
