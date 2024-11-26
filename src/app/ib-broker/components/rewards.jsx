import React from "react";

const Rewards = () => {
    return (
        <div className="inner-container mx-auto text-white py-10 px-6">
            <div className="bg-gradient-to-l text-center   from-[#034a77] via-[#0a2642] to-[#0d1428] max-w-3xl mx-auto p-8 rounded-2xl">
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
