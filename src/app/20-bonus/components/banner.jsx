import React from "react";

const BannerDeposit = () => {
    return (
        <div className="inner-container mx-auto text-white md:pt-32 pt-16 pb-10">
            <div className="text-center">
                <h2 className="md:text-3xl text-2xl font-bold text-white">
                    Boost Your Trading Success with a
                </h2>
                <h1 className="md:text-5xl text-3xl font-bold text-white">
                    <span className=" text-primary">20% </span> DEPOSIT BONUS*
                </h1>
                <p className="text-sm text-white mt-2 italic">*upto $2000 | T&C Apply</p>
                <div className="flex justify-center mt-10 gap-8">
                    <button className="rounded-3xl border font-semibold border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] text-sm shadow-lg text-white py-3 px-3 md:px-10 hover:scale-105 transition-transform">
                        Join Now
                    </button>
                    <button className="rounded-3xl border font-semibold border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] text-sm shadow-lg text-white py-3 px-3 md:px-10 hover:scale-105 transition-transform">
                        Claim Bonus
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerDeposit;
