import React from 'react';
import heroImage from '../../assets/img/heroImage.png';

const Hero = () => {
    return (
        <section id='hero'>
            <div className='container'>
                <div className='hero'>
                    <h1>Ищите, сравнивайте, экономьте</h1>
                    <p>авиабилеты по всему миру</p>
                    <img src={heroImage} alt="hero-image" className='hero-image'/>
                </div>
            </div>
        </section>
    )
}

export default Hero;