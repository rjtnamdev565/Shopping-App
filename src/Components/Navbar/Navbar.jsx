import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import logo from '../Assets/logo.svg'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
<div className='flex justify-around p-4 shadow-md'>
  <Link to='/' style={{ textDecoration: 'none' }} className="flex items-center gap-2">
    <img src={logo} alt="logo" />
  </Link>
  <ul className="flex items-center list-none gap-10 text-gray-600 text-base font-semibold">
    <li onClick={()=>{setMenu("shop")}} className="flex flex-col items-center cursor-pointer">
      <Link to='/' style={{ textDecoration: 'none' }}>Collections</Link>
      {menu==="shop" ? <hr className="w-40 h-1.5 border-none rounded-2 bg-red-500" /> : <></>}
    </li>
    <li onClick={()=>{setMenu("mens")}} className="flex flex-col items-center cursor-pointer">
      <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
      {menu==="mens" ? <hr className="w-40 h-1.5 border-none rounded-2 bg-red-500" /> : <></>}
    </li>
    <li onClick={()=>{setMenu("womens")}} className="flex flex-col items-center cursor-pointer">
      <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
      {menu==="womens" ? <hr className="w-40 h-1.5 border-none rounded-2 bg-red-500" /> : <></>}
    </li>
    <li onClick={()=>{setMenu("about")}} className="flex flex-col items-center cursor-pointer">
      <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
      {menu==="about" ? <hr className="w-40 h-1.5 border-none rounded-2 bg-red-500" /> : <></>}
    </li>
    <li onClick={()=>{setMenu("kids")}} className="flex flex-col items-center cursor-pointer">
      <Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link>
      {menu==="contact" ? <hr className="w-40 h-1.5 border-none rounded-2 bg-red-500" /> : <></>}
    </li>
  </ul>
  <div className="flex items-center gap-4">
    <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
    <div className="w-8 h-8 flex justify-center items-center -mt-10 -ml-14 rounded-full text-white text-xs bg-red-500">
  {getTotalCartItems()}
</div>
  </div>
</div>


  )
}

export default Navbar
