import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useApprovedClasses from '../../../Hooks/useApprovedClasses';
// import useClasses from '../../../Hooks/useClasses';

const PopularClasses = () => {

    
    // const [classes, loading] = useClasses()
    const [approvedClasses] = useApprovedClasses()

 

    return (
        <div className='py-20'>
            <SectionTitle title={'Our Popular Classes'} subTitle={'Unleash Your Athletic Potential with Our Popular Classes'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-10 lg:grid-cols-3 gap-6'>
                {
                    approvedClasses?.map(cla => <div key={cla._id} className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={cla.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cla.name}</h2>
                            <p>{cla.instructorName}</p>
                            <div className='flex justify-between'>

                                <p>Seats : {cla.availableSeats}</p>
                                <p>Enrolled : {cla.enrolled}</p>
                                <p>Price : {cla.price}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Select </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;