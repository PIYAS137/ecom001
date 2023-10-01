
import { Link, NavLink } from 'react-router-dom'

import LOGO from '../assets/images/Logo.png'
import { HiShoppingCart, HiHome, HiChatBubbleBottomCenterText, HiMagnifyingGlass,HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/useContext';

const AppNavbar = () => {
  const [isTrue,setIsTrue]=useState(false)

  const {len}=useContext(CartContext)

  return (
    <React.Fragment>
      <nav className=' z-50 bg-black text-white flex py-3 fixed top-0 left-0 w-full'>
        <div className=' mx-auto container space-x-5 lg:flex items-center justify-between text-lg'>
            <div className='flex items-center'>
              <NavLink to='/'>
              <div className='flex items-center'>
              <img width="80px" height="100px" src={LOGO} alt="" />
              <h1 className='-ml-4 text-3xl font-bold text-red-700'>Own Mart</h1>
              </div>
              </NavLink>
              <div className='ml-auto pr-3 text-4xl text-white'>
                {isTrue ? <HiOutlineXMark className='lg:hidden cursor-pointer' onClick={()=>{setIsTrue(false)}}/>:<HiBars3CenterLeft className='lg:hidden cursor-pointer' onClick={()=>{setIsTrue(true)}}/>
                }
              </div>
            </div>
          <div className={`lg:flex lg:space-x-7 ${isTrue ? "block":"hidden"}`}>
            <NavLink to={"collection"} className="flex items-center"> <HiShoppingCart className='mr-1' />Collections</NavLink>
            <NavLink to={"location"} className="flex items-center"><HiHome className='mr-1' /> Location</NavLink>
            <NavLink to={"contact"} className="flex items-center"><HiChatBubbleBottomCenterText className='mr-1' /> Contact</NavLink>
          </div>
          <div className={`lg:flex lg:space-x-7 ${isTrue ? "block":"hidden"}`}>

            <NavLink to={"search"} className="flex items-center"><HiMagnifyingGlass className='mr-1' /> Search</NavLink>
          <button className='bg-red-700 px-6 py-2 rounded-xl relative'><Link to={"cart"} className="flex items-center"><HiShoppingCart className='mr-1' /> Cart
          
            <span className='-top-1 -right-1 bg-white w-6 h-6 rounded-full text-xs absolute text-red-700 flex justify-center items-center font-bold'>{len}</span>
          </Link></button>
          </div>
        </div>
      </nav>
      <div className='h-[78px]'></div>







    </React.Fragment>
  )
}

export default AppNavbar