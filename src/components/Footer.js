import React from 'react'
import Image from 'next/image'
import image1 from "../app/Macc Essentials.png";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
    return (

        <>
            <div className='flex justify-evenly mt-20'>
                <div className='image'>
                    <Image src={image1} alt='' />
                </div>
                <div className='lielements'>
                    <ul>
                        <li>Home</li>
                        <li>Collection</li>
                        <li>Products</li>
                    </ul>
                </div>
                <div className='lielements'>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                
                <div className='w-96'>
                    <p>Be the first to know about our biggest and best sales. We will never send more than one email a month.</p>
                    <input className=' border-b-slate-700 border-separate mt-5' placeholder='Enter your email' />
                    <div className='flex justify-around mt-8'>
                        <FaTwitter className='bg-violet-900 rounded-lg text-white p-1 w-10 h-7' />
                        <FaLinkedin className='bg-violet-900 rounded-lg text-white p-1 w-10 h-7' />
                        <FaFacebook className='bg-violet-900 rounded-lg text-white p-1 w-10 h-7' />
                        <IoLogoInstagram className='bg-violet-900 rounded-lg text-white p-1 w-10 h-7' />
                    </div>
                   
                </div>
            
            </div>
            <div>
                        <p className='text-center mt-7'>All Rights Are Reserved</p>
                    </div>
        </>

    )
}

export default Footer
