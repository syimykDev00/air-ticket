import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import neoCompanyImageOne from '../../assets/img/neoCompanyImageOne.svg';
import neoCompanyImageTwo from '../../assets/img/neoCompanyImageTwo.svg';
import neoCompanyImageThree from '../../assets/img/neoCompanyImageThree.svg';
import neoCompanyImageFour from '../../assets/img/neoCompanyImageFour.svg';
import neoCompanyImageFive from '../../assets/img/neoCompanyImageFive.svg';

const NeoCompanySlider = () => {
    return (
        <section id='neoCompany'>
            <div className='container'>
                  <div className='neoCompany'>
                   <Swiper
                   modules={[Autoplay]}
                   autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                   }}
                   loop={true}
                   spaceBetween={10}
                   slidesPerView={4}
                   breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    }
                   }}
                   className='neoCompanySlider'
                   >
                    <SwiperSlide>
                         <img src={neoCompanyImageOne} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={neoCompanyImageTwo} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={neoCompanyImageThree} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={neoCompanyImageFour} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={neoCompanyImageFive} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={neoCompanyImageOne} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={neoCompanyImageTwo} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={neoCompanyImageThree} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={neoCompanyImageFour} alt="neoCompanyImage"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={neoCompanyImageFive} alt="neoCompanyImage"/>
                    </SwiperSlide>
                 </Swiper>
                  </div>
            </div>
        </section>
    )
}

export default NeoCompanySlider;