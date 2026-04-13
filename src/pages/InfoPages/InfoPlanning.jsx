import React from 'react';
import infoPlanningIconOne from '../../assets/img/infoPlanningIconOne.svg';
import infoPlanningIconTwo from '../../assets/img/InfoPlanningIconTwo.svg';
import infoPlanningIconThree from '../../assets/img/InfoPlanningIconTwo.svg';
import InfoSidebar from './InfoSidebar';

const InfoPlanning = () => {
    return (
        <section id='infoPlanning'>
            <div className='container'>
                <div className='infoPlanningBg'></div>
                <div className='infoPlanning'>
                    <h1>Стратегии планирования путешествия</h1>
                    <p>Три подхода к планированию: какой ваш?</p>
                    <div className='infoPlanning-general'>
                        <div className='infoPlanning-block'>
                            <img src={infoPlanningIconOne} alt="infoPlanningIcon"/>
                            <h2>Раннее бронирование (за 3–6 месяцев)</h2>
                            <h6>Для кого: Для тех, кто ценит предсказуемость, 
                            путешествует семьей или планирует поездку 
                            на праздники и каникулы.</h6>
                            <h6>Плюсы: Самые низкие тарифы, максимальный
                             выбор мест в салоне и наличие номеров в лучших отелях.</h6>
                             <h6>Стратегия: Покупайте билеты, как только открываются продажи 
                             (обычно за 330 дней до вылета).</h6>
                        </div>
                        <div className='infoPlanning-block'>
                            <img src={infoPlanningIconTwo} alt="infoPlanningIcon"/>
                            <h2>Охота за выгодой (за 1–2 месяца)</h2>
                            <h6>Для кого: Для гибких путешественников, 
                            готовых подстраиваться под лучшие предложения.</h6>
                            <h6>Плюсы: Возможность поймать распродажи авиакомпаний 
                            и спецпредложения.</h6>
                             <h6>Стратегия: Используйте наш календарь низких цен и следите за вылетами
                             во вторник и среду — обычно они дешевле выходных.</h6>
                        </div>
                        <div className='infoPlanning-block-group'>
                         <div className='infoPlanning-block'>
                            <img src={infoPlanningIconThree} alt="infoPlanningIcon"/>
                            <h2>Спонтанный побег (за 1–7 дней)</h2>
                            <h6>Для кого: Для легких на подъем и тех, кому 
                            срочно нужна перезагрузка.</h6>
                            <h6>Плюсы: Адреналин и иногда — очень дешевые места 
                            на чартерных рейсах.</h6>
                             <h6>Стратегия: Держите наготове собранный чемодан
                             и проверяйте «горящие» билеты в нашем приложении.</h6>
                         </div>
                        <aside className='info-sidebar-planning'>
                         <InfoSidebar />
                        </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoPlanning;