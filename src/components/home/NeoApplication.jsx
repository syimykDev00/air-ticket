import React from 'react';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import neoApplicationQrImage from '../../assets/img/neoApplicationQrImage.png';

const NeoApplication = () => {
    return (
        <section id='neoApplication'>
            <div className='container'>
                <div className='neoApplication'>
                    <div className='neoApplication-group'>
                        <div className='neoApplication-group-icon'>
                            <HiMiniDevicePhoneMobile />
                        </div>
                        <h2>Мобильное приложение <span>NEO TRAVEL</span> </h2>
                        <p>Выбирайте места, оплачивайте билеты и получайте 
                           их прямо на телефон — быстро, просто и без очередей</p>
                    </div>
                    <div className='neoApplication-Qrcode'>
                        <img src={neoApplicationQrImage} alt="QrImage"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NeoApplication;