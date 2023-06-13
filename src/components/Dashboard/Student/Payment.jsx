import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useSelectItem from '../../../Hooks/useSelectItem';

const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway_key);


const Payment = () => {
    const { id } = useParams()
    const [selectedClasses ] = useSelectItem()
    const payItem = selectedClasses.find(cla=> cla._id ===id)
   
    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center mb-10'>Payment Here</h2>
            <h3>payment now {id}</h3>
            <div className='bg-purple-100 p-10 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm payItem={payItem}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;