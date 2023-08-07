import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

const Teastimonials = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('https://server-rouge-gamma.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    console.log(reviews)


    return (
        <div className='py-20'>
            <SectionTitle title={'Testimonials'} subTitle={'What others say about us'}></SectionTitle>
            <div className='mt-10 mb-10'>

                <div class="lg:grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
                  {
                    reviews.map(review=>  <div class="p-4 text-gray-800 rounded-lg shadow-md ">
                    <div class="mb-2">
                        <p class="mb-2 text-center text-gray-600 ">
                            {review.review}
                        </p>
                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <img src={review.img} alt="img"
                                    class="object-cover object-center w-full h-full" />
                            </div>
                            <h5 class="font-bold text-indigo-600">{review.name}</h5>
                            <p class="text-sm text-gray-600">{review.profession}</p>
                        </div>
                    </div>
                </div>)
                  }
                   
                </div>
            </div>
        </div>
    );
};

export default Teastimonials;