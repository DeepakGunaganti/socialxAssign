"use client";

import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import image1 from "../app/Macc Essentials.png";
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [button, setButton] = useState(true)
     const router = useRouter();
      const navigatetoproducts = () => {
       setButton(!button)
        router.push("/Productslist")
      }
      const Navigatetocart = () =>{
        router.push("/cart")
      }
      const NavigatetoHome = () => {
        router.push("/")
      }
    const item = useSelector((state)=> state.cart)
  
  return (
    <>
      <div className='border-b border-#D2D2D2 '>
            <div className="header_top_icon mt-3">
                <ul className='flex justify-end'>
                    <li className='mr-4'>Return</li>
                    <li className='mr-4'>Help</li>
                    <li>Register/Sign in</li>
                </ul>
            </div>
        </div>
        <div className='navbar'>

            <ul className='flex justify-evenly mt-14'>
                <div><CiSearch /></div>
                
               <li className='ml-40' onClick={navigatetoproducts}>{button == true ? "SHOP" : <button onClick={NavigatetoHome}>HOME</button>}</li>
                <li>ESSENTIALS</li>
                <div></div>
                <Image className='-mt-5' src={image1} alt='' />
                <li>BEST SELLERS</li>
                <li>ABOUT US</li>
                <div className='flex gap-7'>
                    <FcBusinessman />
                    <IoMdNotificationsOutline />
                    <HiOutlineShoppingBag onClick={Navigatetocart}/>{item.length}
                </div>
            </ul>
        </div>
    </>
  
  )
}

export default Navbar
