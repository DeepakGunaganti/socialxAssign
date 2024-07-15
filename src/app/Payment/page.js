"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import image11 from "../../../public/images/bg2.png";
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const Payment = () => {
    const router = useRouter();
    const router1 = useRouter()
    const [showPopup, setShowPopup] = useState(false);

    const navigateToCheckout = () => {
        router.push("/Checkout");
    };
    const navigationtohome = () => {
         router1.push("/")
    }

    const handlePay = () => {
        setShowPopup(true);
    };

    const handleContinueShopping = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className='flex justify-between p-8'>
                <div className='w-1/2'>
                    <div>
                        <h1 className='text-3xl font-bold mb-6'>PAYMENT</h1>

                        <table className='table-auto w-full'>
                            <tbody>
                                <tr>
                                    <td className='border-l border-r border-t border-gray-600 py-1'>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border-l border-r border-b border-gray-600 py-4'>
                                        <label className='flex items-center'>
                                            <input type='radio' name='paymentMethod' value='bitcoin' className='mr-2' />
                                            Bitcoin
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border-l border-r border-b border-gray-600 py-4'>
                                        <label className='flex items-center'>
                                            <input type='radio' name='paymentMethod' value='appleWallet' className='mr-2' />
                                            Apple Wallet
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border-l border-r border-b border-gray-600 py-4'>
                                        <label className='flex items-center'>
                                            <input type='radio' name='paymentMethod' value='paypal' className='mr-2' />
                                            Paypal
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border-l border-r border-b border-gray-600 py-4'>
                                        <label className='flex items-center'>
                                            <input type='radio' name='paymentMethod' value='debitCreditCard' className='mr-2' />
                                            Debit/Credit Card
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Delivery Address */}
                        <div className='mt-8'>
                            <h2 className='text-xl font-semibold mb-2'>Delivery Address</h2>
                            <input className='w-full p-2 border border-gray-600 rounded mb-2' placeholder='4568 8465 1258 6895' />
                            <input className='w-full p-2 border border-gray-600 rounded mb-2' placeholder='John Wick' />
                            <div className='flex gap-4'>
                                <input className='flex-1 p-2 border border-gray-600 rounded' placeholder='12/24' />
                                <input className='flex-1 p-2 border border-gray-600 rounded' placeholder='584' />
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className='flex justify-between items-center mt-8'>
                            <h1 className='text-lg font-semibold cursor-pointer' onClick={navigateToCheckout}>Go to back</h1>
                            <button className='h-12 w-64 bg-red-500 text-white text-center rounded px-6' onClick={handlePay}>Pay ₹40</button>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='w-full h-full ml-36'>
                        <Image src={image11} alt='background image' />
                    </div>
                </div>
            </div>


            {showPopup && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50'>
                    <div className='bg-white p-8 rounded shadow-md text-center'>
                        <Image src="/images/Group (1).png" alt="success image" width={500} height={300} />
                        <h2 className='text-2xl font-bold mb-4'>Order Placed Successfully!</h2>
                        <p className='max-w-96 ml-16'>Your Order Has Been Placed Successfull We will Try To Ship It To Your Door Step As Soon We Can. Cheers</p>
                        <div className='mt-4'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigationtohome}>Continue Shopping</button>
                        </div>
                    </div>
                </div>

            )}
            <Footer/>
        </>
    );
};

export default Payment;











