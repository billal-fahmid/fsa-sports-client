import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PupularInstructor from './PopularInstructor/PupularInstructor';
import Teastimonials from '../Teastimonials/Teastimonials';
import Litmitless from './Limitless/Litmitless';
import WhatLearn from '../WhatLearn/WhatLearn';
import Experiance from './Experiance/Experiance';
import OurEvents from '../OurEvents/OurEvents';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Litmitless></Litmitless>
            <PopularClasses></PopularClasses>
            <WhatLearn></WhatLearn>
            <PupularInstructor></PupularInstructor>
            <Experiance></Experiance>
            <OurEvents></OurEvents>
            <Teastimonials></Teastimonials>
        </div>
    );
};

export default Home;


