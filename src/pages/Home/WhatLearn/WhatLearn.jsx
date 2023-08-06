import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import CountUp from 'react-countup';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useInView } from 'react-intersection-observer';



const WhatLearn = () => {

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    const [schools, setSchools] = useState([])

    useEffect(() => {
        fetch('https://server-rouge-gamma.vercel.app/schools')
            .then(res => res.json())
            .then(data => setSchools(data))
    }, [])
    console.log(schools)


    return (
        <div className='py-20'>
            <SectionTitle title={"What do you want to learn today?"} subTitle={'ALL IVY SCHOOL, ALL THE TIME'}></SectionTitle>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        schools?.map(school => <SwiperSlide>
                            <div class="relative bg-gradient-to-t from-pink-200 to-purple-600  overflow-hidden rounded-lg shadow-lg cursor-pointer">
                                <img class="object-cover w-full opacity-75 h-48" src={school.image} alt="Flower and sky" />

                                <div class="absolute top-0 left-0 px-6 py-4">
                                    <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">{school.name}</h4>
                                    <p class="leading-normal text-gray-100">{school.subject}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }


                    <p className='text-2xl'> .....</p>
                </Swiper>
                <div className='flex md:flex-row flex-col justify-around mt-10' ref={ref}>
                    <div className='text-gray-500 text-center'>
                        <h2 className='text-7xl'>
                            {
                                inView ?
                                    <CountUp start={0} end={2100} duration={3}></CountUp> : null
                            }
                            +
                        </h2>
                        <p className='text-xl font-bold'>Students</p>
                    </div>
                    <div className='text-gray-500 text-center'>
                        <h2 className='text-7xl'>
                            {
                                inView ?
                                    <CountUp start={0} end={600} duration={3}></CountUp> : null
                            }
                            +
                        </h2>
                        <p className='text-xl font-bold'>Courses</p>
                    </div>
                    <div className='text-gray-500 text-center'>
                        <h2 className='text-7xl'>
                            {
                                inView ?
                                    <CountUp start={0} end={62000} duration={3}></CountUp> : null
                            }
                            
                        </h2>
                        <p className='text-xl font-bold'>Hours Video</p>
                    </div>

                </div>
            </div>


            {/* <SectionTitle title={"What do you want to learn today?"} subTitle={'ALL IVY SCHOOL, ALL THE TIME'}></SectionTitle>
            <div>

                <div class="grid grid-cols-1 sm:grid-cols-  lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
             

                     {
                            schools?.map(school => <div class="relative bg-gradient-to-t from-pink-200 to-purple-600  overflow-hidden rounded-lg shadow-lg cursor-pointer">
                                <img class="object-cover w-full opacity-75 h-48" src={school.image} alt="Flower and sky" />

                                <div class="absolute top-0 left-0 px-6 py-4">
                                    <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">{school.name}</h4>
                                    <p class="leading-normal text-gray-100">{school.subject}</p>
                                </div>
                            </div>)
                        } 
                           


                </div>
            </div> */}
        </div>
    );
};

export default WhatLearn;