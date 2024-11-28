import React from "react";

const HowToTrade = () => {
    return (
        <section className="inner-container mx-auto text-white py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl text-white font-bold ">
                    How the <span className="text-primary"> Trade to Win </span> Program Works?
                </h2>
                <p className="text-sm gray-text mt-4">
                    The more you trade, the bigger your reward! Reach specific trading
                    volumes<br /> within 30 days to unlock exciting prizes.
                </p>
                <p className="text-white mt-4 font-medium">
                    Each reward tier can be listed with its corresponding trading volume:
                </p>
                <div>
                    <img src="/trade-img1.webp" alt="" />
                </div>

            </div>
        </section>
    );
};

export default HowToTrade;
