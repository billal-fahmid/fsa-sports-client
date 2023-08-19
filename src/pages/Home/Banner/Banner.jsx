import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/banner-img/Optimized-front-view-trainer-talking-players.jpg'
import slider2 from '../../../assets/banner-img/Optimized-medium-shot-football-trainer-helping-kids.jpg'
import slider3 from '../../../assets/banner-img/Optimized-medium-shot-smiley-kids-posing-together.jpg'
import slider4 from '../../../assets/banner-img/Optimized-sports-teacher-with-her-students.jpg'
import slider5 from '../../../assets/banner-img/Optimized-young-basketball-player-shoot.jpg'

const Banner = () => {
    return (
        <div className="">
            <Carousel>
            <div className='relative'>
                    <img className='' src={slider5} />
                     <div className='absolute bg-gradient-to-b from-transparent to-blue-900 top-1/3   h-full w-full'>
                        <p className=" font-bold md:w-1/2 text-left leading-tight text-white pl-10 md:pl-16 md:text-7xl text-3xl ">Train. Compete. Succeed!</p>
                    </div>
           
                </div>
                <div className='relative ' >
                    <img className='' src={slider2} />
                    {/* <p className=" absolute top-1/3 left-10 md:left-28 font-bold md:w-1/2 text-left leading-tight text-white h-full w-full md:text-7xl text-3xl bg-gradient-to-b from-transparent to-black">Ignite Your Passion, Master Your Game!</p> */}
                    <div className='absolute bg-gradient-to-b from-transparent to-blue-900 top-1/3   h-full w-full'>
                        <p className=" font-bold md:w-1/2 text-left leading-tight text-white pl-10 md:pl-16 md:text-7xl text-3xl ">Ignite Your Passion, Master Your Game!</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='' src={slider1} />
                     <div className='absolute bg-gradient-to-b from-transparent to-blue-900 top-1/3   h-full w-full'>
                        <p className=" font-bold md:w-1/2 text-left leading-tight text-white pl-10 md:pl-16 md:text-7xl text-3xl ">Where Champions are Made, Dreams Take Flight!</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='' src={slider3} />
                     <div className='absolute bg-gradient-to-b from-transparent to-blue-900 top-1/3   h-full w-full'>
                        <p className=" font-bold md:w-1/2 text-left leading-tight text-white pl-10 md:pl-16 md:text-7xl text-3xl ">Elevate Your Skills, Embrace Victory!</p>
                    </div>
                  
                </div>
                <div className='relative'>
                    <img className='' src={slider4} />
                     <div className='absolute bg-gradient-to-b from-transparent to-blue-900 top-1/3   h-full w-full'>
                        <p className=" font-bold md:w-1/2 text-left leading-tight text-white pl-10 md:pl-16 md:text-7xl text-3xl ">Unleash Your Inner Athlete, Conquer the Field!</p>
                    </div>
                 
                </div>
               

            </Carousel>
        </div>
    );
};

export default Banner;