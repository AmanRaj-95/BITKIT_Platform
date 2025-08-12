import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function FAQS() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="min-h-screen px-4 py-6 md:px-20 lg:px-32 bg-white dark:bg-gray-900 text-black dark:text-white">
                <h6 className="text-3xl font-bold mb-10 text-center">
                    Frequently Asked Questions (FAQs)
                </h6>

                <div className="max-w-2xl mx-auto space-y-4 dark:text-black">

                    {[
                        {
                            title: "What is BITKIT?",
                            content: "BITKIT is a student-led platform, developed by senior students of the K22 batch under the guidance of Dr. Shashank Pushkar. It offers academic resources, Connect with peers, community features & much more — providing all-in-one experience tailored for every BITIANS."
                        },
                        {
                            title: "Is BITKIT only for academic purposes?",
                            content: "No! BITKIT also helps you connect with peers & seniors, join clubs, buy/sell items, much more."
                        },
                        {
                            title: "Can I contribute to BITKIT?",
                            content: "Yes, You can contribute notes, Best Resource, suggest features or even join this as an Open Source. Just reach out via the contact section or email us."
                        },
                        {
                            title: "What is the Buy & Sell section for?",
                            content: "This is a trusted marketplace where students can buy or sell books, gadgets, Cycles, fashion, and college essentials."
                        },
                        {
                            title: "How does the Buy & Sell process work on BITKIT?",
                            content: "To list a product, first create an account and go to your profile section. Click “Add Product,” fill in the required details (title, description, price, images), and submit. After a quick verification, your item will be listed in the Buy & Sell section for other students to view and connect with you."
                        },
                        {
                            title: "Will BITKIT work on mobile?",
                            content: "Yes, BITKIT is designed to be fully responsive — accessible and easy to use on mobiles, tablets, and desktops."
                        },
                        {
                            title: "How does the Discussion Forum feature work on BiTKiT?",
                            content: "Connect lets juniors ask questions and get answers from seniors, with upvote/downvote options to highlight helpful responses — ideal for mentorship and peer support."
                        },
                        {
                            title: "How do I join a club or community ?",
                            content: "Each club’s card includes links to their official handles (Instagram, LinkedIn, website, etc.). You can follow their announcements or reach out via the provided links to learn about recruitment drives or events."
                        },
                        {
                            title: "Is BiTKit only for freshers or all students?",
                            content: "BiTKit is designed for all students, whether you’re a fresher exploring options, a senior looking to connect with a community, or even alumni checking out what's new on campus."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                            <div className="collapse-title text-xl font-medium">
                                {faq.title}
                            </div>
                            <div className="collapse-content">
                                <p>{faq.content}</p>
                            </div>
                        </div>
                    ))}

                    {/* Fixed nesting for the last FAQ */}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What is included in the ‘Others’ section of BiTKiT?
                        </div>
                        <div className="collapse-content">
                            <div className="space-y-2">
                                <p>The ‘Others’ section hosts features and resources beyond clubs. It includes:</p>
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    <li>🏅 <strong>Sports & Activities</strong> – Explore campus sports facilities and achievements.</li>
                                    <li>📥 <strong>Downloads</strong> – Access important campus-related documents and forms.</li>
                                    <li>📊 <strong>CGPA Calculator</strong> – Easily calculate your CGPA semester-wise.</li>
                                    <li>🎉 <strong>Bitotsav Page</strong> – Get official updates on BIT Mesra’s biggest cultural fest.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default FAQS
