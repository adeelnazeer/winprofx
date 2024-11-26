import React from "react";

const DepositBonus = () => {
    return (
        <div className="inner-container mx-auto py-12 flex justify-center items-center">
            <div className="relative grid md:grid-cols-3 grid-cols-1 bg-gradient-to-b from-[#034a77] via-[#0a2642] to-[#0d1428] text-white rounded-2xl items-center justify-between w-full">
                {/* Left Content */}
                <div className=" md:col-span-2  md:p-8 px-4 py-4  w-full text-center md:text-left">
                    <h3 className="text-2xl font-medium">Boost Your Trading Success with a</h3>
                    <h1 className="md:text-4xl text-3xl font-bold text-primary">
                        20% DEPOSIT BONUS<span className="text-sm font-normal">*</span>
                    </h1>
                    <p className="text-sm mt-2">*upto $2000 | T&C Apply</p>
                    <button className="bg-gradient-to-r mt-6 from-[#034a77] to-[#0c162b] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-transform">
                        Claim Bonus
                    </button>
                </div>

                {/* Right 3D Text */}
                <div className=" w-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/20-img.webp"
                        alt="20% Bonus Graphic"
                        className="w-3/5 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default DepositBonus;
