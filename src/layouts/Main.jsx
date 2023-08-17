import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className='max-w-[2520px] mx-auto   sm:px-2 px-4'>
            <Navbar></Navbar>
            <div className='md:px-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;