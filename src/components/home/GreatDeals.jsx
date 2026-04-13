import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import greatDealsData from './GreatDealsData';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GreatDeals = () => {

    const swiperRef = useRef(null)

    return (
        <section id='greatDeals'>
            <div className='container'>
                <div className='greatDeals'>
                    <h1>Выгодные предложения </h1>
                    <div className='greatDeals-general'>
                        <span 
                           className='greatDeals-arrow prev'
                           onClick={() => swiperRef.current?.slidePrev()}
                           >
                           <IoIosArrowBack />
                        </span>
                        <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={Navigation}
                        navigation={{
                            prevEl: '.greatDeals-arrow.prev',
                            nextEl: '.greateDeals-arrow.next',
                        }}
                        loop={true}
                        spaceBetween={24}
                        breakpoints={{
                            320: {slidesPerView: 1},
                            450: {slidesPerView: 1},
                            640: {slidesPerView: 2},
                            576: {slidesPerView: 1.5},
                            992: {slidesPerView: 3},
                            1024: {slidesPerView: 3},
                            1200: {slidesPerView: 3},
                            1440: {slidesPerView: 4},
                        }}
                        >
                         {greatDealsData.map(item => (
                          <SwiperSlide key={item.id}>
                            <div className='greatDeals-block' key={item.id}>
                                <img src={item.image} alt="greatDealsImage" className='greatDeals-image'/>
                                <div className='greatDeals-text'>
                                    <h2>{item.country}</h2>
                                    <h3>{item.price}</h3>
                                </div>
                             </div>
                          </SwiperSlide>
                        ))}
                        </Swiper>
                        <span 
                        className='greatDeals-arrow next'
                        onClick={() => swiperRef.current?.slideNext()}
                        >
                            <IoIosArrowForward />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GreatDeals;