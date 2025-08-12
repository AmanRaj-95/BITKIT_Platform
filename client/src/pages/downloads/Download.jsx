import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const resources = [
    {
        title: "BIT Mesra Main Building Layout",
        description: "A detailed layout of BIT Mesra’s main academic building. Useful for freshers, visitors, and event organizers.",
        tag: "Main Building Layout",
        link: "https://drive.google.com/file/d/1mL3hRi310H5KUpybwGPpmluxoaa7ITgs/view?usp=sharing",
    },
    {
        title: "Campus Layout of BIT Mesra",
        description: "Official Campus layout, you can see this Image after entering the main gate go and check it out.",
        tag: "Campus Layout",
        link: "https://drive.google.com/file/d/1qFxvwnurDyJ0aa-p6nbBW-Mt8CBUryvQ/view?usp=sharing",
    },
    {
        title: "Hostel Rules and Regulations",
        description: "Important guidelines and rules for students staying in hostels.",
        tag: "Hostel Info",
        link: "https://drive.google.com/file/d/14W9ETujHBVV8kMDQYmUCx_TS1YBGR-1f/view?usp=sharing",
    },
    {
        title: "B.Tech. in Computer Science and Engineering",
        description: "B.Tech. in CSE (2024–2025) is a 4-year CBCS course, NBA accredited till 2025, with structure CSCS2425 and syllabus CSSL2425.",
        tag: "Course & Syllabus",
        link: "https://bitmesra.ac.in/Courses/admincse/DeptFiles/NEP6e3d0f83c0d24ff097141ed18832768d_BTECH-CSE-NEP%20CourseStructure2024-25.pdf",
    },
    {
        title: "B.Tech. in Artificial Intelligence and Machine Learning",
        description: "B.Tech. in AI & ML (2024–2025) is a 4-year CBCS course, NBA accredited till 2025, with structure AICS2425 and syllabus AISL2425.",
        tag: "Course & Syllabus",
        link: "https://bitmesra.ac.in/Courses/admincse/DeptFiles/NEPa2111ecdeb574b709785e287fecb8be9_BTECH-AI-ML-NEP%20CourseStructure%202024-25.pdf",
    },
    {
        title: "BIT Mesra Bus Timetable",
        description: "Official bus timetable for BIT Mesra (Students/Staffs/Teachers) , including routes and timings for various locations.",
        tag: "Bus Timetable",
        link: "https://drive.google.com/file/d/1Tk5YfFfe_Cn3BKLVtoigJSaX3KFvTO0t/view?usp=sharing",
    },
    {
        title: "C.G.P.A to Percentage Conversion Formula",
        description: "Formula to convert C.G.P.A to Percentage for Students of BIT Mesra.",
        tag: "Academic Info",
        link: "https://drive.google.com/file/d/1_ZS3o3AhLCgLxwBv80XWdJocFFmCqprY/view?usp=sharing",
    },
];

function Download() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <Navbar /> */}

            <main className="flex-grow px-4 py-8 sm:px-8 bg-slate-800 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {resources.map((res, index) => (
                        <div
                            key={index}
                            className="bg-white text-black rounded-xl shadow-md w-full sm:w-72 md:w-80 overflow-hidden transition hover:shadow-xl">

                            <div className="p-4 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                                        alt="PDF"
                                        className="w-10 h-10"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold">{res.title}</h2>
                                        <p className="text-xs text-gray-500">PDF Resource • {res.tag}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 mb-4">{res.description}</p>

                                <div className="mt-auto">
                                    <a
                                        href={res.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm btn-primary w-full"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* <Footer /> */}
        </div>
    );
}

export default Download;
