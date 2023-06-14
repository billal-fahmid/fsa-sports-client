import React from 'react';
import useInstructor from '../../../../Hooks/useInstructor';
import SectionTitle from '../../../../components/SectionTitle';
import { motion } from "framer-motion"

const PupularInstructor = () => {

    const [instructors] = useInstructor()
    console.log(instructors)

    return (
        <div className='py-20'>
        <SectionTitle title={'Our Popular Instructor'} subTitle={'Unleash Your Athletic Potential with Our Popular instructor'}></SectionTitle>

        <div className='grid grid-cols-1 md:grid-cols-2 pt-10 lg:grid-cols-3 gap-6'>
            {
                instructors.slice(0,6)?.map(instructor => <motion.div whileHover={{ scale: .8 }} whileTap={{ scale: 0.8 }} className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={instructor?.image} alt="Not Available" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p>{instructor.email}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">See Class</button>
                        </div>
                    </div>
                </motion.div>)
            }
        </div>

    </div>
    );
};

export default PupularInstructor;