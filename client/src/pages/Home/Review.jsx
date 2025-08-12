import React from 'react';

const ReviewSection = () => {
    const handleClick = () => {
        window.open("https://forms.gle/zSyy1qBDRNNRJemZA", "_blank");
    };

    return (
        <section className="max-w-screen-lg container mx-auto px-4 md:px-20 mt-10">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-5 px-6 rounded-xl shadow-lg text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Have a Question ?</h2>
                <p className="text-gray-600 mb-6">
                    Let us know your feedback, queries, or bugs through the form below.
                </p>
                <button
                    onClick={handleClick}
                    className="bg-pink-500 text-white px-6 py-3 rounded-full text-md hover:bg-purple-700 transition duration-300"
                >
                    Click Here
                </button>
            </div>
        </section>
    );
};

export default ReviewSection;
