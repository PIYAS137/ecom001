import React from 'react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperDiv from './SwiperDiv';

const HeroSwiper = () => {

  const heroData=[
    {
      title:"Comfort Fashion",
      id:1,
      des:'You one stop place to Shop with Confidence. Shopping is Easy!',
      image:'https://www.pngall.com/wp-content/uploads/5/Attractive-Model-Man-PNG-Picture.png',
      bgClass:'bg-red-300'
    },
    {
      title:"Get More Discount",
      id:2,
      des:'You one stop place to Shop with Confidence. Shopping is Easy!',
      image:'https://www.pngall.com/wp-content/uploads/5/Attractive-Model-Man-PNG-Picture.png',
      bgClass:'bg-green-300'
    },
    {
      title:"Royal Vibe",
      id:3,
      des:'You one stop place to Shop with Confidence. Shopping is Easy!',
      image:'https://www.pngall.com/wp-content/uploads/5/Attractive-Model-Man-PNG-Picture.png',
      bgClass:'bg-indigo-300'
    },
    {
      title:"Get Product Easy",
      id:4,
      des:'You one stop place to Shop with Confidence. Shopping is Easy!',
      image:'https://www.pngall.com/wp-content/uploads/5/Attractive-Model-Man-PNG-Picture.png',
      bgClass:'bg-pink-300'
    }
  ]

  return (
    <React.Fragment>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay:2000,
        disableOnInteraction:false,
      }}
      pagination={{ clickable: true }}
    >
      {heroData.map((one)=><SwiperSlide key={one.id}><SwiperDiv data={one}/></SwiperSlide>)}
    </Swiper>
    </React.Fragment>
  )
}

export default HeroSwiper