import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    console.log(classes)
    const [axiosSecure] = useAxiosSecure()

    const handleApproved=(_id)=>{
        axiosSecure.patch(`/classes/approved/${_id}`)
        .then(data=>{
            console.log('approved----',data.data)
            if(data.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Approved Success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
            
        })
    }

    const handleDenied=(_id)=>{
        axiosSecure.patch(`/classes/denied/${_id}`)
        .then(data=>{
            console.log('approved----',data.data)
            if(data.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Denied Success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
            
        })
    }

    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center'>Manage All Classes</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Instructor INFO</th>
                                <th>Price</th>
                                <th>Available Seats</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes?.map((cla, index) => <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cla.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cla.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {cla.instructorName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{cla.instructorEmail}</span>
                                    </td>
                                    <td>
                                        <div className="badge badge-secondary">$ {cla.price}</div>

                                    </td>
                                    <td>
                                        <div className="badge badge-warning">{cla.availableSeats}</div>

                                    </td>
                                    <td>
                                        {cla.status && <div className="badge badge-accent">{cla.status}</div>}
                                    </td>
                                    <th>
                                        <div className="btn-group btn-group-vertical gap-1">
                                            <button onClick={()=>handleApproved(cla._id)} className="btn btn-xs">Approved</button>
                                            <button onClick={()=>handleDenied(cla._id)} className="btn btn-xs">Denied</button>
                                            <button className="btn btn-xs"> Feedback</button>
                                        </div>
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

export default ManageClasses;