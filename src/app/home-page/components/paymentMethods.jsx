'use client'
import React from "react";
import Marquee from "react-fast-marquee";

const EffortlessFundFlow = () => {
    const paymentMethods = [
        { id: 1, src: "/new-icons/24.svg", alt: "MasterCard" },
        { id: 2, src: "/new-icons/25.svg", alt: "Visa" },
        { id: 3, src: "/new-icons/26.svg", alt: "Bitcoin" },
        { id: 4, src: "/new-icons/27.svg", alt: "Ethereum" },
        { id: 5, src: "/new-icons/28.svg", alt: "Tether" },
        { id: 6, src: "/new-icons/29.svg", alt: "Bank Transfer" },
    ];

    return (
        <div className="inner-container mx-auto py-10  text-white flex justify-center items-center">
            <div className="w-full text-center">
                {/* Heading Section */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="text-primary">Effortless Fund Flow:</span> Swift Deposits<br /> and Seamless Withdrawals
                </h2>
                <p className="text-sm font-normal md:text-base mb-8">
                    Experience financial fluidity with our hassle-free deposit and withdrawal processes,<br />
                    ensuring your transactions are both quick and convenient.
                </p>

                {/* Marquee Section */}
                <div className="mt-10">
                    <Marquee gradient={false} speed={40} pauseOnHover={true}>
                        {paymentMethods.map((method) => (
                            <div
                                key={method.id}
                                className="flex justify-center items-center mx-6"
                            >
                                <img
                                    src={method.src}
                                    alt={method.alt}
                                    className="h-20 sm:h-20 object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default EffortlessFundFlow;
