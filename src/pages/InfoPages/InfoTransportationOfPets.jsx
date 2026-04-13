import React from 'react';
import infoPetsIconOne from '../../assets/img/infoPetsIconOne.svg';
import InfoSidebar from './InfoSidebar';

const InfoTransportationOfPets = () => {
    return (
        <section id='infoPets'>
            <div className='container'>
                <div className='infoPetsBg'></div>
                <div className='infoPets'>
                    <h1>Перевозка питомцев</h1>
                    <div className='infoPets-general'>
                        <div className='infoPets-group'>
                            <div className='infoPets-block-one'>
                                <div className='infoPets-icon'>
                                    <img src={infoPetsIconOne} alt="infoPetsIcon"/>
                                    <h2>Способы перевозки</h2>
                                </div>
                                <p>В зависимости от веса и размера животного, 
                                предусмотрено три варианта транспортировки:</p>
                                <p>В салоне самолета: Обычно допускаются питомцы весом до 8 кг
                                 (вместе с переноской). Контейнер 
                                размещается под сиденьем впереди стоящего кресла.</p>
                                <p>В багажном отделении: Для крупных животных предусмотрен специальный
                                 отапливаемый отсек с вентиляцией. Вес и габариты контейнера строго
                                 регламентированы.</p>
                                 <h6>Служебные собаки: Собаки-поводыри и эмоциональной поддержки (с подтверждающими документами) 
                                 обычно летят в салоне бесплатно и без переноски.</h6>
                            </div>
                              <div className='infoPets-block-two'>
                                <div className='infoPets-icon'>
                                    <img src={infoPetsIconOne} alt="infoPetsIcon"/>
                                    <h2>Способы перевозки</h2>
                                </div>
                                <p>Ветеринарный паспорт международного образца.</p>
                                <p>Микрочип (обязателен для международных рейсов).</p>
                                <p>Отметки о прививках: Главная — вакцинация против бешенства 
                                (сделанная не ранее чем за год и не позднее чем за 30 дней до вылета).</p>
                                 <p>Ветеринарное свидетельство: Форма №1 
                                (для РФ) или международный сертификат 5а (для выезда за рубеж).</p>
                                <h6> <span>Важно:</span> Правила ввоза животных в разные страны сильно различаются (например, в некоторые страны требуется тест на антитела к бешенству или карантин). 
                                Обязательно проверьте требования консульства страны назначения.</h6>
                            </div>
                        </div>
                        <aside className='info-sidebar-transportation'>
                         <InfoSidebar />
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoTransportationOfPets;