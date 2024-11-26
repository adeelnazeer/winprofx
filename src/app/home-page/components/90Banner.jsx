import React from "react";

const PartnerBanner = () => {
    return (
        <div className="inner-container mx-auto py-12 flex justify-center items-center">
            <div className="relative grid md:grid-cols-3 grid-cols-1 bg-gradient-to-b from-[#034a77] via-[#0a2642] to-[#0d1428] text-white rounded-2xl items-center justify-between w-full">
                {/* Left Content */}
                <div className=" md:col-span-2  md:p-8 px-4 py-4  w-full text-center md:text-left">
                    <h3 className="text-2xl font-medium">Become Our Partner & Earn upto</h3>
                    <h1 className="md:text-4xl text-3xl font-bold text-primary">
                        90% of the  Profit!
                    </h1>
                    <p className="text-sm mt-2"><b>100%</b> <span>customizable & tailor made plans with lucrative rewords for our <b>introducing brokers, affiliates and premium partners.</b></span></p>
                    <button className="bg-gradient-to-r mt-6 from-[#034a77] to-[#0c162b] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-transform">
                        Learn More
                    </button>
                </div>

                {/* Right 3D Text */}
                <div className=" w-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/90-img.webp"
                        alt="20% Bonus Graphic"
                        className="w-3/5 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default PartnerBanner;
