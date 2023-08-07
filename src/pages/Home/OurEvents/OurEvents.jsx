import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const OurEvents = () => {

    const [events , setEvents] = useState([])

    useEffect(()=>{
        fetch('https://server-rouge-gamma.vercel.app/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
    console.log(events)

    return (
        <div className='pb-24'>
            <SectionTitle title={'New Events'} subTitle={'ALL FSA SCHOOL'}></SectionTitle>
            <div id='app'>
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
                                {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('https://i.ibb.co/Tkt48hg/Untitled-24-426x426.jpg')]"  title="River">
                                </div> */}
                                <div className="h-48 lg:h-[234px] lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:`url(${event.eventImg})`}}  title="River">
                                </div>
                           
                                {/* <div className={`  h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('${event.eventImg}')]`}  title="River">
                                </div> */}
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
                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide> */}
                    {/* // https://i.ibb.co/Tkt48hg/Untitled-24-426x426.jpg
                // https://i.ibb.co/ZGMX0s8/Untitled-2-A-426x426.jpg
                // https://i.ibb.co/YQR4dtn/Untitled-2-426x426.webp */}
                </Swiper>
            </div>

        </div>
    );
};

export default OurEvents;