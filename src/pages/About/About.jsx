import React from 'react';
import InfoSidebar from '../InfoPages/InfoSidebar';
import NeoCompanySlider from '../../components/home/NeoCompanySlider';

const About = () => {
    return (
        <section id='about'>
            <div className='container'>
                <div className='aboutBg'></div>
                <div className='about'>
                    <div className='about-general'>
                        <div className='about-block'>
                            <h2>О нас</h2>
                            <p>ОсОО «О нас» было образовано в 2023 году, а в марте 2024 года был получен сертификат
                                 эксплуатанта № 63. Авиарейсы авиакомпании выполняются на 
                                 комфортабельном воздушном судне Boeing 737-300. Политика ОсОО 
                                 «О нас» направлена на создание единой команды приверженцев общих 
                                 интересов ориентированных на предоставление комфортабельных и 
                                 безопасных полетов. Авиакомпания «Скай ФРУ» — это в первую очередь команда специалистов, 
                                 полных позитивной энергии и любящих авиацию. Квалифицированные экипажи и профессиональный 
                                 наземный персонал заботятся о пассажирах, перелетающих нашей авиакомпанией каждый день. Мы хотим, 
                                 чтобы наши пассажиры путешествовали на наших самолетах безопасно и комфортно каждый день, так как лозунг нашей 
                                 авиакомпании «ВСТРЕЧАЙ МИР С ВЫСОТЫ».
                            </p> 
                        </div>
                        <aside className='info-sidebar-about'>
                         <InfoSidebar />
                       </aside>
                    </div>
                    <h3>Наши партнеры</h3>
                </div>
            </div>
            <NeoCompanySlider/>
        </section>
    )
}

export default About;