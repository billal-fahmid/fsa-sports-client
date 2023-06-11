import React, { useEffect, useState } from 'react';
import PopularClasses from '../Home/PopularClasses/PopularClasses';
import SectionTitle from '../../components/SectionTitle';
import useClasses from '../../Hooks/useClasses';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Classes = () => {

    const {user} = useAuth()

    const [classes, loading] = useClasses()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSelect = (cla) => {
        console.log(cla)
        const {_id , availableSeats,image,instructorEmail,instructorName, name,price} = cla;
        const selectedItem = {selectedCourse :_id, availableSeats,image,instructorName,instructorEmail,name, price, email:user?.email}
        if(user && user.email){
            fetch(`http://localhost:5000/selectedclasses` , {
                method:'POST',
                headers:{
                    'content-type' :'application/json'
                },
                body:JSON.stringify(selectedItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Class has been Selected',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }else{
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
                navigate('/login' ,{state:{from:location}})
                }
              })
        }
    }

    return (
        <div className='py-20'>
            <SectionTitle title={'Our Classes'} subTitle={'Unleash Your Athletic Potential with Our Popular Classes'}></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 pt-10 lg:grid-cols-3 gap-6'>
                {
                    classes.map(cla => <div key={cla._id} className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={cla.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cla.name}</h2>
                            <p>{cla.instructorName}</p>
                            <div className='flex justify-between'>
                                <p>Seats : {cla.availableSeats}</p>
                                <p>Price : {cla.price}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleSelect(cla)} className="btn btn-primary">Select </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;