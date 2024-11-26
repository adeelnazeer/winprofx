import React from "react";

const Banner = () => {
    return (
        <section className="inner-container mx-auto border-b border-b-[#3e4353] text-white pt-20 pb-10">
            <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-3">
                {/* Text Section */}
                <div className="flex flex-col md:items-start items-center text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#54c2e8]">
                        Unlock Amazing<br/> Rewards with<br/> Every Trade!
                    </h2>
                    <p className="text-base mt-2  italic">
                        Achieve specific trading volumes in<br/> 30 days and claim incredible
                        prizes!
                    </p>
                    <button className="mt-10 bg-white text-[#0b1c2d] font-semibold py-2 px-10 rounded-lg hover:bg-gray-200">
                        Join Now
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src="/trade-banner-removebg-preview.png"
                        alt="Rewards"
                        className="max-w-xs md:max-w-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
