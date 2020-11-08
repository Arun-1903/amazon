import React from 'react'
import "./CheckoutProduct.css"
import { useSetValue } from './stateProvider'

function CheckoutProduct({image,id,rating,title,cost}) {
   const [,dispatch]=useSetValue()
   const removefrombasket=() =>{
      dispatch({
type:   "REMOVE_FORM_BASKET"
,
id:id



      })
   }
    return (
        <div className="checkoutproduct">
           <img src={image} alt=""/>  
           
           
            <div className="CheckoutProduct__info">
               <div className="CheckoutProduct__title">
                  <p>{title}</p>
                  </div>
                 <div className="CheckoutProduct__cost">

                 <small>&#x20B9;</small>
              <b>{cost}</b>
                     </div>  
                     <div className="CheckoutProduct__rating">
              {Array(rating).fill().map((_,i) => (
                 <p>⭐</p>
              ))}
              </div>
              <button onClick={removefrombasket}>Remove From Cart </button>
          </div> 
        </div>
       
    )
}

   export default CheckoutProduct
