import React from "react";
import { UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import { BsGrid } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { AiOutlineMessage } from "react-icons/ai";


const StartJourneyForm = () => {
    return (
        <div className="inner-container mx-auto py-8 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl text-center font-bold text-white mb-10">
                <span className="text-[#00b4d8]"> Start Your Journey Towards</span><br /> Growth & Success
            </h2>

            <div className=' relative max-w-xl w-full'>
                <div className="bg-white relative text-gray-700 rounded-3xl shadow-lg md:px-8 py-4 p-6 max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 mb-4">
                        <h1 className="text-lg text-[#04456f] font-bold">Registration Form</h1>
                        <p className="text-[#04456f] font-semibold text-sm">Drop you details, we will get in touch with you soon.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
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

                    <div className="grid relative grid-cols-1 gap-6 mb-4">
                        <CiMail className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                        <input
                            type="email"
                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Email"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-4">
                        <div className=' relative'>
                            <BsGrid className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="email"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Code"
                            />
                        </div>
                        <div className='col-span-2 relative'>
                            <FiPhoneCall className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <AiOutlineMessage className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                        <textarea
                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            rows="4"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="flex items-center space-x-2 mb-4 text-gray-400">
                        {/* Checkbox */}
                        <input
                            type="checkbox"
                            id="consent"
                            className="w-4 h-4 border-gray-300 rounded focus:ring focus:ring-[#4ac8f5]"
                        />
                        {/* Label */}
                        <label htmlFor="consent" className="text-sm">
                            By submitting this form, you agree to be contacted by our team.
                        </label>
                    </div>
                    <div className="text-center">
                        <button className="bg-gradient-to-r min-w-52 font-semibold from-[#034a77] to-[#0c162b] text-sm shadow-lg text-white py-3 px-10 rounded-lg hover:scale-105 transition-transform">
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StartJourneyForm;
