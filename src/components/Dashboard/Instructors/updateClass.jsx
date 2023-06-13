import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const UpdateClass = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {id} = useParams()

    const [axiosSecure] =useAxiosSecure()

    const onSubmit = (data,reset) => {
        console.log(data)

        const {name,price,availableSeats} = data;
        const updateClass = {name,price:parseFloat(price), availableSeats:parseInt(availableSeats) };

        axiosSecure.patch(`/classes/updateclass/${id}` , updateClass)
        .then(data=>{
            console.log('update database' ,data.data)
            if(data.data.matchedCount>0){
                // reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ' class Update Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

      

    };

    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center'>Add New Class</h2>
            <div>
                {/* <div className="hero min-h-screen bg-base-200"> */}


                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="card-body h-full">
                        <div className='flex lg:flex-row gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> Name of Class</span>
                                </label>
                                <input type="text" {...register("name",)} placeholder="Name" className="input input-bordered" />
                            </div>
                      
                        </div>

                     

                        <div className='flex lg:flex-row gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="text" placeholder='Available Seats' {...register("availableSeats")} className="input input-bordered" />

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" {...register("price", )} placeholder='Price' className="input input-bordered" />

                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Update Now</button>
                        </div>
                    </div>

                </form>


                {/* </div> */}
            </div>
        </div>
    );
};

export default UpdateClass;