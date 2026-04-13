import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import contactIconOne from '../../assets/img/contactIconOne.svg';
import contactIconTwo from '../../assets/img/contactIconTwo.svg';
import InfoSidebar from '../InfoPages/InfoSidebar';

const Contact = () => {
    return (
        <section id='contact'>
            <div className='container'>
                <div className="contactBG"></div>
                 <div className='contact'>
                    <h1>Контакты</h1>
                    <div className='contact-general'>
                        <div className='contact-group-block'>
                            <div className='contact-block-one'>
                                <div className='contact-block-icon'>
                                    <FaPhoneAlt className='contact-icon-one'/>
                                    <a href="tel: +996 (000) 00 00 00" className='contact-block-link'>+996 (000) 00 00 00</a>
                                </div>
                                <Link className='contact-block-icon'>
                                <div>
                                    <img src={contactIconOne} alt="contactIcon"/>
                                    <a className='contact-block-link'>+996 (000) 00 00 00</a>
                                </div>
                                </Link>
                                <Link className='contact-block-icon'>
                                 <div>
                                    <img src={contactIconTwo} alt="contactIcon"/>
                                    <a className='contact-block-link'>+996 (000) 00 00 00</a>
                                 </div>
                                </Link>
                                <h2> <span>@</span> neolabs@neo.pw </h2>
                            </div>
                            <div className='contact-block-two'>
                                <Link>
                                 <SlLocationPin className='contact-block-two-icon'/>
                                </Link>
                                <div className='contact-block-two-text'>
                                    <h3>Бишкек, ул. Токтогул</h3>
                                    <h4>График работы с 9:00 до 18:00</h4>
                                </div>
                            </div>
                        </div>
                        <div className='contact-maps'>
                            <iframe className='contact-google-maps'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.0697322687693!2d74.61946247561393!3d42.87137230264602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7b0f3a92e6f%3A0x6586b66f3887e691!2z0YPQuy4g0KLQvtC60YLQvtCz0YPQu9CwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1770732283159!5m2!1sru!2skg" width="488" height="310" style={{border: '0', borderRadius: '24px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <aside className='info-sidebar-contact'>
                         <InfoSidebar />
                       </aside>
                    </div>
                 </div>
            </div>
        </section>
    )
}

export default Contact;