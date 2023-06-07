import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

const PopularClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('/public/classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log(classes);

    return (
        <div>
            <SectionTitle title={'Our Popular Classes'} subTitle={'Unleash Your Athletic Potential with Our Popular Classes'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    classes.map(cla => <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;