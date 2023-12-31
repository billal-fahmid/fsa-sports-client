import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useApprovedClasses from '../../../Hooks/useApprovedClasses';
import useUsers from '../../../Hooks/useUsers';
import Swal from 'sweetalert2';
import useSelectItem from '../../../Hooks/useSelectItem';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { motion } from "framer-motion"
// import useClasses from '../../../Hooks/useClasses';

const PopularClasses = () => {

    const { user } = useAuth()
    const [status] = useUsers();
    const [selectedClasses, refetch] = useSelectItem()
    const [approvedClasses] = useApprovedClasses()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSelect = (cla) => {
        console.log(cla)

        const alreadySelected = selectedClasses.find(item => item.selectedCourse === cla._id)
        if (alreadySelected) {
            return Swal.fire('Class already Selected')
        }

        const { _id, availableSeats, image, instructorEmail, instructorName, name, price } = cla;
        const selectedItem = { selectedCourse: _id, availableSeats, image, instructorName, instructorEmail, name, price, email: user?.email }
        if (user && user.email) {
            fetch(`https://server-rouge-gamma.vercel.app/selectedclasses`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Class has been Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Please Login to select the class!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire(
                    //     'Deleted!',
                    //     'Your file has been deleted.',
                    //     'success'
                    //   )
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div className='py-20'>
            <SectionTitle title={'Our Popular Classes'} subTitle={'Unleash Your Athletic Potential with Our Popular Classes'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-10 lg:grid-cols-3 gap-6'>
                {/* {
                    approvedClasses.slice(0,6)?.map(cla => 
                    <motion.div key={cla._id} whileHover={{ scale: .8 }} whileTap={{ scale: 0.8 }}  className="card w-full bg-base-100 shadow-xl">
                      
                        <figure><img src={cla.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cla.name}</h2>
                            <p>{cla.instructorName}</p>
                            <div className='flex justify-between'>

                                <p>Seats : {cla.availableSeats}</p>
                                <p>Enrolled : {cla.enrolled}</p>
                                <p>Price : {cla.price}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleSelect(cla)} disabled={status==='admin' || status=== 'instructor' || cla.availableSeats ===0} className="btn btn-primary">Select </button>
                            </div>
                        </div>
                    </motion.div>)
                } */}
                {
                    approvedClasses.slice(0, 6)?.map(cla =>
                   
                        <div className='overflow-hidden relative bg-white rounded-md shadow hover:shadow-2xl mb-4 transition duration-200 transform hover:-translate-y-2'>
                            <img src={cla.image} alt="Class Image" className='cursor-pointer object-cover w-full' />
                            <div className='text-gray-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100 p-4 absolute inset-0 transition duration-200 flex flex-col justify-center items-center'>
                                <h2 className="font-bold text-3xl md:text-5xl pt-5">{cla.name}</h2>
                                <p>Instructor: {cla.instructorName}</p>
                                <p>Enrolled : {cla.enrolled}</p>
                                <p>Seats : {cla.availableSeats}</p>
                                <p>Price : {cla.price}</p>
                                <button onClick={() => handleSelect(cla)} disabled={status === 'admin' || status === 'instructor' || cla.availableSeats === 0} className=" text-xl bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 hover:text-gray-300 md:mt-4">Select </button>
                            </div>
                            
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default PopularClasses;