import React from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/effect-fade';
import './Carousel.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                loop={true}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img class="img-zoom" src="https://picsum.photos/1024/512?random=1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="img-zoom" src="https://picsum.photos/1024/512?random=2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="img-zoom" src="https://picsum.photos/1024/512?random=3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="img-zoom" src="https://picsum.photos/1024/512?random=4" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Carousel;