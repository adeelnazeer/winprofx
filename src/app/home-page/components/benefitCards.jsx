import React from "react";

const FeaturesGrid = () => {
    const features = [
        {
            title: "Crypto Withdraw in 30 minutes",
            icon: "/new-icons/09.svg", // Replace with actual icon path
        },
        {
            title: "Trade Daily, Win Rewards",
            icon: "/new-icons/10.svg", // Replace with actual icon path
            description: "Daily trades, daily wins – fuel your success in every market move.",
        },
        {
            title: "Award Winning Customer Support",
            icon: "/new-icons/11.svg", // Replace with actual icon path
        },
        {
            title: "Negative balance Protection",
            icon: "/new-icons/12.svg", // Replace with actual icon path
        },
    ];

    return (
        <section className="pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="relative group flex cursor-pointer flex-col items-center text-center bg-gradient-to-b from-[#034a77] via-[#0a2642] to-[#0d1428] p-6 rounded-2xl text-white overflow-hidden"
                    >
                        <img src={feature.icon} alt={feature.title} className="h-20 w-20" />
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                        <div
                            className=" bottom-0 left-0 w-full opacity-0 group-hover:opacity-80 text-gray-300 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                        >
                            {feature.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesGrid;
