import React from 'react';
import siteImage from '../../../../assets/banner-img/bg-18.jpg'

const Litmitless = () => {
    return (
        <div className='py-20'>
            <div className='flex w-full gap-20'>
                <div className='text-right lg:w-1/2 w-full flex flex-col justify-center gap-6'>
                    <h2 className='text-4xl font-bold text-indigo-600 '>Limitless learning, more <br /> possibilities</h2>
                    <p className='text-[16px]'>ALL FSA SCHOOL, ALL THE TIME</p>

                    <p>High is a nationally recognized K-12 independent school situatedin the hills of Oakland, California. Our mission is to inspire a maplifelonglove of learning with a focus on scholarship. For 23 years of existence,Ed hasmore</p>
                    <div className='right-0'>
                        <button className='btn bg-indigo-600 w-40 lg:mt-10'>LEARN MORE</button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <img className='h-screen' src={siteImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Litmitless;