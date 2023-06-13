import React from 'react';
import useLoadUsers from '../../../Hooks/useLoadUsers';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const ManageUsers = () => {
    const {user} =useAuth();
    const [users, isUsersLoading, refetch] = useLoadUsers()
    console.log(users)
    const [axiosSecure] = useAxiosSecure()

    const makeInstructor = (user) => {
        if(user.status === 'admin' || user.status === 'instructor'){
            return Swal.fire(`Already ${user.name} is an ${user.status}`)
        }
        Swal.fire({
            title: 'Are you sure?',
            text: `you want ${user.displayName} an Instructor!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/instructor/${user._id}`)
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'create!',
                                `${user.displayName} Now is an Instructor`,
                                'success'
                            )
                        }
                    })
               
            }
        })

    }
    const makeAdmin = (user) => {
        if(user.status === 'admin' || user.status === 'instructor'){
            return Swal.fire(`Already ${user.name} is an ${user.status}`)
        }
        Swal.fire({
            title: 'Are you sure?',
            text: `you want ${user.displayName} is an Admin!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'create!',
                                `${user.displayName} Now is an Admin`,
                                'success'
                            )
                        }
                    })
               
            }
        })
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
                                        <button disabled={user.status === 'instructor'} onClick={() => makeInstructor(user)} className="btn btn-outline btn-success btn-sm">Instructor</button>
                                    </td>
                                    <td>
                                        <button disabled={user.status === 'admin'} onClick={()=>makeAdmin(user)} className="btn btn-outline btn-sm btn-warning">Admin</button>
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