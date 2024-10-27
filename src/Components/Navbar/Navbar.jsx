import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from  'react-router-dom'
import nav_dropdown from '../Assets/nav_dropdown1.png'


const Navbar = () => {
  const [menu ,setMenu] = useState("shop");
  const menuRef = useRef();
  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>SHOPPING WORLD</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle}  src={nav_dropdown} alt=''/>
      <ul ref={menuRef} className='nav-menu' >
        <li onClick={()=>{setMenu ("Shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu ("mens")}}><Link style={{textDecoration:'none'}} to="/mens">mens</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu ("womens")}}><Link style={{textDecoration:'none'}} to="/womens">womens</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu ("kids")}}><Link style={{textDecoration:'none'}} to="/kids">kids</Link>{menu==="shop"?<hr/>:<></>}</li>

      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>logout</button>:<Link to='/login'><button>Login</button></Link>}

        <Link to='/cart'><img className='cart-icon' src={cart_icon} alt='' /></Link>
      </div>

      
    </div>
  )
}

export default Navbar