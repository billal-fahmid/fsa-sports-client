import React from 'react';
import useSelectItem from '../../../Hooks/useSelectItem';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const SelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectItem();

    console.log(selectedClasses)

    const total = selectedClasses.reduce((sum, cla) => cla.price + sum , 0)

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedclasses/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className='w-full h-full p-10'>
            <div className='mb-10 flex items-center justify-between'>
                <h2 className='text-3xl font-semibold text-violet-600 '>Your Selected Classes </h2>
                <h2 className='text-orange-600 text-2xl font-bold'>Total : $ {total }</h2>
            </div>
            <div className="overflow-x-auto ">
                <table className="table h-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name of Class</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses?.map((item, index) => <tr key={item._id} className="hover">
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.instructorName}</td>
                                <td>$ {item.price}</td>
                                <td><button onClick={()=>handleDelete(item._id)} className="btn btn-outline btn-sm btn-warning">X</button></td>
                                <td> <Link to='/dashboard/payment' className="btn btn-outline btn-sm btn-info">Pay Now</Link></td>


                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;