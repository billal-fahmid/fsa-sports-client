import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PupularInstructor from './PopularInstructor/PupularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PupularInstructor></PupularInstructor>
        </div>
    );
};

export default Home;