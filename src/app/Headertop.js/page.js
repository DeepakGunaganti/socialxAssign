"use client"

import Image from 'next/image';

import { useSelector } from 'react-redux';
import Marquee from "../../components/Marquee";
import image3 from "../../../public/images/Feature_img1.png";
import image9 from "../../../public/images/bg.png";
import image4 from "../../../public/images/Product Item (1).png";
import image2 from "../../app/cover_img.png";
import image5 from "../../../public/images/spray.png"
import image8 from "../../../public/images/spray2.png"
import image6 from "../../../public/images/stayfree.png"
import image7 from "../../../public/images/mask.png"
import Footer from '@/components/Footer';

const images = [
    { src: '/images/Product Item (1).png', alt: 'Image 1' },
    { src: '/images/Product Item.png', alt: 'Image 2', },
    { src: '/images/Content.png', alt: 'Image 3', },
];

const HeaderTop = () => {
    const imageStyles = {
        width: '400px',
        height: '400px',
    };
    const hstyle = {

        width: '600px',
        height: '600px',

    }

    return <>


        <div className='top-header flex justify-around border-b bg-slate-200 p-10 mt-8'>
            <div className='space-y-10'>
                <h1 className='text-3xl w-96 font-bold  text-violet-900 mt-14'>PROVIDING SERVICES AT YOUR DOOR</h1>
                <p className='  w-96 items-start'><span className='font-bold text-gray-500 mt-12'>MACC Essentials</span> has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>
                <button className='btn bg-red-600 w-40 h-10 text-white '>LEARN MORE</button>
            </div>
            <div>
                <Image src={image2} alt='' style={imageStyles} />
            </div>
        </div>

        <div>
            <h1 className='text-center text-4xl font-bold mt-28'> <span className='text-red-600'>NEW</span> <span className='text-violet-800'>PRODUCTS</span></h1>
            <div className='mt-7'>
                <Marquee images={images} slidesToShow={3} />
            </div>

        </div>
        <div className='flex justify-center ml-96 space-x-52 mt-16'>
            <p className='text-3xl font-bold ml-52'><span className='text-red-600'>MACC</span> <span className='text-gray-600'>WEEKLY DISCOUNT</span></p>
            <button className='btn bg-gray-400 text-white w-40 h-12  shadow-md ' >VIEW ALL</button>

        </div>

        <div className='flex -mt-14'>
            <div className='flex'>
                <Image src={image3} alt='image 3' style={hstyle} />

                <div className='flex mt-14 gap-7 ml-8'>

                    <Image className='p-9 w-full' src={image8} alt='' />
                    <Image className='p-9 w-full' src={image6} alt='' />
                </div>
            </div>


        </div>
        <div>
            <div className='flex  space-x-60 mt-20 ml-12'>
                <p className='text-3xl font-bold'><span className='text-red-600'>MACC</span> <span className='text-gray-600'>TOP SELLINGS</span></p>
                <button className='btn bg-gray-400 text-white w-40 h-12  shadow-md  ' >VIEW ALL</button>

            </div>
            <div className='flex -mt-14 '>
                <div className='flex'>

                    <div className='flex mt-14 space-x-12  '>
                        <Image className='p-9 w-full' src={image5} alt='' />

                        <Image className='p-9 w-full' src={image7} alt='' />
                    </div>
                </div>
                <Image className='ml-24' src={image9} alt='image 3' style={hstyle} />
            </div>
        </div>




        <Footer />
    </>
}

export default HeaderTop