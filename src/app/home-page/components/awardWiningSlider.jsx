"use client"
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const AwardWinningExcellence = () => {
    const awards = [
        {
            title: "Best Regulated Broker",
            location: "Abu Dhabi 2024",
            image: "/slide1.webp", // Replace with your image path
        },
        {
            title: "Top Trading Platform",
            location: "Dubai 2023",
            image: "/slide2.webp", // Replace with your image path
        },
    ];

    const customArrowStyles = `
    absolute top-1/2 transform z-50 -translate-y-1/2 p-2 rounded-full transition duration-300
  `;

    const renderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`${customArrowStyles} left-4`}
            >
                <FaChevronLeft className="gray-text h-5 w-5" />
            </button>
        );

    const renderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`${customArrowStyles} right-4`}
            >
                <FaChevronRight className="gray-text h-5 w-5" />
            </button>
        );

    return (
        <div className="inner-container mx-auto py-10 text-white flex justify-center items-center">
            <div className=" w-full text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    WinproFX Broker with <br/><span className="text-primary">Award-Winning Excellence</span>
                </h2>
                <p className="text-sm mb-10">
                    The global forex industry has acknowledged WinproFX's achievements,<br />
                    honoring us with top accolades for our exceptional products and
                    services.
                </p>

                {/* Carousel Section */}
                <Carousel
                    showArrows
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    transitionTime={600}
                    className="rounded-md"
                    renderArrowPrev={renderArrowPrev}
                    renderArrowNext={renderArrowNext}
                >
                    {awards.map((award, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <div>
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-60 h-60 object-contain mx-auto mb-4"
                                />
                            </div>
                            <div class="flex items-center mx-11 justify-center h-32">
                                <div class="w-[1px] h-full bg-[#3e4353]"></div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{award.title}</h3>
                                <p className="text-sm text-gray-300">{award.location}</p>
                                <button className="bg-gradient-to-r mt-8 from-[#034a77] to-[#0c162b] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-transform">
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default AwardWinningExcellence;
