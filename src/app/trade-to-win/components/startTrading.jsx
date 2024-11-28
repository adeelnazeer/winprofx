import React from "react";

const StartTradingCTA = () => {
    return (
        <section className="inner-container border-b border-b-[#416782] mx-auto text-white pb-12 text-center">
            <h2 className="md:text-3xl text-2xl text-white font-bold mb-2">Start Trading & <span className="text-primary"> Win Big!</span></h2>
            <p className="text-lg italic mb-8">
                Sign up today and start your journey to amazing rewards with WinproFX.
            </p>
            <button className="rounded-3xl border font-semibold border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] text-sm shadow-lg text-white py-2 px-10 hover:scale-105 transition-transform">
                Sign Up Now
            </button>
        </section>
    );
};

export default StartTradingCTA;
