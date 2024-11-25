import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  // FOR THE ACTIVE LINKS. CREATING STATE VARIABLE. IT MEANS WHEN I CLICK ON HOME THAN HOME WILL HAVE UNDERLINE AND IF I CLICK ON CONTACT THEN WE WILL HAVE UNDERLINE IN CONTACT.
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <>
    <div className='navbar'>
    <Link to="/"><img src={assets.logo} alt='logo' className='logo' /></Link> 
      
      <ul className='navbar-menu'>
      {/* here if we click home than active class of home will active, other will be not active and of we click on menu than active class of menu will become active. */}
      <Link
            to="/"
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
          >
            home
          </Link>
          <a href='#explore-menu'
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu("menu")}
          >
            menu
          </a>
          <a href='#app-download'
            className={menu === "mobile-app" ? "active" : ""}
            onClick={() => setMenu("mobile-app")}
          >
            mobile-app
          </a>
          <a href='#footer'
            className={menu === "contact-us" ? "active" : ""}
            onClick={() => setMenu("contact-us")}
          >
            contact us
          </a>
      </ul>
      <div className='navbar-right'>
      <img src={assets.search_icon} alt='search'/>
      <div className='navbar-search-icon'>
      <Link to="/cart">
      <img src={assets.basket_icon} alt='basket'/>
      </Link>
      <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
    </>
  )
}

export default Navbar
