import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [bookingOpen, setBookingOpen] = useState(false)
    const [infoOpen, setInfoOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
        setBookingOpen(false)
        setInfoOpen(false)
    }

    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>
                  <div className='header-group-logo'>
                      <button
                        className='burger'
                        onClick={() => setMenuOpen(true)}
                    >
                        <FiMenu />
                    </button>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className='header-logo-image'/>
                    </Link>
                  </div>
                    <nav className='header-navbar desktop'>
                        <div className='header-dropdown'>
                            <span className='header-link'>
                                Бронирование и управление
                            </span>
                            <div className='header-dropdown-menu'>
                                <Link to={'/sposoby-oplaty-i-bezopasnost'} className='header-link'>Способы оплаты и безопасность</Link>
                                <Link to={'/politika-vozvratov'} className='header-link'>Политика возвратов</Link>
                                <Link to={'/oformit-vozvrat-bileta-i-izmenit-svet'} className='header-link'>Оформить возврат билета и изменить билет</Link>
                            </div>
                        </div>
                        <div className='header-dropdown-two'>
                            <span className='header-link'>
                                Полезная информация
                            </span>
                            <div className='header-dropdown-menu-two'>
                                <div className='header-dropdown-general'>
                                    <div className='header-dropdown-menu-group'>
                                        <h3>О поездке</h3>
                                        <Link to={'/info/puteshestvija-s-detmi'} className='header-link'>Путешествия с детьми</Link>
                                        <Link to={'/info/dobrovolnoe-donesenie'} className='header-link'>Добровольное донесение</Link>
                                        <Link to={'/info/opasnye-gruzy'} className='header-link'>Опасные и запрещенные грузы</Link>
                                        <Link to={'/info/strategii-planirovanija-puteshestvija'} className='header-link'>Стратегии планирования <br /> путешествия</Link>
                                        <Link to={'/info/security'} className='header-link'>Сообщения о качестве <br /> обслуживания и безопасности</Link>
                                        <Link to={'/info/normy-bagazha'} className='header-link'>Норма багажа</Link>
                                    </div>
                                    <div className='header-dropdown-menu-group'>
                                        <h3>О бронировании</h3>
                                        <Link to={'/info/politika-bronirovaniya-aviabiletov'} className='header-link'>Политика бронирования <br /> авиабилетов</Link>
                                        <Link to={'info//perevozka-pitomcev'} className='header-link'>Перевозка питомцев</Link>
                                        <Link to={'/info/nnovatsionnye-podhody-k-bronirovanie'} className='header-link'>Инновационные подходы к <br /> бронированию</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={'/about'} className='header-link'>О нас</Link>
                        <Link to={'/contact'} className='header-link'>Контакты</Link>
                    </nav>
                    <button className='header-button'>Регистрация</button>
                    <aside className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                        <div className='header-close-btn'>
                            <button className='close' onClick={() => setMenuOpen(false)}>
                                <FiX />
                            </button>
                        </div>
                        <div className='mobile-links'>
                            <button
                                className='mobile-item'
                                onClick={() => setBookingOpen(!bookingOpen)}
                            >
                                Бронирование
                                <FiChevronDown className={bookingOpen ? 'rotate' : ''} />
                            </button>
                            {bookingOpen && (
                                <div className='mobile-sub'>
                                    <Link to={'/sposoby-oplaty-i-bezopasnost'} onClick={closeMenu} className='header-mobile-link'>Способы оплаты и безопасность</Link>
                                    <Link to={'/politika-vozvratov'} onClick={closeMenu} className='header-mobile-link'>Политика возвратов</Link>
                                    <Link to={'/oformit-vozvrat-bileta-i-izmenit-svet'} onClick={closeMenu} className='header-mobile-link'>Оформить возврат билета и изменить билет</Link>
                                </div>
                            )}
                            <button
                                className='mobile-item'
                                onClick={() => setInfoOpen(!infoOpen)}
                            >
                                Полезная информация
                                <FiChevronDown className={infoOpen ? 'rotate' : ''} />
                            </button>
                            {infoOpen && (
                                <div className='mobile-sub'>
                                    <h3>О поездке</h3>
                                    <Link to={'/info/puteshestvija-s-detmi'} onClick={closeMenu} className='header-mobile-link'>Путешествия с детьми</Link>
                                    <Link to={'/info/dobrovolnoe-donesenie'} onClick={closeMenu} className='header-mobile-link'>Добровольное донесение</Link>
                                    <Link to={'/info/opasnye-gruzy'} onClick={closeMenu} className='header-mobile-link'>Опасные и запрещенные грузы</Link>
                                    <Link to={'/info/strategii-planirovanija-puteshestvija'} onClick={closeMenu} className='header-mobile-link'>Стратегии планирования <br /> путешествия</Link>
                                    <Link to={'/info/security'} onClick={closeMenu} className='header-mobile-link'>Сообщения о качестве <br /> обслуживания и безопасности</Link>
                                    <Link to={'/info/normy-bagazha'} onClick={closeMenu} className='header-mobile-link'>Норма багажа</Link>
                                    <h3>О бронировании</h3>
                                    <Link to={'/info/politika-bronirovaniya-aviabiletov'} onClick={closeMenu} className='header-mobile-link'>Политика бронирования <br /> авиабилетов</Link>
                                    <Link to={'info//perevozka-pitomcev'} onClick={closeMenu} className='header-mobile-link'>Перевозка питомцев</Link>
                                    <Link to={'/info/nnovatsionnye-podhody-k-bronirovanie'} onClick={closeMenu} className='header-mobile-link'>Инновационные подходы к <br /> бронированию</Link>
                                </div>
                            )}
                            <Link to={'/about'} onClick={closeMenu} className='header-mobile-link'>О нас</Link> 
                            <Link to={'/contact'} onClick={closeMenu} className='header-mobile-link'>Контакты</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </header>
    )
}

export default Header;