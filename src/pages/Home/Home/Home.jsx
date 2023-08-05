import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PupularInstructor from './PopularInstructor/PupularInstructor';
import Teastimonials from '../Teastimonials/Teastimonials';
import Litmitless from './Limitless/Litmitless';
import WhatLearn from '../WhatLearn/WhatLearn';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Litmitless></Litmitless>
            <PopularClasses></PopularClasses>
            <WhatLearn></WhatLearn>
            <PupularInstructor></PupularInstructor>
            <Teastimonials></Teastimonials>
        </div>
    );
};

export default Home;


