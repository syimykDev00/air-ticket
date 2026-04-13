import React from 'react';
import healthyData from './HealthyInformationData';
import { MdOutlineArrowOutward } from "react-icons/md";
import {Link} from 'react-router-dom';

const HealthyInformation = () => {
    return (
        <section id='healthyInformation'>
            <div className='container'>
                <div className='healthyInformation'>
                    <h1>Полезная информация</h1>
                    <div className='healthyInformation-general'> 
                        {healthyData.map(item => (
                         <Link key={item.id} to={`/info/${item.slug}`}>
                            <div className='healthyInformation-block'>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <div className='healthyInformation-group'>
                                    <div className='healthyInformation-icon'>
                                        <MdOutlineArrowOutward />
                                    </div>
                                    <img src={item.image} alt="healthyInformationImage"/>
                                </div>
                            </div>
                         </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealthyInformation;