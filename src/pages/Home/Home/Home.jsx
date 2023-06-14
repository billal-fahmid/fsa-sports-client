import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PupularInstructor from './PopularInstructor/PupularInstructor';
import Teastimonials from '../Teastimonials/Teastimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PupularInstructor></PupularInstructor>
            <Teastimonials></Teastimonials>
        </div>
    );
};

export default Home;


