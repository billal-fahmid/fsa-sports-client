import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const AddClass = () => {

    const { user } = useAuth()

    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center'>Add New Class</h2>
            <div>
                {/* <div className="hero min-h-screen bg-base-200"> */}


                <div className="card-body h-full">
                    <div className='flex lg:flex-row gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Name of Class</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" placeholder="Image" className="input" />

                        </div>
                    </div>

                    <div className='flex gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" value={user?.displayName} className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" value={user?.email} className="input input-bordered" />

                        </div>
                    </div>

                    <div className='flex lg:flex-row gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="text" placeholder='Available Seats' className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder='Price' className="input input-bordered" />

                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>


                {/* </div> */}
            </div>
        </div>
    );
};

export default AddClass;