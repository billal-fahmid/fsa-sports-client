import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Feedback = () => {
    const [axiosSecure] = useAxiosSecure();
    const {id}= useParams()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(id, data.feedbackData)
        axiosSecure.patch(`/classes/feedback?id=${id}&feedback=${data.feedbackData}`)
        .then(data=>{
            console.log(data.data)
            if(data.data.matchedCount>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback Send Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          
        })
    };

    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center mb-10'>Sent Class Feedback</h2>

            <div className='w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 mx-auto'>
                    <textarea {...register("feedbackData", { required: true })}  placeholder="Write Feedback...." className="textarea text-center textarea-bordered textarea-lg w-full " ></textarea>
                    <button type='submit' className="btn btn-block">Send Feedback</button>
                </form>
            </div>

        </div>
    );
};

export default Feedback;