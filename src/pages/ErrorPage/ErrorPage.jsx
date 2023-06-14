import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div className="flex items-center justify-center w-full h-screen">
                <div className="px-4 lg:py-4">
                    <div className=" ">
                        <div className="flex flex-col items-center  justify-center ">
                            <img
                                src="https://i.ibb.co/6R76FvR/3747371.jpg"
                                alt="img"
                                className="md:w-1/2 md:h-1/2"
                            />
                            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                                <span className="text-red-500">Oops!</span> Page{" "}
                                {error?.statusText}
                            </p>
                            <p className="mb-8 text-center text-gray-500 md:text-lg">
                                {error ? error.data : 'The page you’re looking for doesn’t exist.'}

                            </p>
                            <Link
                                to="/"
                                className="px-5 py-2 rounded-md text-blue-100 bg-purple-600 hover:bg-purple-700"
                            >
                                Go home
                            </Link>
                        </div>
                        {/* <div className="mt-4">
                            <img
                                src="https://i.ibb.co/6R76FvR/3747371.jpg"
                                alt="img"
                                className="object-cover w-full h-full"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;