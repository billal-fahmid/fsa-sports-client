import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/banner-img/front-view-trainer-talking-players.jpg'
import slider2 from '../../../assets/banner-img/medium-shot-football-trainer-helping-kids.jpg'
import slider3 from '../../../assets/banner-img/medium-shot-smiley-kids-posing-together.jpg'
import slider4 from '../../../assets/banner-img/sports-teacher-with-her-students.jpg'
import slider5 from '../../../assets/banner-img/young-basketball-player-shoot.jpg'

const Banner = () => {
    return (
        <div className="">
              <Carousel>
                <div className='relative '>
                    <img className='opacity-70 ' src={slider2} />
                    <p className=" absolute top-1/3 left-10 md:left-28 font-bold md:w-1/2 text-left leading-tight text-violet-800 bg-none md:text-7xl text-3xl">Ignite Your Passion, Master Your Game!</p>
                </div>
                <div className='relative'>
                    <img className='opacity-70' src={slider1} />
                    <p className=" absolute top-1/3 left-10 md:left-28 font-bold md:w-1/2 text-left leading-tight text-violet-900 bg-none md:text-7xl text-3xl">Where Champions are Made, Dreams Take Flight!</p>
                </div>
                <div className='relative'>
                    <img className='opacity-70' src={slider3} />
                    <p className=" absolute top-1/3 left-10 md:left-28 font-bold md:w-1/2 text-left leading-tight text-violet-800 bg-none md:text-7xl text-3xl">Elevate Your Skills, Embrace Victory!</p>
                </div>
                <div className='relative'>
                    <img className='opacity-70' src={slider4} />
                    <p className=" absolute top-1/3 left-10 md:left-28 font-bold md:w-1/2 text-left leading-tight text-violet-800 bg-none md:text-7xl text-3xl">Unleash Your Inner Athlete, Conquer the Field!</p>
                </div>
                <div className='relative'>
                    <img className='opacity-70' src={slider5} />
                    <p className=" absolute top-1/3 left-10 md:left-28 font-bold md:w-1/2 text-left leading-tight text-violet-700 bg-none md:text-7xl text-3xl">Train. Compete. Succeed!</p>
                </div>
              
            </Carousel>
        </div>
    );
};

export default Banner;