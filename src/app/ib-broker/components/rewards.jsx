import React from "react";

const Rewards = () => {
    return (
        <div className="inner-container mx-auto text-white py-10 px-6">
            <div className="bg-gradient-to-r text-center   from-[#0d1821] via-[#122330] to-[#133d4f] max-w-3xl mx-auto p-8 rounded-2xl">
                <h2 className="text-2xl md:text-4xl text-primary font-bold">
                    IB LOYALTY REWARD PROGRAM
                </h2>
                <p className=" italic md:text-lg text-base mb-8">Earn More with <b>WinproFX!</b></p>

                 <div className="">
                    <img className=" mx-auto" src="/reward-img.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Rewards;
