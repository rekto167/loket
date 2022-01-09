import dunia from '../assets/dunia-mencekam.jpg'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from './CardItem'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

import "./SwiperComponent.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


const SwiperComponent = () => {
    return(
            <Swiper slidesPerView={3} spaceBetween={30} navigation={true} className="mySwiper">
                 <SwiperSlide>
                     <CardItem />
                 </SwiperSlide>
                 <SwiperSlide>
                     <CardItem />
                 </SwiperSlide>
                 <SwiperSlide>
                     <CardItem />
                 </SwiperSlide>
                 <SwiperSlide>
                     <CardItem />
                 </SwiperSlide>
                 <SwiperSlide>
                     <CardItem />
                 </SwiperSlide>
                 <SwiperSlide>
                     <CardItem />
                 </SwiperSlide>
            </Swiper>
    )
}

export default SwiperComponent