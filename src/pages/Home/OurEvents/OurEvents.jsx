import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

const OurEvents = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://server-rouge-gamma.vercel.app/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events)



    return (
        <div className='pb-24 h-screen'>
            <SectionTitle title={'New Events'} subTitle={'ALL FSA SCHOOL'}></SectionTitle>
            {/* <div id='app'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        events?.map(event=><SwiperSlide key={event._id}>
                            <div className="w-full  lg:max-w-full lg:flex">
                           
                                <div className="h-48 lg:h-[234px] lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:`url(${event.eventImg})`}}  title="River">
                                </div>
                           
                             
                                <div className="border-r border-b border-l border-gray-400  lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-4">
    
                                        <div className="text-gray-900 font-bold text-xl mb-2">{event.eventName}</div>
                                        <p className="text-gray-700 text-base">{event.shortEventDescription}</p>
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center">
                                        <img className="w-12 h-12 mr-2 rounded-full" src={event.teacherImg} alt="Avatar of Writer" />
                                        <div className="text-sm">
                                            <p className="text-gray-900 leading-none">{event.teacherName}</p>
                                            <p className="text-gray-600">{event.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                 
                </Swiper>
            </div> */}
            <div id='app'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {events?.map((event) => (
                        <SwiperSlide key={event._id}>
                            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <div className="relative">
                                    <div
                                        className="h-56 lg:h-[234px] bg-cover bg-center"
                                        style={{ backgroundImage: `url(${event.eventImg})` }}
                                        title="Event Image"
                                    >
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                            <button className="text-white text-lg font-semibold">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                                        <div className="text-white font-bold text-xl">{event.eventName}</div>
                                        <p className="text-white text-base">{event.shortEventDescription}</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="mt-4 flex items-center">
                                        <img
                                            className="w-12 h-12 mr-3 rounded-full border-2 border-blue-300"
                                            src={event.teacherImg}
                                            alt="Avatar of Teacher"
                                        />
                                        <div>
                                            <p className="text-gray-900 font-semibold">{event.teacherName}</p>
                                            <p className="text-gray-600">{event.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="flex flex-col items-center justify-center w-full p-10 h-full bg-gray-50">
                                <img
                                    src={event.eventImg}
                                    alt="Event Image"
                                    className="w-full max-h-80 md:px-10 object-cover rounded-lg"
                                />

                                <h1 className="mt-4 text-3xl font-semibold text-center">
                                    {event.eventName}
                                </h1>

                                <p className="mt-4 text-center">
                                    {event.shortEventDescription}
                                </p>

                                <div className="flex items-center mt-4">
                                    <img
                                        src={event.teacherImg}
                                        alt="Teacher Image"
                                        className="w-12 h-12 object-cover rounded-full"
                                    />
                                    <p className="ml-4 font-semibold">{event.teacherName}</p>
                                </div>

                                <p className="mt-2 text-gray-600">{event.date}</p>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>



        </div>
    );
};

export default OurEvents;