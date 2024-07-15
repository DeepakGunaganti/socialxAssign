
"use client"
import React from 'react';
import image10 from "../../../public/images/bg1.png";
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
    const router = useRouter();
    const navigatetoPayment = () => {
        router.push("/Payment")
    }
    const router1 = useRouter();
    const navigatetocart = () => {
        router1.push("/cart")
    }
  return (
    <>
      <div className='flex justify-between p-8'>
        <div className='w-1/2 space-y-10'>
          <h1 className='text-3xl font-bold mb-6'>CHECK OUT</h1>
          <p className='text-lg mb-4'>Delivery Address</p>
          <div className='flex gap-4 mb-4'>
            <input className='flex-1 p-2 border border-gray-600 rounded' placeholder='John' />
            <input className='flex-1 p-2 border border-gray-600 rounded' placeholder='Wick' />
          </div>
          <div className='mb-4'>
            <input className='w-full p-2 border border-gray-600 rounded' placeholder='Street 32, Pasror road, Daska' />
          </div>
          <div className='flex gap-4 mb-4'>
            <input className='flex-1 p-2 border border-gray-600 rounded' placeholder='51010' />
            <input className='flex-1 p-2 border border-gray-600 rounded' placeholder='Sialkot' />
          </div>
          <div className='mb-4'>
            <input className='w-full p-2 border border-gray-600 rounded' placeholder='+923445676890' />
          </div>
          <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold cursor-pointer' onClick={navigatetocart}>Go to back</h1>
            <button className='h-12 bg-red-800 text-white text-center rounded px-6' onClick={navigatetoPayment}>Save and Continue</button>
          </div>
        </div>
        <div className='w-1/2 h-3/5 flex items-center justify-center'>
          <Image src={image10} alt='background image' className='rounded' />
        </div>
      
      </div>
      <Footer/>
    </>
  );
};

export default CheckoutPage;


