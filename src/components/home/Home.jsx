import React from 'react';
import Hero from './Hero';
import FindTickets from './FindTickets';
import GreatDeals from './GreatDeals';
import '../../assets/styles/home.css';
import '../../assets/styles/homeMedia.css';
import NeoApplication from './NeoApplication';
import NeoCompanySlider from './NeoCompanySlider';
import HealthyInformation from './HealthyInformation';

const Home = () => {
    return (
        <>
        <Hero/>
        <FindTickets/>
        <GreatDeals/>
        <HealthyInformation/>
        <NeoApplication/>
        <NeoCompanySlider/>
        </>
    )
}

export default Home;