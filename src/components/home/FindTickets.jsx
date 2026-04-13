import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { cities } from './FindTicketCities';
import { FaArrowsLeftRight } from "react-icons/fa6";
import { BiChevronDown } from 'react-icons/bi'

const FindTickets = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [fromCity, setFromCity] = useState(false)
    const [isFromOpen, setIsFromOpen] = useState(false)
    const [WhereCity, setWhereCity] = useState(false)
    const [isWhereOpen, setIsWhereOpen] = useState(false)
    const [flightClass, setFlightClass] = useState('economy')

    const [passengers, setPassengers] = useState({
        adults: 1,
        children: 0,
        infants: 0,
    })

    const changeCount = (type, action) => {
        setPassengers(prev => {
            const value =
                action === 'plus' ? prev[type] + 1 : prev[type] - 1
            if (value < 0) return prev
            if (type === 'adults' && value === 0) return prev
            return { ...prev, [type]: value }
        })
    }

    const totalPassengers =
        passengers.adults + passengers.children + passengers.infants

    const handleSwap = () => {
        setFromCity(WhereCity)
        setWhereCity(fromCity)
    }

    const flightClassLabels = {
        economy: 'Эконом',
        comfort: 'Комфорт',
        business: 'Бизнес',
        'first class': 'Первый класс',
    }

    const passengersRef = useRef(null)

    useEffect(() => {
        const handleCickOutside = (event) => {
            if (
                passengersRef.current &&
                !passengersRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleCickOutside)
        return () => {
            document.removeEventListener('mousedown', handleCickOutside)
        }
    }, [])

    return (
        <section id='findTickets'>
            <div className='container'>
                <div className='findTickets'>
                    <div className='select'>
                        <div
                            className='select-btn-one'
                            onClick={() => setIsFromOpen(!isFromOpen)}
                        >
                            {fromCity ? fromCity.city : 'Откуда?'}
                        </div>
                        {isFromOpen && (
                            <div className='select-dropdown'>
                                {cities
                                    .filter(city => city.id !== WhereCity?.id)
                                    .map(item => (
                                        <div
                                            key={item.id}
                                            className='select-item'
                                            onClick={() => {
                                                setFromCity(item)
                                                setIsFromOpen(false)
                                            }}
                                        >
                                            <span>{item.city}</span>
                                            <span className='code'>{item.code}</span>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                    <button
                        className='swap-btn'
                        onClick={handleSwap}
                        disabled={!fromCity || !WhereCity}
                    >
                        <FaArrowsLeftRight className='swap-btn-icon' />
                    </button>
                    <div className='select'>
                        <div
                            className='select-btn-two'
                            onClick={() => setIsWhereOpen(!isWhereOpen)}
                        >
                            {WhereCity ? WhereCity.city : 'Куда?'}
                        </div>
                        {isWhereOpen && (
                            <div className='select-dropdown'>
                                {cities
                                    .filter(city => city.id !== fromCity?.id)
                                    .map(item => (
                                        <div
                                            key={item.id}
                                            className='select-item'
                                            onClick={() => {
                                                setWhereCity(item)
                                                setIsWhereOpen(false)
                                            }}
                                        >
                                            <span>{item.city}</span>
                                            <span className='code'>{item.code}</span>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                    <input
                        type="text"
                        className='findTickets-input-one'
                        placeholder='Когда'
                        onFocus={(e) => (e.target.type = 'date')}
                    />
                    <input
                        type="text"
                        className='findTickets-input-two'
                        placeholder='Обратно'
                        onFocus={(e) => (e.target.type = 'date')}
                    />
                    <div className='passengers' ref={passengersRef}>
                        <div
                            className='passengers-btn'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className='passengers-span-text'>
                                <span className="passengers-count">
                                    {totalPassengers} пассажира
                                </span> 
                                <span className='passengers-class'>
                                    {flightClassLabels[flightClass]}
                                </span>
                            </div>
                            <BiChevronDown
                            className={`passengers-arrow ${isOpen ? 'open' : ''}`}
                            />
                        </div>
                         <div className={`passengers-dropdown ${isOpen ? 'open' : ''}`}>
                                {/* ПАССАЖИРЫ */}
                                <div className="passengers-section">
                                    {[
                                        {
                                            type: 'adults',
                                            title: 'Взрослые',
                                            desc: 'Старше 12 лет',
                                        },
                                        {
                                            type: 'children',
                                            title: 'Дети',
                                            desc: 'От 2 до 12 лет',
                                        },
                                        {
                                            type: 'infants',
                                            title: 'Младенцы',
                                            desc: 'До 2 лет, без места',
                                        },
                                    ].map(item => (
                                        <div className="passengers-row" key={item.type}>
                                            <div className="passengers-info">
                                                <span className="title">{item.title}</span>
                                                <span className="desc">{item.desc}</span>
                                            </div>

                                            <div className="counter">
                                                <button onClick={() => changeCount(item.type, 'minus')}>−</button>
                                                <span>{passengers[item.type]}</span>
                                                <button onClick={() => changeCount(item.type, 'plus')}>+</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* РАЗДЕЛИТЕЛЬ */}
                                <div className="divider" />

                                {/* КЛАСС ПЕРЕЛЁТА */}
                                <div className="flight-class">
                                    <span className="flight-class-title">Класс перелёта</span>

                                    {[
                                        { value: 'economy', label: 'Эконом' },
                                        { value: 'comfort', label: 'Комфорт' },
                                        { value: 'business', label: 'Бизнес' },
                                        { value: 'first class', label: 'Первый класс' },
                                    ].map(item => (
                                        <label
                                            key={item.value}
                                            className={`flight-class-row ${flightClass === item.value ? 'active' : ''
                                                }`}
                                        >
                                            <span>{item.label}</span>

                                            <input
                                                type="radio"
                                                name="flightClass"
                                                value={item.value}
                                                checked={flightClass === item.value}
                                                onChange={() => setFlightClass(item.value)}
                                            />

                                            <span className="custom-radio" />
                                        </label>
                                    ))}
                                </div>
                            </div>
                       
                    </div>
                    <button className='findTickets-button'>
                        Найти билеты
                        <FaArrowRight className='findTickets-btn-icon' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FindTickets;