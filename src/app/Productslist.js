"use client"

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addproduct } from '@/Redux/Cartsslice';
import imagecover from '../../public/cover.png'
import Footer from '@/components/Footer';
const Productslist = () => {
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
                setHasMore(false); // If no more products, set hasMore to false
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
         <Image src={imagecover} alt='image cover' className='w-screen mt-16'/>
        </div>
        <div className='flex justify-end'>
          <select>
          <option>sort</option>
          <option>hh</option>
          <option>hh</option>
          </select>
         
        </div>
  <div className="container mx-auto border-b border-#D2D2D2 mt-24 ml-96 w-3/4">
      <div className="grid grid-cols-3 gap-20">
          {products.map((product, index) => (
              <div key={index} className="border h-96 w-80 p-14 text-center shadow-md">
                  <img src={product.image} alt={product.title} className="w-full h-full object-fit rounded-lg" style={{ aspectRatio: '16/9' }} />
                  <div className=''>
                      <p className="text-sm">{product.title}</p>
                      <p className="text-sm"> price :-{product.price}</p>
                      <button className='btn bg-red-500 w-44 h-12 text-lg' onClick={() => dispatch(addproduct(product))}>Add to cart</button>
                  </div>
              </div>
          ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more products...</p>}
      {!hasMore && <p className="text-center mt-4">No more products to load.</p>}
  </div>
  <Footer/>
      </>
  
    );
}

export default Productslist;

