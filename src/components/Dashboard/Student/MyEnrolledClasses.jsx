import React from 'react';
import useEnrolled from '../../../Hooks/useEnrolled';

const MyEnrolledClasses = () => {
    const [enrolledClasses] = useEnrolled()
    // console.log(enrolledClasses)
    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center mb-10'>Enrolled Classes</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolledClasses?.map((cla, i) => <tr className="hover">
                                <th>{i +1}</th>
                                <td>{cla.name}</td>
                                <td>{cla.instructorName}</td>
                                <td>$ {cla.price}</td>
                            </tr>)
                            }
                            
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;