import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./style.scss"

const Dars16 = () => {
    const [data, setData] = useState([1,2,3,4,5,6,7,8])
    return (
        <div>
            <Swiper 
                className='mySwiper'
                slidesPerView={3}
                spaceBetween={20}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                loop={true}
                autoplay={{
                    delay: 1000
                }}
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    10:{
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    600:{
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    900:{
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
            >
                {data.map((item, index)=>{
                    return(
                        <SwiperSlide key={index}>{item}</SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Dars16
