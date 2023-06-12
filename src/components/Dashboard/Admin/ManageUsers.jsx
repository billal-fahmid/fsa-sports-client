import React from 'react';
import useLoadUsers from '../../../Hooks/useLoadUsers';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageUsers = () => {
    const [users, isUsersLoading] = useLoadUsers()
    console.log(users)
    const [axiosSecure] = useAxiosSecure()

    const makeInstructor = (_id)=>{
        axiosSecure.patch(`/users/instructor/${_id}`)
        .then(data=>{
            console.log(data)
        })
    }
    const makeAdmin=()=>{

    }

    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center'>Manage All Users</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Instructor</th>
                                <th>Make Admin </th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button disabled={user.status==='instructor'} onClick={()=>makeInstructor(user._id)} className="btn btn-outline btn-success btn-sm">Instructor</button>
                                    </td>
                                    <td>
                                        <button disabled={user.status==='admin'} className="btn btn-outline btn-sm btn-warning">Admin</button>
                                    </td>
                                    <td>
                                    <button className="btn btn-outline btn-sm btn-error">X</button>

                                    </td>



                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;