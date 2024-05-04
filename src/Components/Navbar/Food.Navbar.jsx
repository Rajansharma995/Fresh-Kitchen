import React, { useState } from 'react';
import'./Food.Navbar.css';
import { foodAssets } from '../../assets/Food/food.assets';

const Navbar = () => {

  const [menu,setMenu] = useState("menu");
  return (
    <div className='navbar'>
        <img src={foodAssets.logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
          <li onClick={()=>setMenu('home')} className={menu === "home"? "active" :""}>Home</li>
          <li onClick={()=>setMenu('menu')} className={menu === "menu"?"active":""}>Menu</li>
          <li onClick={()=>setMenu('mobile-app')} className={menu === "mobile-app"?"active":""}>Mobile-App</li>
          <li onClick={()=>setMenu('contact-us')} className={menu === "contact-us"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
          <img src={foodAssets.search_icon} alt="" className='search icon'/>
          <div className="navbar-search_icon">
            <img src={foodAssets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar;