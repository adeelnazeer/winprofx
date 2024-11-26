"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const NewsCarousel = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen width is mobile size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const newsItems = [
        {
            title: "WinproFX Announces Milestone in...",
            description:
                "Dubai, United Arab Emirates--- (Newsfile Corp. - December 5, 2023) - WinproFX, an...",
            readTime: "1 minute to read",
            date: "10/08/2024",
            source: "YahooFinance",
        },
        {
            title: "WinproFX Launches New Initiative...",
            description:
                "WinproFX is excited to announce its latest developments in providing superior...",
            readTime: "2 minutes to read",
            date: "09/25/2024",
            source: "BusinessWire",
        },
        {
            title: "Market Trends with WinproFX...",
            description:
                "Stay ahead of the market with WinproFX's expert insights and financial strategies...",
            readTime: "3 minutes to read",
            date: "11/01/2024",
            source: "Reuters",
        },
    ];

    return (
        <div className="inner-container border-b border-b-[#3e4353] mx-auto py-10 text-white flex justify-center items-center">
            <div className="w-full text-center">
                {/* Heading Section */}
                <h2 className="text-3xl font-bold text-left mb-4">News & Insights</h2>
                <p className="text-sm text-left font-normal mb-10">
                    Stay informed with our latest market updates and expert insights,
                    empowering you to<br /> make well-informed decisions in the world of
                    finance.
                </p>

                {/* Carousel Section */}
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    emulateTouch
                    swipeable
                    showIndicators={false}
                    showArrows={isMobile} // Show arrows on mobile
                    autoPlay={!isMobile} // AutoPlay for non-mobile
                    centerMode={!isMobile} // Disable center mode on mobile
                    centerSlidePercentage={isMobile ? 100 : 33} // Full width on mobile
                    className="new-carusal"
                    interval={5000}
                    transitionTime={600}
                >
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 mx-2 bg-gradient-to-r text-left from-[#0d1428] via-[#0a2642] to-[#034a77]  rounded-2xl"
                        >
                            <h3 className="text-sm gray-text">{item.source}</h3>
                            <h4 className="text-2xl font-bold mt-1 text-primary">{item.title}</h4>
                            <p className="text-xs gray-text ">{item.readTime}</p>
                            <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                            <p className="text-xs gray-text mt-4">{item.date}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default NewsCarousel;
