import React from 'react';
import InfoSidebar from './InfoSidebar';
import dangerousGoodsIconOne from '../../assets/img/dangerousGoodsIconOne.svg';
import dangerousGoodsIconTwo from '../../assets/img/dangerousGoodsIconTwo.svg';

const DangerousGoods = () => {
    return (
        <section id='dangerousGoods'>
            <div className='container'>
                <div className='dangerousGoodsBg'></div>
                 <div className='dangerousGoods'>
                    <div className="dangerousGoods-group-one">
                        <div className='dangerousGoods-block-one'>
                            <div className='dangerousGoods-text-group'>
                                <div className='dangerousGoods-icon-one'>
                                    <img src={dangerousGoodsIconOne} alt="dangerousIconImage"/>
                                </div>
                                <h2>Категорически запрещено</h2>
                            </div>
                            <p>1)Взрывчатые вещества: порох, петарды, фейерверки, сигнальные ракеты.                              
                                <br /> <br />
                              2)Сжатые газы: баллоны для горелок, баллончики для самообороны (перцовые), зажигалки с турбонаддувом.
                              <br /> <br />
                              3)Легковоспламеняющиеся жидкости: бензин, растворители, ацетон, топливо для зажигалок.
                              <br /> <br />
                              4)Токсичные и коррозийные вещества: ртуть (в том числе в старых термометрах), кислоты, щелочи, хлорка.
                              <br /> <br />
                              5)Сильные магниты: могут повлиять на работу навигационных приборов самолета.</p>
                        </div>
                        <div className='dangerousGoods-block-two'>
                            <div className='dangerousGoods-text-group'>
                                <div className='dangerousGoods-icon-two'>
                                    <img src={dangerousGoodsIconTwo} alt="dangerousIconImage"/>
                                </div>
                                <h2>Особое внимание: Литиевые аккумуляторы</h2>
                            </div>
                            <p>Powerbanks и ноутбуки: Должны перевозиться только в ручной клади.
                               <br /> <br />
                             Мощность: Батареи до 100 Втч везем без ограничений; от 100 до 160 Втч — требуется разрешение авиакомпании; более 160 Втч — перевозка запрещена </p>
                        </div>
                    </div>
                    <aside className='info-sidebar-dangerous'>
                         <InfoSidebar />
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default DangerousGoods;