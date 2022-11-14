import React from 'react';
import SecondBanner from './SecondBanner/SecondBanner';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <SecondBanner></SecondBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
     
       </div>

    );
};

export default Home;