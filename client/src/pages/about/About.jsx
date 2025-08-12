import React from 'react';
// import Footer from '../Footer';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
function About() {
    return (
        <>
        {/* <Navbar/> */}
        <div className="min-h-screen px-4 py-12 md:px-20 lg:px-32 bg-white dark:bg-gray-900 text-black dark:text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
            <p className="text-lg mb-4">
                Welcome to <span className='text-pink-600'>BiTKiT</span> We are a team of passionate developers and students from BIT Mesra, working towards making academic resources easily accessible for everyone, while also providing a centralized space for skill development, tech updates, career preparation, and collaborative student initiatives.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">🎯 Our Mission</h2>
            <p className="text-base mb-4">
                To provide a centralized educational platform, Connect with your peers & seniors, Buy & sell platform for Students who want to sell/buy items, Clubs & communities , & much more.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">🚀 What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Semester-wise subject Resources</li>
                <li>Subject-wise curated YouTube links</li>
                <li>Notes Available</li>
                <li>Best Books Recommended</li>
                <li>Previous year question papers(i.e Navigate to BIT-Archive)</li>
                <li>Buy & Sell for Students to sell/buy their goodies</li>
                <li>Connect with your peers & Seniors throught our new added features - Connect</li>
                <li>AI - Chatbot features fully curated on BIT Mesra domain specific</li>
                <li>Useful Contact/Phone Number</li>
                <li>Clubs & Communities of BIT Mesra</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-3">👥 Our Team</h2>
            <p className="text-base mb-4">
                This project is built by tech-enthusiasts aiming to support the student community. We believe in open knowledge sharing and continuous improvement.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Faculty-Incharge : Dr. Shashank Pushkar ( BIT Mesra - CSE Department )</li>
                <li>VIPUL KUMAR ( K22 ) - Working Area - Connect (Interact with peers & Seniors) & User Login etc</li>
                <li>RAVI RAM ( K22 ) - Working Area - Buy & Sell (With Full Functionality)</li>
                <li>DEEP KUMAR ( K22 ) - Working Area - Academics, HomePage,Clubs & Communities, User Interface</li>
                <li>ANKON RISHAV HALDAR ( K22 ) - Working Area - Academics, HomePage, Clubs & Communities, Sports</li>
                <li>AMAN RAJ ( K22 ) -Working Area - ChatBot (Bit Mesra Domain Specific)</li>
                
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-3">📫 Contact</h2>
            <p className="text-base">
                For feedback, suggestions, Bugs or collaborations, feel free to <a href="https://forms.gle/zSyy1qBDRNNRJemZA" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Contact us</a>.
            </p>
        </div>
        {/* <Footer/> */}
        </>
    );
}

export default About;
