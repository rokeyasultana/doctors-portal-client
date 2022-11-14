import React from 'react';
import SecondBanner from '../SecondBanner/SecondBanner';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <SecondBanner></SecondBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;