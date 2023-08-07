import React from 'react';
import siteImage from '../../../../assets/banner-img/bg-18.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../../variants'

const Litmitless = () => {
  
    return (
        <div className='py-20'>
            <div className='flex md:flex-row flex-col  w-full gap-20'>
                <motion.div 
                 variants={fadeIn('right', 0.3)}
                 initial={'hidden'}
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.3 }}
                className='text-right lg:w-1/2 w-full flex flex-col justify-center gap-6'>
                    <h2 className='text-4xl font-bold text-indigo-600 '>Limitless learning, more <br /> possibilities</h2>
                    <p className='text-[16px]'>ALL FSA SCHOOL, ALL THE TIME</p>

                    <p>High is a nationally recognized K-12 independent school situatedin the hills of Oakland, California. Our mission is to inspire a maplifelonglove of learning with a focus on scholarship. For 23 years of existence,Ed hasmore</p>
                    <div  className='right-0'>
                        <button className='btn bg-indigo-600 w-40 lg:mt-10'>LEARN MORE</button>
                    </div>
                </motion.div>
                <motion.div 
                 variants={fadeIn('left', 0.3)}
                 initial={'hidden'}
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.3 }}
                className='lg:w-1/2 w-full' >
                    <img className='h-screen' src={siteImage} alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default Litmitless;