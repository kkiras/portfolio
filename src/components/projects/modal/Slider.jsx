import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles first so our overrides win
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Then our local styles last
import './style.css'

// import required modules
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

export default function Slider({items}) {
  return (
    <>
      <Swiper
        effect={'fade'}
        grabCursor={true}
        pagination={false}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation]}
        loop={true}
        className='swiper'
      >
        {items.map((item, index) => (
          <SwiperSlide className='swiperSlide' key={index} >
            <img src={item} className='img'  />
          </SwiperSlide>
        ))}


        {/* <SwiperSlide className='swiperSlide'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='img' />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='img' />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='img' />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" className='img' />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" className='img' />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
