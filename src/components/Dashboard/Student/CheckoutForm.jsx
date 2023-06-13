import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
// import './CheckoutForm.css'

const CheckoutForm = ({ payItem }) => {
    const { price } = payItem;
    console.log(price)

    const { user } = useAuth();

    const stripe = useStripe();
    const elements = useElements();
    const [cartError, setCartError] = useState('')

    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');
    const [proccessing, setProccessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    const navigate = useNavigate()



    useEffect(() => {
        if (price > 0 && payItem) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', card
        })


        if (error) {
            console.log('error', error)
            setCartError(error.message)
        } else {
            setCartError('')
            console.log('payment method', paymentMethod)
        }
        setProccessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        console.log('intent', paymentIntent);

        setProccessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const { name, selectedCourse,_id, availableSeats, enrolled ,instructorName} = payItem
            const payment = {

                email: user?.email,
                transactionId: paymentIntent.id,
                name,
                instructorName,
                price,
                availableSeats,
                enrolled,
                date: new Date(),
                deletedId:_id,
                enrolledClassId: selectedCourse,
                status: 'service pending',

            
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log('from payment----',res.data)
                    if (res.data.deleteResult && res.data.insertedResult && res.data.updateClasseSeatsEnrolledFinal) {
                     return  navigate('/dashboard/selectedclasses')
                    }
                })

        }


    }

    return (
        <div className='h-full'>
            <form className='' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='mt-10'>
                    <button className='btn btn-outline btn-info btn-sm mt-10' type="submit" disabled={!stripe || !clientSecret || proccessing}>
                        Pay
                    </button>
                </div>
            </form>
            <div>
                {cartError && <p className="text-orange-400 text-2xl font-bold">{cartError}</p>}
                {transactionId && <p className="text-green-400 text-2xl font-bold">Payment Success with Transaction Id : {transactionId}</p>}

            </div>
        </div>
    );
};

export default CheckoutForm;