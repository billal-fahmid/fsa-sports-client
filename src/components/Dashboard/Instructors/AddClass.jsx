import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddClass = () => {

    const { user } = useAuth()

    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_Token}`

    const onSubmit = (data,reset) => {
        console.log(data)
        const formData =new FormData();
        formData.append('image' , data.image[0])

        fetch(image_hosting_url, {
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imageData =>{
            console.log(imageData)
            if(imageData.success){
                const imgURL = imageData.data.display_url;
                const {name,price,instructorName,instructorEmail,availableSeats} = data;
                const newClass = {name,price:parseFloat(price), availableSeats:parseInt(availableSeats) ,image:imgURL,instructorName,instructorEmail,status:'pending',enrolled:0 ,feedback:'no feedback'};

                axiosSecure.post('/classes' , newClass)
                .then(data=>{
                    console.log('add database' ,data)
                    if(data.data.insertedId){
                        // reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
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
                                <input type="text" {...register("name", { required: true })}  placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} placeholder="Image" className="input" />

                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" {...register("instructorName", { required: true })} value={user?.displayName} className="input input-bordered" />

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="text" {...register("instructorEmail", { required: true })} value={user?.email} className="input input-bordered" />

                            </div>
                        </div>

                        <div className='flex lg:flex-row gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="text" placeholder='Available Seats' {...register("availableSeats", { required: true })} className="input input-bordered" />

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" {...register("price", { required: true })} placeholder='Price' className="input input-bordered" />

                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Now</button>
                        </div>
                    </div>

                </form>


                {/* </div> */}
            </div>
        </div>
    );
};

export default AddClass;