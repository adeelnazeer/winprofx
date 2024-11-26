import React from "react";
import FeaturedCard from './benefitCards'

const BenefitsSection = () => {
    return (
        <div className="inner-container mx-auto">
            <section className="max-w-3xl mx-auto text-white py-12 text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Benefits of <span className="text-primary">Trading with Us</span>
                </h2>

                {/* Description */}
                <p className="0 text-sm md:text-base mb-10">
                    Discover seamless trading with us, where transparency and advanced <br />
                    technology meet for your financial success.
                </p>
                {/* Button */}
                <button className="bg-gradient-to-r from-[#034a77] to-[#0c162b] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-transform">
                    Start Trading
                </button>
                <FeaturedCard />
            </section>
        </div>
    );
};

export default BenefitsSection;
