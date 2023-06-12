import React from 'react';
import useMyClasses from '../../../Hooks/useMyClasses';


const MyClass = () => {

    const [myClasses, refetch, isLoading] = useMyClasses()

    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center'>Your Classes</h2>
            <div>

                <div className="overflow-x-auto overflow-scroll">
                    <table className="table h-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Instructor Info</th>
                                <th>Status</th>
                                <th>Total Enrolled</th>
                                <th>Update</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses?.map((myCla, index) => <tr className=''>
                                    <td>{index + 1}</td>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myCla.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{myCla.name}</div>
                                              
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {myCla.instructorName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{myCla.instructorEmail}</span>
                                    </td>
                                    <td className={`${myCla?.status == 'pending' ? "badge badge-secondary mt-6":''}`}>{myCla.status}</td>
                                    <td >{myCla.enrolled}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Edit</button>
                                    </th>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">See</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;