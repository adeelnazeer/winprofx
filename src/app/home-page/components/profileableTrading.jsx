import React from "react";

const ProfitableTrading = () => {
    return (
        <div className="text-white md:py-12 py-4 inner-container mx-auto border-b border-b-[#3e4353] flex justify-center items-center">
            <div className="text-center w-full max-w-3xl relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Your Path To <span className="text-primary">Profitable Trading</span><br/> Starts Here
                </h2>
                <p className="text-sm  mb-8">
                    At WinproFX, we offer a secure online trading platform, fostering sustainability through expertise, market knowledge, and trusted partnerships.
                </p>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-white mb-8">
                    <div className="flex items-center gap-2">
                        <span className="text-[#0499bf] text-lg">✔</span>
                        <p className="text-sm">Best platform for Every Class of Traders Beginners, intermediate or Professional.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0499bf] text-lg">✔</span>
                        <p className="text-sm">Easy to configure and customize your trading setup.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0499bf] text-lg">✔</span>
                        <p className="text-sm">Introducing more native technical indicators.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0499bf] text-lg">✔</span>
                        <p className="text-sm">Sophisticated order management tools.</p>
                    </div>
                </div>

                {/* Explore More Button */}
                <button className="bg-gradient-to-r from-[#034a77] to-[#0c162b] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-transform">
                Explore More
                </button>
            </div>
        </div>
    );
};

export default ProfitableTrading;
