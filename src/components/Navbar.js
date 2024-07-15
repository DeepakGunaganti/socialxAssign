"use client";

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import image1 from "../app/Macc Essentials.png";
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [button, setButton] = useState(true);
    const router = useRouter();
    const item = useSelector((state) => state.cart);

    const navigateToProducts = () => {
        setButton(false);
        router.push("/Productslist");
    }

    const navigateToHome = () => {
        setButton(true);
        router.push("/");
    }

    const navigateToCart = () => {
        router.push("/cart");
    }

    return (
        <>
            <div className='border-b border-#D2D2D2'>
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
                    <li className='ml-40 cursor-pointer' onClick={button ? navigateToProducts : navigateToHome}>
                        {button ? "SHOP" : "HOME"}
                    </li>
                    <li>ESSENTIALS</li>
                    <Image className='-mt-5' src={image1} alt='' />
                    <li>BEST SELLERS</li>
                    <li>ABOUT US</li>
                    <div className='flex gap-7'>
                        <FcBusinessman />
                        <IoMdNotificationsOutline />
                        <HiOutlineShoppingBag onClick={navigateToCart} />
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Navbar;

