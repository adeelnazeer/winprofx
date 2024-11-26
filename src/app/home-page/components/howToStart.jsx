import React from "react";

const Card = ({ title, para, icon }) => {
    return (
        <div className="relative">
            <div className="bg-gradient-to-b from-[#034a77] via-[#0a2642] to-[#0d1428] p-6 rounded-2xl">
                <div className="flex items-center justify-center mb-4">
                    <img src={icon} alt="Open an Account" className="h-12" />
                </div>
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm gray-text">
                    {para}
                </p>
            </div>
        </div>
    )
}

const HowToStart = () => {
    return (
        <section className="inner-container mx-auto border-b border-b-[#3e4353] text-white py-16">
            <div className="text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    How Can You Start<br /> <span className="text-primary">Making Money With Us</span>
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card title="Open an Account" para="Click the button below and just follow some easy steps." icon="/new-icons/02.svg" />
                    <Card title="Make a Deposit" para=" Pro Tip: USDT Deposits and Withdrawals are the fastest." icon="/new-icons/03.svg" />
                    <Card title="Start Trading" para="Every professional started from scratch. So start trading now." icon="/new-icons/04.svg" />
                </div>

                {/* Button */}
                <div className="mt-10">
                    <button className="bg-gradient-to-r from-[#034a77] to-[#0c162b] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-transform">
                        Open an Account
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowToStart;
