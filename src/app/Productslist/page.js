"use client"

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addproduct } from '@/Redux/Cartsslice';
import imagecover from '../../../public/images/cover.png'
import { useRouter } from 'next/navigation';
const Productslist = () => {
    const router = useRouter();
    const navigatetocart = () => {
        router.push("/cart")
    }
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const url = 'https://fakestoreapi.com/products';

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}?limit=10&page=${page}`);
            const data = await response.json();
            console.log(data);
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prevProducts) => [...prevProducts, ...data]);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && hasMore && !loading) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, hasMore]);

    return (
        <>
            <div>
                <Image src={imagecover} alt='image cover' className='w-screen mt-16' />
            </div>

            <div className='mt-20 space-y-2 ml-8'>
                <p className='flex ml-72'>40 products</p>
            <div className='w-56 border border-gray-600 rounded items-start'>
                    <select className='p-2 text-center border-none'>
                        <option>COMPANY</option>
                        <option>DESCRIPTION</option>
                    </select>
                </div>
                <div className='w-56 border border-gray-600 rounded items-start'>
                    <select className='p-2 text-center border-none'>
                        <option>PRICE</option>
                        <option>DESCRIPTION</option>
                    </select>
                </div>
                <div className='w-56 border border-gray-600 rounded items-start'>
                    <select className='p-2 text-center border-none'>
                        <option>CATEGORIES</option>
                        <option>DESCRIPTION</option>
                    </select>
                </div>
            </div>
         
            <div className='flex justify-end  mr-20 -mt-44'>
                <div className='w-56 border border-gray-600 rounded items-start'>
                    <select className='p-2 text-center border-none'>
                        <option>SORT</option>
                        <option>DESCRIPTION</option>
                    </select>
                </div>

            </div>
            <div className="container mx-auto border-b border-#D2D2D2  ml-72 w-3/4 mt-20">
                <div className="grid grid-cols-3 gap-20">
                    {products.map((product, index) => (
                        <div key={index} className="border h-96 w-80 p-14 text-center shadow-md">
                            <button onClick={() => dispatch(addproduct(product))}> <img src={product.image} alt={product.title} className="w-96 h-64 object-fit rounded-lg" style={{ aspectRatio: '16/9' }} onClick={navigatetocart}  /> </button>
                            <div className=''>
                                <p className="text-sm">{product.title}</p>
                                <p className="text-sm"> price :-{product.price}</p>

                            </div>
                        </div>
                    ))}
                </div>
                {loading && <p className="text-center mt-4">Loading more products...</p>}
                {!hasMore && <p className="text-center mt-4">No more products to load.</p>}
            </div>
        </>

    );
}

export default Productslist;
