import React from 'react';

const faqData = [
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        question: 'Lorem ipsum dolor sit amet',
        answer: 'Lorem ipsum dolor sit amet',
    },
];

export const HomeSec4 = () => {
    return (
        <div className="text-left max-w-2xl mx-auto mt-8">
            <h2 className="text-3xl font-semibold mb-4">FAQ's</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="border p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                        <p className="text-gray-600">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};




