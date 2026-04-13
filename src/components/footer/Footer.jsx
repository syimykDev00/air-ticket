import React from 'react';
import footerLogo from '../../assets/img/footerLogo.svg';
import {Link} from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import footerQrcodeImage from '../../assets/img/footerQrcodeImage.svg';

const Footer = () => {
    return (
        <section id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer-logo-group'>
                        <img src={footerLogo} alt="footerLogo"/>
                        <div className='footer-icon-group'>
                            <Link to={''} className='footer-icon'>
                              <FaFacebookSquare />
                            </Link>
                            <Link to={''} className='footer-icon'>
                              <FaInstagram />
                            </Link>
                            <Link to={''} className='footer-icon'>
                              <FaWhatsapp />
                            </Link>
                            <Link to={''} className='footer-icon'>
                              <RiTelegram2Fill />
                            </Link>
                        </div>
                    </div>
                    <div className='footer-navbar-group'>
                        <h2>О компании</h2>
                        <nav className='footer-navbar'>
                            <Link to={''} className='footer-link'>
                             Политика конфиденциальности, <br />
                              обработка данных, <br />
                             использование cookie
                            </Link>
                            <Link to={''} className='footer-link'>Бронирование и управление</Link>
                            <Link to={''} className='footer-link'>Информация</Link>
                            <Link to={''} className='footer-link'>О компании</Link>
                            <Link to={'/contact'} className='footer-link'>Контакты</Link>
                        </nav>
                    </div>
                    <div className='footer-navbar-group'>
                        <h2>Контакты</h2>
                        <nav className='footer-navbar'>
                            <a href="tel: +996 (000) 00 00 00">+996 (000) 00 00 00</a>
                            <a href="#">neolabs@neo.pw</a>
                        </nav>
                        <p>Бишкек, ул. Токтогул</p>
                        <p>График работы с 9:00 до 18:00</p>
                    </div>
                    <div className='footer-Qrcode-group'>
                        <h2>Мобильное <br /> приложение</h2>
                        <div className='footer-Qrcode-block'>
                            <img src={footerQrcodeImage} alt="footerQrcodeImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;