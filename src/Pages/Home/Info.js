import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-10/12 mx-auto">
            <InfoCard cardTitle="Opening Hours" cardDes="Monday to Friday from 9AM to 9PM" bgColor="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" cardDes="House-17, Sector-11, Uttara, Dhaka-1230" bgColor="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" cardDes="+088 123 4567" bgColor="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;