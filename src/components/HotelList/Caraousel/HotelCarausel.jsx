import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Data from './data.json'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {AiFillStar} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'



function HotelCarausel() {
   return (
      <div className='container mx-auto mt-14'>
       <section className='justify-items-center items-center'>
         <Swiper
           modules={[Navigation, Pagination]}
           spaceBetween={30}
           navigation={{ clickable: true }}
           pagination={{ clickable: true }}
           breakpoints={{
             '@0.00': {
               slidesPerView: 1,
               spaceBetween: 10,
             },
             '@0.75': {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             '@1.00': {
               slidesPerView: 3,
               spaceBetween: 40,
             },
             '@1.50': {
               slidesPerView: 4,
               spaceBetween: 50,
             },
           }}
         >
           {Data.map((hotel, index) => (
             <SwiperSlide key={index}>
               <div key={index} className='text-left shadow-lg h-[500px] bg-[#E8F4FE'>
                 <Link to='/HotelDetails'>
                  <img className='w-full h-[400px] object-cover rounded-t-lg absolute' src={hotel.image} alt={hotel.title} />
                 </Link>
                 <button className='relative rounded-r-lg p-3 w-13 h-12 bg-button2 text-button top-48'><AiOutlineHeart size={25} /></button>
                 <div className='shadow-xl p-4 space-y-4 relative bg-white w-[180px] h-[180px] rounded-r-lg top-48'>
                   <p className='text-end font'>{hotel.price}</p>
                   <h2>{hotel.title}</h2>
                   <div className='flex justify-end items-center'>
                       <AiFillStar />
                       <span>{hotel.rate}</span>
                   </div>
                 </div>
               </div>
             </SwiperSlide>
           ))}
         </Swiper>
       </section>
     </div>
   )
}

export default HotelCarausel;