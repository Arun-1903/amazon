import React from 'react'
import  "./product.css"
import"./home.css";
import { useSetValue } from './stateProvider';





function Product({title,  cost,rating,image ,key}) {
    const [,dispatch]=useSetValue();
  
 const addtobasket =() => {
dispatch({
    type:"ADD_TO_BASKET",
    item:{
        id:key,
title:title,
cost:cost,
rating:rating,
image:image,
key:key
    },
})
}
    return (   
      
    <div className="product">
    <div className="product__info">
    <p>{title}</p>
        <div className="product__price">

        <small>&#x20B9;</small>
        <b>{cost}</b>
        </div>
        <div className="product__rating">
        {Array(rating).fill().map((_,i) => (
           <p>⭐</p>
        ))}
        </div>
        </div>
        <img src={image} alt=""/>
      
        <button onClick={addtobasket}>Add To Cart</button>
        </div>    
       
    )
}

export default Product
