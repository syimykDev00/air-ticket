import React from 'react';
import infoBookingIconOne from '../../assets/img/infoBookingIconOne.svg';
import infoBookingIconTwo from '../../assets/img/infoBookingIconTwo.svg';
import infoBookingIconThree from '../../assets/img/infoBookingIconThree.svg';
import infoBookingIconFour from '../../assets/img/infoBookingIconFour.svg';
import InfoSidebar from './InfoSidebar';

const InfoBookingPolicy = () => {
    return (
        <section id='infoBooking'>
            <div className='container'>
                <div className='infoBookingBg'></div>
                <div className='infoBooking'>
                    <h1>Политика бронирования авиабилетов</h1>
                    <div className='infoBooking-general'>
                        <div className='infoBooking-group-one'>
                            <div className='infoBooking-block-one'>
                                <div className='infoBooking-icon'>
                                    <img src={infoBookingIconOne} alt="infoBookingIcon"/>
                                    <h2>Основные правила бронирования</h2>
                                </div>
                                <p>Данные пассажиров <br />
                                  При заполнении данных будьте предельно внимательны. 
                                  Информация должна строго соответствовать вашему удостоверению личности 
                                  (паспорту или загранпаспорту): <br />
                                  1.Имя и фамилия: Допускается не более 3-х опечаток, 
                                  если они не меняют смысл фамилии (но лучше не допускать ни одной, так
                                   как некоторые авиакомпании, особенно лоукостеры, очень строги). <br />
                                  2.Порядок данных: Не путайте поля «Имя» и «Фамилия».</p>
                                  <h6>
                                    Подтверждение и оплата <br />
                                    1.Тайм-лимит: После создания заказа у вас есть ограниченное время на оплату 
                                    (от 15 минут до нескольких часов, в зависимости от тарифа). Если оплата не поступила, 
                                    бронь аннулируется автоматически. <br />
                                    2.Маршрутная квитанция: После оплаты электронный билет (E-ticket) придет на вашу почту 
                                    в течение 15–60 минут. Его не обязательно распечатывать, достаточно иметь в электронном 
                                    виде.
                                  </h6>
                            </div>
                            <div className='infoBooking-block-two'>
                                <div className='infoBooking-icon'>
                                    <img src={infoBookingIconTwo} alt="infoBookingIcon"/>
                                    <h2>Изменение и отмена (Возврат и Обмен)</h2>
                                </div>
                                <p>Возможность вернуть билет зависит от выбранного вами тарифа, а не от нашего сервиса.</p>
                                <p>Невозвратные тарифы: Обычно самые дешевые. Деньги по ним не возвращаются (кроме редких случаев, предусмотренных законом, 
                                например, из-за болезни при наличии справки).</p>
                                <p>Возвратные тарифы: Позволяют вернуть полную стоимость или ее часть
                                за вычетом штрафа авиакомпании.</p>
                                <p>Обмен: Изменение даты или маршрута чаще всего требует доплаты разницы в 
                                тарифе и оплаты сервисного сбора.</p>
                                <h6>Важно: Заявки на возврат или обмен принимаются не позднее чем за 48 часов 
                                до вылета через ваш Личный кабинет.</h6>
                            </div>
                            <div className='infoBooking-block-three'>
                                <div className='infoBooking-icon'>
                                    <img src={infoBookingIconThree} alt="infoBookingIcon"/>
                                    <h2>Особые условия</h2>
                                </div>
                                <p>Последовательность перелетов: Билеты должны использоваться строго по порядку. 
                                    Если вы пропустите первый сегмент (например, перелет «туда»), авиакомпания 
                                  имеет право аннулировать билет «обратно» без возврата средств.</p>
                                  <h6>Визовый режим: Наличие визы и других разрешительных документов — ответственность пассажира. Перед бронированием обязательно
                                  проверьте правила въезда в страну назначения и условия транзита.</h6>
                            </div>
                            <div className='infoBooking-block-four'>
                                <div className='infoBooking-icon'>
                                    <img src={infoBookingIconFour} alt="infoBookingIcon"/>
                                    <h2>Безопасность платежей</h2>
                                </div>
                                <p>Мы используем современные протоколы защиты. Ваши средства защищены, а 
                                    списание происходит только после того, 
                                    как авиакомпания подтвердит наличие мест по выбранному тарифу.</p>
                            </div>
                        </div>
                         <aside className='info-sidebar-booking'>
                         <InfoSidebar />
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default InfoBookingPolicy;