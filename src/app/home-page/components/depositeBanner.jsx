import React from "react";

const DepositBonus = () => {
    return (
        <div className="inner-container mx-auto py-12 flex justify-center items-center">
            <div className="relative grid md:grid-cols-3 grid-cols-1 bg-gradient-to-b from-[#0d1821] to-[#162f40] text-white rounded-2xl items-center justify-between w-full">
                {/* Left Content */}
                <div className=" md:col-span-2  md:p-8 px-4 py-4  w-full text-center md:text-left">
                    <h3 className="text-2xl font-medium">Boost Your Trading Success with a</h3>
                    <h1 className="md:text-4xl text-3xl font-bold text-white">
                        <span className=" text-primary">20%</span> DEPOSIT BONUS<span className="text-sm font-normal">*</span>
                    </h1>
                    <p className="text-sm mt-2">*upto $2000 | T&C Apply</p>
                    <button className="bg-gradient-to-r mt-6 rounded-3xl border font-semibold border-primary from-[#096180] to-[#0a4280] text-white py-3 px-8 hover:shadow-lg transition-transform">
                        Claim Bonus
                    </button>
                </div>

                {/* Right 3D Text */}
                <div className=" w-full flex justify-center p-2 mt-6 md:mt-0">
                    <img
                        src="/20-new.png"
                        alt="20% Bonus Graphic"
                        className="w-3/5 md:w-4/5 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default DepositBonus;
