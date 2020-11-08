import React from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import "./Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSetValue } from './stateProvider';
import { auth } from './firebase';


function Header() {

    const [{basket,user,name}]=useSetValue();
    const handleauth = () =>{
        if(user){
          auth.signOut();
        }
    }

    return (
        <div className="header">
     <Link to="/">
    <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
    </Link>
      <div className="header__search">
          <input className="header__searchInput" type="text"/>
<SearchSharpIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
      <Link to= {!user && "/login"}>
      <div onClick={handleauth} className="header__options">
          
<span className="header__optionfirstline">
    Hello {user ?name:"Guest"}
</span>
<span className="header__optionsecondline">
 {user ?"sign out":"sign in" }
</span>


      </div>
      </Link>
      <div className="header__options">
      <span className="header__optionfirstline">
    Retrun
</span>
<span className="header__optionsecondline">
    & Orders
</span>
          </div>
          <div className="header__options">
          <span className="header__optionfirstline">
    Try 
</span>
<span className="header__optionsecondline">
    Prime
</span>
          </div>
<div className="header__optionbasketIcon">
<Link to="/checkout">
    <div className="header__optionbasket">
        
    <ShoppingCartIcon />
  
    <span className="header__basketcount header__optionsecondline">
    {basket.length}
    </span>
    </div>
    
   </Link> 
</div>



          </div>
        </div>
    )
}

export default Header
