import React from "react";
import { UserIcon } from '@heroicons/react/24/outline';
import { CiMail } from 'react-icons/ci';
import { BsGrid } from "react-icons/bs";


const ActivateBonusForm = () => {
    return (
        <div className="inner-container mx-auto md:py-16 py-8 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl text-center font-bold text-white mb-10">
                Ready To Activate Your <span className="text-[#00b4d8]"> Bonus?</span><br /> Apply now!
            </h2>

            <div className=' relative max-w-3xl w-full'>
                <div className="bg-white relative text-gray-700 rounded-3xl shadow-lg md:p-8 p-6 max-w-3xl mx-auto">
                    {/* <form> */}
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className='relative'>
                            <UserIcon className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="First Name"
                            />
                        </div>
                        <div className=' relative'>
                            <UserIcon className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div className="grid relative grid-cols-1 gap-6 mb-6">
                        <CiMail className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                        <input
                            type="email"
                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Email"
                        />
                    </div>
                    <div className="grid relative grid-cols-1 gap-6 mb-6">
                        <BsGrid className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                        <input
                            type="text"
                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Trading account number"
                        />
                    </div>
                    <div className="text-center">
                        <button className="bg-gradient-to-r min-w-52 font-semibold rounded-3xl border border-primary from-[#096180] to-[#0a4280] text-sm shadow-lg text-white py-3 px-10 hover:scale-105 transition-transform">
                            Submit
                        </button>
                    </div>
                </div>

            </div>
            <div className="md:mt-14 mt-8 max-w-2xl w-full text-center">
                <p className="text-white font-semibold mb-8">Terms & Conditions Apply</p>
                <div className="flex justify-center gap-3 md:flex-row flex-col px-6 py-3 rounded-2xl bg-gradient-to-r from-[#133d4f] via-[#122330] to-[#0d1821]  items-center md:space-x-12">
                    <div className="text-sm text-white font-normal">
                        Offer Ends on 31st December, 2024
                    </div>
                    <button
                        className="rounded-3xl border font-semibold border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] text-white text-sm py-1 px-6 shadow-lg transition"
                    >
                        OPEN TO REVIEW T&C
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivateBonusForm;
