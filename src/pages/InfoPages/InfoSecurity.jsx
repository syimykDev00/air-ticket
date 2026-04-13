import React from 'react';
import infoSecurityIconOne from '../../assets/img/infoSecurityIconOne.svg';
import infoSecurityIconTwo from '../../assets/img/infoSecurityIconTwo.svg';
import infoSecurityIconThree from '../../assets/img/infoSecurityIconThree.svg';
import InfoSidebar from './InfoSidebar';

const InfoSecurity = () => {
    return (
        <section id='infoSecurity'>
            <div className='container'>
                <div className='infoSecurityBg'></div>
                <div className='infoSecurity'>
                    <h1>Ваша безопасность — наш главный приоритет</h1>
                    <h6>Мы понимаем, что за каждым билетом стоит жизнь и комфорт человека. Поэтому мы работаем только с
                     проверенными партнерами и используем передовые технологии защиты данных.</h6>
                     <div className='infoSecurity-general'>
                        <div className='infoSecurity-block'>
                            <img src={infoSecurityIconOne} alt="infoSecurityIcon"/>
                            <h2>Защита платежей</h2>
                            <p>Все транзакции проходят через протоколы шифрования PCI DSS и SSL.
                                 Ваши банковские данные
                             не хранятся на наших серверах и недоступны третьим лицам.</p>
                        </div>
                        <div className='infoSecurity-block'>
                            <img src={infoSecurityIconTwo} alt="infoSecurityIcon"/>
                            <h2>Проверка перевозчиков</h2>
                            <p>Мы сотрудничаем только с авиакомпаниями, имеющими действующие
                                 сертификаты эксплуатанта и прошедшими
                             аудит безопасности полетов IOSA (IATA Operational Safety Audit).</p>
                        </div>
                        <div className='infoSecurity-group-block'>
                          <div className='infoSecurity-block'>
                            <img src={infoSecurityIconThree} alt="infoSecurityIcon"/>
                            <h2>Конфиденциальность</h2>
                            <p>Мы строго соблюдаем законодательство о персональных данных.
                             Ваша информация используется исключительно для оформления поездки.</p>
                          </div>
                            <aside className='info-sidebar-security'>
                              <InfoSidebar />
                            </aside>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSecurity;