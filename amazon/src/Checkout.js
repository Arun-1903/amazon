
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useSetValue } from './stateProvider'
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket,user,name}]=useSetValue();
    return (
        <div className="checkout">
          <div className="checkout__left">  
          <img  className=".checkout__ad"  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_W3/ILM/Bank_ILM_640x45._CB418042862_.jpg" alt=""/>
          <div className="checkout__title">
    <h2>Hello {user?name:"Guest"}</h2>
            <h2>Your Shoping Cart</h2>  
          </div>
      

{basket.map(item => (
  <CheckoutProduct 
  id={item.key}
  image={item.image}
  cost={item.cost}
  rating={item.rating}
  title={item.title}
  
  />
))}
          </div> 
          <div className="checkout__right">
              
        <Subtotal />
              </div> 
        </div>
    )
}

export default Checkout
