import React from "react";

const InvestWithUs = () => {
    return (
        <section className="inner-container text-center mx-auto text-white py-12">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
                Invest With<br /> <span className="text-primary">Fastest Growing Broker Asia 2024</span>
            </h2>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Item 1 */}
                <div className="flex flex-col border-r border-r-[#444857] items-center">
                    <img src="/new-icons/05.svg" alt="Evolving" className="h-12 mb-1" />
                    <h3 className="text-lg font-semibold">Evolving</h3>
                    <p className="text-sm gray-text">In the Market</p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:border-r border-r-[#444857] items-center">
                    <img src="/new-icons/06.svg" alt="Awards" className="h-12 mb-1" />
                    <h3 className="text-lg font-semibold">40+</h3>
                    <p className="text-sm gray-text">Awards</p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col border-r border-r-[#444857] items-center">
                    <img src="/new-icons/07.svg" alt="Countries Covered" className="h-12 mb-1" />
                    <h3 className="text-lg font-semibold">105+</h3>
                    <p className="text-sm gray-text">Countries Covered</p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center">
                    <img src="/new-icons/08.svg" alt="Trading Accounts" className="h-12 mb-1" />
                    <h3 className="text-lg font-semibold">1M+</h3>
                    <p className="text-sm gray-text">Trading Accounts</p>
                </div>
            </div>
        </section>
    );
};

export default InvestWithUs;
