import React from 'react';
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        // <div className='bg-gray-200 text-black '>
        //     <footer className="footer p-10  text-base-content">
        //         <div className='text-black font-bold'>
        //             <img className='h-12 w-12' src="https://i.ibb.co/2S7T24F/download.jpg" alt="" />
        //             <p>FSA SPORTS <br />Providing Fun With learn since 1992</p>
        //         </div>
        //         <div className='text-black font-semibold'>
        //             <span className="text-xl font-bold text-blue-600">Contact Us:</span>
        //             <a className="link link-hover">Email: info@fsa-sports.com</a>
        //             <a className="link link-hover">Phone: +1-123-456-7890</a>
        //             <a className="link link-hover">Address: 123 Main Street, City, new Yeok, ZIP
        //             </a>

        //         </div>
        //         <div className='text-black font-semibold'>
        //             <span className="text-xl font-bold text-blue-600">Our Services:</span>
        //             <a className="link link-hover">Facility and Equipment</a>
        //             <a className="link link-hover">Training Programs</a>
        //             <a className="link link-hover">Fitness Training
        //             </a>
        //             <a className="link link-hover">Sports Camps and Clinics
        //             </a>
        //         </div>
        //         <div>
        //             <span className="text-xl font-bold text-blue-600">Social</span>
        //             <div className="grid grid-flow-col gap-4">

        //                 <a className='text-blue-500' href='https://twitter.com/BillalH54359607' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>

        //                 <a className='text-red-500' href='https://www.youtube.com/watch?v=YJ33MEHRcpI&ab_channel=LearnColorsTV' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>

        //                 <a className='text-blue-700' href='https://www.facebook.com/fahmidhasansohag.395/' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        //             </div>
        //             <div className="form-control w-full">
        //                 <label className="label">
        //                     <span className="text-black font-semibold">Sent Email</span>
        //                 </label>
        //                 <label className="input-group">

        //                     <input type="text" placeholder="info@site.com" className="input w-3/4 input-bordered" />
        //                 </label>
        //             </div>
        //         </div>
        //     </footer>

        // </div>
        <div className='bg-gradient-to-t from-blue-800 to-blue-300 text-white'>
            <footer className="footer p-10 text-base-content">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    <div className='text-center md:text-left'>
                        <img className='h-12 w-12 mx-auto md:mx-0' src="https://i.ibb.co/2S7T24F/download.jpg" alt="FSA Sports Logo" />
                        <p className='font-bold text-xl mt-2'>FSA SPORTS</p>
                        <p className='text-sm'>Providing Fun With Learning since 1992</p>
                    </div>
                    <div>
                        <span className="font-bold text-xl text-blue-200 block mb-4">Contact Us:</span>
                        <a className="link link-hover block mb-2" href="mailto:info@fsa-sports.com">Email: info@fsa-sports.com</a>
                        <a className="link link-hover block mb-2" href="tel:+1-123-456-7890">Phone: +1-123-456-7890</a>
                        <p className="link link-hover block mb-2">Address: 123 Main Street, City, New York, ZIP</p>
                    </div>
                    <div>
                        <span className="font-bold text-xl text-blue-200 block mb-4">Quick Links:</span>
                        <a className="link link-hover block mb-2" href="#">Membership</a>
                        <a className="link link-hover block mb-2" href="#">FAQs</a>
                        <a className="link link-hover block mb-2" href="#">Privacy Policy</a>
                        <a className="link link-hover block mb-2" href="#">Terms of Use</a>
                    </div>
                    <div>
                        <span className="font-bold text-xl text-blue-200 block mb-4">Latest News:</span>
                        <p className='mb-4'>
                            Stay updated with the latest trends in sports and fitness! Check out our blog for insightful articles.
                        </p>
                     
                    </div>
                </div>
                <div className=' text-center'>
                    <span className="font-bold text-xl text-blue-200 block mb-4">Connect with Us:</span>
                    <div className="grid grid-flow-col gap-4 justify-center md:justify-start">
                        <a className='text-blue-200 hover:text-blue-100' href='https://twitter.com/FSA_Sports' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a className='text-red-200 hover:text-red-100' href='https://www.youtube.com/user/FSA_Sports' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a className='text-blue-300 hover:text-blue-200' href='https://www.facebook.com/FSA_Sports' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="mt-8">
                        <div className="form-control w-full">
                            <label className="label text-white font-bold">
                                <span className="block mb-2">Send Us an Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" placeholder="info@fsa-sports.com" className="input input-bordered w-full" />
                                <button className="btn btn-primary ml-2">Send</button>
                            </label>
                        </div>
                    </div>
                </div>
            </footer>
        </div>



    );
};

export default Footer;