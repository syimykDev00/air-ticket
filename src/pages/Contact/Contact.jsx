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
                                <div className='contact-block-icon'>
                                    <img src={contactIconOne} alt="contactIcon"/>
                                    <a href='tel: +996 (000) 00 00 00' className='contact-block-link'>+996 (000) 00 00 00</a>
                                </div>
                                <div className='contact-block-icon'>
                                    <img src={contactIconTwo} alt="contactIcon"/>
                                    <a href='tel: +996 (000) 00 00 00' className='contact-block-link'>+996 (000) 00 00 00</a>
                                </div>
                                <h2> <span>@</span> neolabs@neo.pw </h2>
                            </div>
                            <div className='contact-block-two'>
                                <Link to={''}>
                                 <SlLocationPin className='contact-block-two-icon'/>
                                </Link>
                                <div className='contact-block-two-text'>
                                    <h3>Бишкек, ул. Токтогул</h3>
                                    <h4>График работы с 9:00 до 18:00</h4>
                                </div>
                            </div>
                        </div>
                        <div className='contact-maps'>
                            <iframe
                              className='contact-google-maps'
                              title='map'
                              src="..."
                              width="488"
                              height="310"
                              style={{ border: '0', borderRadius: '24px' }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
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