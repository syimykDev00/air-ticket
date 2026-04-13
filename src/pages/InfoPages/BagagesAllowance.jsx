import React from 'react';
import InfoSidebar from './InfoSidebar';

const BagagesAllowance = () => {
    return (
        <section id='bagagesAllowance'>
            <div className='container'>
                <div className='bagagesAllowanceBg'></div>
            </div>
            <div className='container'>
                <div className='bagagesAllowance'>
                    <h1>Ручная кладь</h1>
                    <div className='bagagesAllowance-general'>
                        <div className='bagagesAllowance-group-one'>
                            <div className='bagagesAllowance-block-one'> 
                                <p>Стандартные габариты: Большинство авиакомпаний 
                                    (Аэрофлот, S7) придерживаются размера 55×40×25 см.
                                    <br /> <br />
                                     Вес: От 5 до 10 кг в зависимости от тарифа.
                                     <br /> <br />
                                     Важно: Жидкости (гели, шампуни, вода) должны быть в емкостях до 100 мл. 
                                     Общий объем всех жидкостей — не более 1 литра на человека.</p>
                            </div>
                            <div className='bagagesAllowance-block-two-group'>
                                <h2>Зарегистрированный багаж</h2>
                                <div className='bagagesAllowance-block-two'>
                                    <div className='bagagesAllowance-block-two-text'>
                                        <h3>Класс <br /> обслуживания</h3>
                                        <h4>Эконом-лайт</h4>
                                        <h4>Эконом-стандарт</h4>
                                        <h4>Бизнес-класс</h4>
                                    </div>
                                    <div className='bagagesAllowance-block-two-text'>
                                        <h3>Вес (до)</h3>
                                        <h4>Багаж не включен</h4>
                                        <h4>23 кг</h4>
                                        <h4>32 кг (обычно 2 места)</h4>
                                    </div>
                                    <div className='bagagesAllowance-block-two-text'>
                                        <h3>Габариты (сумма 3-х <br /> измерений)</h3>
                                        <h4>—</h4>
                                        <h4>до 158 см</h4>
                                        <h4>до 158 см</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className='info-sidebar'>
                         <InfoSidebar />
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BagagesAllowance;