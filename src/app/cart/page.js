
"use client";
import { removeproduct, addproduct } from '@/Redux/Cartsslice';
import React from 'react';
import Image from 'next/image';
import Marquee from "../../components/Marquee";
import { useDispatch, useSelector } from 'react-redux';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const images = [
    { src: '/images/Product Item (1).png', alt: 'Image 1' },
    { src: '/images/Product Item.png', alt: 'Image 2' },
    { src: '/images/Content.png', alt: 'Image 3' },
];

const Cartpage = () => {
    const router = useRouter();
    const navigatetocheckout = () => {
        router.push("/Checkout")
    }
    const dispatch = useDispatch();
    const cartitems = useSelector(state => state.cart);

    const handleremove = (id) => {
        dispatch(removeproduct(id));
    };

    const handleAddProduct = (item) => {
        dispatch(addproduct(item));
    };

    return (
        <div>
            <div className='cartWrapper'>
                {cartitems.map((item) => (
                    <div key={item.id} className='cartCard flex items-center gap-20'>
                        <div className='ml-40 mt-24'>
                            <img className='h-20 w-40 shadow-md' src={item.image} alt='img' />
                            <img className='h-24 w-40 mt-9 shadow-md' src={item.image} alt='img' />
                            <img className='h-24 w-40 mt-9 shadow-md' src={item.image} alt='img' />
                            <img className='h-24 w-40 mt-9 shadow-md' src={item.image} alt='img' />
                        </div>
                        <div className='mt-36'>
                            <img className='border h-4/6 w-7/12 p-12 text-center shadow-md' src={item.image} alt='img' />
                        </div>
                        <div className='space-y-3 -ml-72'>
                            <h1 className='font-bold text-3xl'>{item.title?.slice(0, 20)}</h1>
                            <h1 className='font-bold text-3xl text-red-700'>₹{item.price}</h1>
                            <h1 className='font-bold text-xl text-red-700'>Quantity :- {item.quantity}</h1>
                            <div className="flex justify-start gap-4 mt-4">
                                <button className="border border-gray-300 rounded px-4 py-2 text-center">Black</button>
                                <button className="border border-gray-300 rounded px-4 py-2 text-center">Gold</button>
                                <button className="border border-gray-300 rounded px-4 py-2 text-center">Apolla</button>
                            </div>
                            <div className='flex flex-col items-center'>
                                <button className='w-full h-12 bg-blue-800 text-white text-center rounded' onClick={() => handleAddProduct(item)}>Add to cart</button>
                            </div>
                            <div className='flex flex-col items-center'>
                                <button className='w-full h-12 bg-red-800 text-white text-center rounded' onClick={() => handleremove(item.id)}>Remove</button>
                            </div>
                            <p className='max-w-xl items-start'>
                                Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, condimentum est. Mauris arcu odio, vestibulum
                            </p>
                            <div>
                                <div className='space-y-4'>
                                    <div className='w-96 border border-gray-600 rounded'>
                                        <select className='w-full p-2 text-center border-none'>
                                            <option>DESCRIPTION</option>
                                            <option>DESCRIPTION</option>
                                        </select>
                                    </div>
                                    <div className='w-96 border border-gray-600 rounded'>
                                        <select className='w-full p-2 text-center border-none'>
                                            <option>RETURN POLICY</option>
                                            <option>DESCRIPTION</option>
                                        </select>
                                    </div>
                                    <div className='w-96 border border-gray-600 rounded'>
                                        <select className='w-full p-2 text-center border-none'>
                                            <option>CITIZEN POLICY</option>
                                            <option>DESCRIPTION</option>
                                        </select>
                                    </div>
                                    <button className='w-full h-12 bg-blue-800 text-white text-center rounded' onClick={navigatetocheckout}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='text-center font-bold mt-28 text-3xl'>YOU MAY ALSO LIKE THIS</h1>
            <div className='mt-7'>
                <Marquee images={images} slidesToShow={3} />
            </div>
            <Footer />
        </div>
    );
};

export default Cartpage;

