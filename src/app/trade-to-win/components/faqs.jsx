'use client'
import { useState } from "react";

const faqs = [
    {
        question: "Who is eligible for this promotion?",
        answer:
            "Only self-directed retail clients can participate in the campaign. IBs and managed accounts are excluded.",
    },
    {
        question: "How do I track my trading volume?",
        answer:
            "Only self-directed retail clients can participate in the campaign. IBs and managed accounts are excluded.",
    },
    {
        question: "Can I withdraw during the campaign?",
        answer:
            "Only self-directed retail clients can participate in the campaign. IBs and managed accounts are excluded.",
    },

];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="inner-container text-white mx-auto py-12">
            <h2 className="md:text-3xl text-center text-2xl font-bold mb-10">FAQ Section</h2>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border-b border-b-[#416782] pb-4 ${activeIndex === index ? "border-primary" : ""}`}
                    >
                        <button
                            className="w-full text-left flex items-center justify-between text-white font-bold text-sm "
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{`${faq.question}`}</span>
                        </button>
                        {activeIndex === index && (
                            <p className="mt-4 text-sm font-thin text-[#d9e2e8]">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
