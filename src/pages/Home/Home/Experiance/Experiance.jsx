import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../../variants'

const Experiance = () => {
    return (
        <div className='py-20'>
            <SectionTitle title={'Live the experience'} subTitle={'ALL FSA SCHOOL, ALL THE TIME'}></SectionTitle>
            <div>

                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex items-center  justify-center gap-10 mb-16'>
                    <div className='lg:w-1/2 w-full pr-16 flex justify-end'>
                        <img className='rounded-full object-contain' src='https://i.ibb.co/Tkt48hg/Untitled-24-426x426.jpg' alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full lg:pr-16'>
                        <h2 className='text-2xl pb-5'>Learn at your own pace</h2>
                        <p className='text-gray-500 text-xl'>Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex items-center  justify-center gap-10 mb-16'>

                    <div className='lg:w-1/2 w-full lg:pl-16 text-right'>
                        <h2 className='text-2xl pb-5'>Community of opportunities</h2>
                        <p className='text-gray-500 text-xl'>Center administrator says the goal is to offer the fellowship annually. The fellowship is open to all graduate students who have an unpaid internship or field research in subject areas that align with the center’s mission.</p>
                    </div>
                    <div className='lg:w-1/2 w-full pl-16 flex justify-start'>
                        <img className='rounded-full object-contain' src='https://i.ibb.co/ZGMX0s8/Untitled-2-A-426x426.jpg' alt="" />
                    </div>
                </motion.div>

                <motion.div 
                variants={fadeIn('right', 0.3)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex items-center  justify-center gap-10'>
                    <div className='lg:w-1/2 w-full pr-16 flex justify-end'>
                        <img className='rounded-full object-contain' src='https://i.ibb.co/YQR4dtn/Untitled-2-426x426.webp' alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full lg:pr-16'>
                        <h2 className='text-2xl pb-5'>Official certificate</h2>
                        <p className='text-gray-500 text-xl'>The goal of the two-day forum was to bring together humanities scholars, medical professionals, municipal officers, and artists whose work centers on addiction to create bridges and identify common understandings and solutions.</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Experiance;
// https://i.ibb.co/Tkt48hg/Untitled-24-426x426.jpg
// https://i.ibb.co/ZGMX0s8/Untitled-2-A-426x426.jpg
// https://i.ibb.co/YQR4dtn/Untitled-2-426x426.webp