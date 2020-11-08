
 export const initialstate ={

    basket:[],
    user:[],
    mobile:[],
    name:[]

}

export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item) => item.cost +amount,0)
    


export const reducer=(state,action) => {

switch (action.type) {
    case "ADD_TO_BASKET":
        return {
...state,
basket:[...state.basket,action.item],

        }
    
   case "REMOVE_FORM_BASKET":
       const index=state.basket.findIndex(
(basketItem) => basketItem.id===action.id

       );


       let newbasket=[...state.basket];
       console.log(newbasket);
       if(index>=0){

        newbasket.splice(index,1);
       }else{
           console.log("cant remove the item")
       }
       return {
...state,
basket:newbasket,


}
case "SET_USER":
    return{
        ...state,
        user:action.user,
       
    }
    case "SET_DETAILS":
        return{
            ...state,
            name:action.name,
            mobile:action.mobile
        }
default:  return state

        
}


}