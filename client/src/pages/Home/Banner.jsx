import React from "react";

function Banner() {
    return (
        <div className="relative min-h-screen w-full px-4 md:px-12 py-8 bg-cover bg-center dark:text-white md:ml-0">
            
            <div className="absolute top-8 left-4 md:left-12 bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-xl p-4 shadow-lg max-w-xs md:max-w-xl">
                <h2 className="md:text-4xl font-bold text-gray-700 dark:text-white">
                    Welcome to <span className="text-pink-500">BiTKiT <i className="fa-brands fa-studiovinari fa-xl"></i></span>
                </h2>
                <div className="text-xs md:text-lg mt-1 dark:text-gray-200">
                    Your one-stop platform <br />
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2 text-sm md:text-base mt-2">
                    <li>📚 Access all Academic resources </li>
                    <li>🤝 Connect with your College peer & seniors</li>
                    <li>🛒 Buy & Sell books, cycles, and essentials within campus</li>
                    <li>🎯 Explore clubs, events & campus opportunities</li>
                    <li>🌱 Learn, grow & thrive — all in one place</li>
                    </ul>
                </div>
            </div>
        </div>
    ); 
}

export default Banner;
