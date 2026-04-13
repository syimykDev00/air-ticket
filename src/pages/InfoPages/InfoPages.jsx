import React from 'react';
import { useParams } from 'react-router-dom';
import healthyData from '../../components/home/HealthyInformationData';
import BagagesAllowance from './BagagesAllowance';
import DangerousGoods from './DangerousGoods';
import VoluntaryReport from './voluntaryReport';
import InfoChildren from './InfoChildren';
import InfoPlanning from './InfoPlanning';
import InfoSecurity from './InfoSecurity';
import InfoBookingPolicy from './InfoBookingPolicy';
import InfoTransportationOfPets from './InfoTransportationOfPets';

const InfoPages = () => {

    const {slug} = useParams()

    const pageData = healthyData.find(item => item.slug === slug)

    if(!pageData) {
        return <h2>Страница не найдена</h2>
    }

    return (
        <>
        {slug === 'baggage-allowance' && <BagagesAllowance />}
        {slug === 'dangerous-goods' && <DangerousGoods />}
        {slug === 'voluntary-report' && <VoluntaryReport/>}
        {slug === 'info-children' && <InfoChildren/>}
        {slug === 'info-planning' && <InfoPlanning/>}
        {slug === 'info-security' && <InfoSecurity/>}
        {slug === 'info-booking-policy' && <InfoBookingPolicy/>}
        {slug === 'info-transportation-of-pets' && <InfoTransportationOfPets/>}
        <DangerousGoods />
        </>
    )
}

export default InfoPages;