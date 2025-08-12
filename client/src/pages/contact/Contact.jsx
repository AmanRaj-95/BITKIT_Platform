import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const contacts = [
    { name: 'Erp Bit Mesra', value: '8085145490' },
    { name: 'Bit Ambulance Number', value: '6512276009' },
    { name: 'Bit Transport-1', value: '6512275777' },
    { name: 'Helpline Transport', value: '7890123456' },
    { name: 'Admission Office', value: '9608305224' },
    { name: 'Academic Office', value: '9608305224' },
    { name: 'Auto-Cab 1', value: '9608305224' },
    { name: 'Auto-Cab 2', value: '9608305224' },  
    { name: 'BIT Mesra', value: 'BIT Mesra, Ranchi, Jharkhand', isAddress: true }
];

function Contact() {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    // SVG icons
    const phoneIcon = (
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884l3.1-.65a1 1 0 0 1 1.165.518l1.516 3.032a1 1 0 0 1-.228 1.17l-1.2 1.2a11.037 11.037 0 0 0 5.292 5.292l1.2-1.2a1 1 0 0 1 1.17-.228l3.032 1.516a1 1 0 0 1 .518 1.165l-.65 3.1a1 1 0 0 1-.97.756C6.136 20 0 13.864 0 6.854a1 1 0 0 1 .756-.97z" />
        </svg>
    );

    const mapIcon = (
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0C6.134 0 3 3.134 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM5 7c0-2.761 2.239-5 5-5s5 2.239 5 5c0 2.606-3.155 6.926-5 9.293C8.155 13.926 5 9.606 5 7zm5-2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
    );

    const copyIcon = (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 012-2h6a2 2 0 012 2v2h-2V4H6v10h2v2H6a2 2 0 01-2-2V4zm10 4a2 2 0 012 2v6a2 2 0 01-2 2H10a2 2 0 01-2-2v-6a2 2 0 012-2h4zm0 2H10v6h4v-6z" />
        </svg>
    );

    

    return (
        <>
        {/* <Navbar/> */}
        <div className="min-h-screen bg-[#f6f3ff] py-12 px-4 text-center">
            <h1 className="text-4xl font-bold text-pink-500 mb-10">Contact Details</h1>
            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
                {contacts.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-center text-pink-500 text-xl font-semibold mb-2">
                            {item.isAddress ? mapIcon : phoneIcon}
                            {item.name}
                        </div>
                        <p className="text-gray-700 mb-4">{item.value}</p>
                        {!item.isAddress ? (
                            <div className="flex justify-center gap-4">
                                <a
                                    href={`tel:${item.value}`}
                                    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                                >
                                    Call
                                </a>
                                <button
                                    onClick={() => handleCopy(item.value)}
                                    className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
                                >
                                    {copyIcon} Copy
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => handleCopy(item.value)}
                                className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
                            >
                                {copyIcon} Copy
                            </button>

                            
                        )}
                    </div>
                ))}
            </div>
        </div>
        {/* <Footer/> */}
        </>
    );
}

export default Contact;
