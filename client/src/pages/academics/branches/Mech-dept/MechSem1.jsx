import React from 'react'
// import Navbar from '../../Components/Navbar'
// import Footer from '../../Components/Footer'
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

function MechSem1() {
    return (
        <>
            {/* <Navbar /> */}
            <div className='min-h-screen text-center md:w-[1000px] mx-auto'>
                <h2 className='font-bold text-2xl mt-4 mb-6'>Semester 1</h2>

                <div className='dark:bg-slate-900 text-black'>

                    {/* ✅ Mathematics-1 */}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Mathematics-1
                        </div>
                        <div className="collapse-content space-y-2">

                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">

                                    <li>
                                        <strong>MODULE – I : Sequences and Series</strong><br />
                                        Sequences, Convergence of Sequence. Series, Convergence of Series, Tests for Convergence:
                                        Comparison tests, Cauchy's Integral test, Ratio test, Cauchy's root test, Raabe's test,
                                        Gauss test, Alternating series, Leibnitz test, Absolute and Conditional Convergence.
                                    </li>

                                    <li>
                                        <strong>MODULE – II : Matrices</strong><br />
                                        Rank of a Matrix, elementary transformations. Vectors, Linear Independence and Dependence of Vectors.
                                        Consistency of system of linear equations. Eigenvalues, Eigenvectors, Cayley - Hamilton theorem.
                                    </li>

                                    <li>
                                        <strong>MODULE – III : Advanced Differential Calculus</strong><br />
                                        Function of several variables, Partial derivatives, Euler’s theorem for homogeneous functions,
                                        Total derivatives, Chain rules, Jacobians and its properties, Taylor series for function of two variables, Maxima – Minima.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Advanced Integral Calculus</strong><br />
                                        Double integrals, double integrals in polar coordinates, Change of order of integration, Triple Integrals,
                                        cylindrical and spherical coordinate systems, transformation of coordinates,
                                        Applications of double and triple integrals in areas and volumes.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Vector Calculus</strong><br />
                                        Scalar and vector point functions, gradient, directional derivative, divergence, curl.
                                        Line Integral, Work done, Conservative field, Green’s theorem in a plane,
                                        Surface and volume integrals, Gauss – divergence theorem, Stoke’s theorem.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLU6SqdYcYsfIAbLwyyWUiWJPV6qFbPC13&si=INoVJ2nsspLGOfw6"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Gajendra Purohit </b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLdM-WZokR4tagRFQHnbug8pNYugGXUx6b&si=fGmbVNec6huxNQku"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Bhagwan Singh Vishwakarma</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLg2LVpcRrOF6-vZw95tkkBxbDQ1_Dwn_Y&si=Rvahi_RIT2R8jvpF"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Education Point Online</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://drive.google.com/file/d/17bE3tq7kb-DL_dDcynSJV8kL3Dltn714/view?usp=sharing"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>2022 Notes</b>
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/*Physics*/}

                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Physics
                        </div>
                        <div className="collapse-content space-y-2">

                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">

                                    <li>
                                        <strong>Module-I : Physical Optics </strong><br />
                                        Polarization, Malus’ Law, Brewster’s Law, Double Refraction, Interference in thin films (Parallel films), Interference in wedge-shaped layers, Newton’s rings, Fraunhofer diffraction by single slit, Double slit. Elementary ideas of fibre optics and application of fibre optic cables.
                                    </li>

                                    <li>
                                        <strong>Module-II : Electromagnetic Theory </strong><br />
                                        Gradient, Divergence and Curl, Statement of Gauss theorem & Stokes theorem, Gauss’s law, Applications, Concept of electric potential, Relationship between E and V, Polarization of dielectrics, dielectric constant, Boundary conditions for E & D, Gauss’s law in magnetostatics, Ampere’s circuital law, Boundary conditions for B & H, Equation of continuity, Displacement current, Maxwell’s equations.
                                    </li>

                                    <li>
                                        <strong>Module-III : Special Theory of Relativity </strong><br />
                                        Introduction, Inertial frame of reference, Galilean transformations, Postulates, Lorentz transformations and its conclusions, Length contraction, time dilation, velocity addition, Mass change, Einstein's mass energy relation. 
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Quantum Mechanics </strong><br />
                                        Planck's theory of black-body radiation, Compton effect, Wave particle duality, De Broglie waves, Davisson and Germer's experiment, Uncertainty principle, Brief idea of Wave Packet, Wave Function and its physical interpretation, Schrodinger equation in one-dimension, free particle, particle in an infinite square well.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Modern Physics(Lasers)</strong><br />
                                        Laser-Spontaneous and stimulated emission, Einstein's A and B coefficients, Population inversion, Light amplification, Basic laser action, Ruby and He-Ne lasers, Properties and applications of laser radiation, Nuclear Physics- Binding Energy Curve, Nuclear Force, Liquid drop model, Introduction to Shell model, Applications of Nuclear Physics, Concept of Plasma Physics, and its applications.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://www.youtube.com/@TechnicalPhysics"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Technical Physics</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.youtube.com/@pankajphysicsgulati"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Pankaj Physics Gulati</b>
                                            </a>
                                        </li>
                                    </ul>

                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://drive.google.com/file/d/16Y3qHXhP6Z-bN0eVf8WHcgoT8ItzSnAQ/view?usp=sharing"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>2022 Notes</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*BSE*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Biological Science for Engineers
                        </div>
                        <div className="collapse-content space-y-2">
                                <h3 className='text-red-500 text-bold'>Tips - <span >Focus on your class notes and follow your teacher’s guidance — that’s sufficient for this subject.</span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong> Module-I : Introduction to Biological Sciences</strong><br />
                                        Overview and importance of biology in engineering, Origin of Life, Cell Theory and Structure
                                    </li>

                                    <li>
                                        <strong>Module–II : Molecular Biology and Genetics</strong><br />
                                        Central Dogma of Molecular Biology, DNA, RNA and Protein structure and function, Mendelian Genetics, rDNA Technology and Genome Editing
                                    </li>

                                    <li>
                                        <strong>Module–III : Biochemistry</strong><br />
                                        Cell Metabolism, Enzymes and Catalysis, Cell Communication and Signalling
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Applications of Biological Sciences in Engineering</strong><br />
                                        Biomaterials, Bioinformatics, Biosensors and Bioelectronics (Biological Sensors – Ear & Eye), Synthetic Biology, Nanobiotechnology
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Global Challenges and Ethical Considerations</strong><br />
                                        
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLAggmvP4R7cb910m_wa7D14LRSoW2d1V1&si=vTtlui1R0VJWTbew"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Biology for Engineers - Learning With Ram</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://drive.google.com/file/d/1ZsNDHJWKJhAbFcvHp58hyY-QqxfzS9t-/view?usp=sharing"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Notes(Mod-1)</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PPS*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Programming for Problem Solving(PPS)
                        </div>
                        <div className="collapse-content space-y-2">
                        <h3 className='text-red-500 text-bold'>Tips - <span >Don’t take this subject lightly! It plays a big role in shaping your problem-solving and coding logic</span></h3>
                            <div className="text-left p-4">
                                
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : Representation of an Algorithm</strong><br />
                                        Flowchart/Pseudocode with examples. From algorithms to programs: source code, variables and memory locations, syntax and logical errors in compilation, object and executable code.
                                    </li>

                                    <li>
                                        <strong>Module–II : Structure of a C Program</strong><br />
                                        Variables and data types, operators – precedence and associativity, evaluating expressions, basic I/O – use of printf, scanf, getchar etc. and format specifiers.
                                        Conditional Branching Statements:
                                        if, if-else, if-else-if, switch case, writing nested conditional statements.
                                    </li>

                                    <li>
                                        <strong>Module–III : Iterative Programming Structures</strong><br />
                                        for loops, while loops, do-while loops. Understanding break and continue statements and their usage.
                                        Additional Topics:
                                        Writing nested loops, arrays – creation and usage, strings and string handling.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Functions</strong><br />
                                        Including use of built-in libraries, parameter passing in functions, call by value, recursion as a different way of solving problems, nested function calls.
                                        Understanding scope and lifetime of a variable.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Structures & Pointers</strong><br />
                                        Structures :
                                        Defining structures, accessing structure elements, creating an array of structures, nested structures.
                                        Advanced Concepts:
                                        typedef, enum, macros.
                                        Pointers :
                                        Understanding, creating pointers, accessing variables using pointers.
                                        Passing Arrays to Functions:
                                        Call by reference, passing parameters to main.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtu.be/irqbmMNs2Bo?si=EkNM4zJEyTgtBfRt"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>C language - Apna Collge</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=TwfSLdy4p4E5ghMU"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Programming in C - Jenny's Lectures</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&si=D0qmT75P_1N6YjUj"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Algorithms - Abdul Bari</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR&si=-C9HzUW4ziHPusWv"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>C Language Tutorials - CodeWithHarry</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR&si=T6Pcz4QyzZBMJzuJ"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>C Programming - Neso Academy</b>
                                            </a>
                                        </li>
                                    </ul>
                                    
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://drive.google.com/drive/folders/1SEfL7Yw3nJfVLToz9MAuAm2_NoCCk1qD"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Apna college - Notes</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://harshrb2424.github.io/Jntuh-R22-Notes/public/resources/1st%20Year/PPS-All-Units.pdf"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Student - Notes</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*BEE*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Basics of Electrical Engineering
                        </div>
                        <div className="collapse-content space-y-2">
                            <h3 className='text-red-500 text-bold'>Tips 1 - <span >This subject needs time — don’t delay, finish the syllabus before End-sem.</span></h3>
                            <h3 className='text-red-500 text-bold'>Tips 2 - <span >Study this subject carefully — many students struggle or get backs in it.</span></h3>
                            
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : Introduction</strong><br />
                                        Importance of Electrical Engineering in day-to-day life, Electrical elements, properties (linear, non-linear, unilateral, bilateral, lumped and distributed, etc.) and their classification, Ideal and Real Sources, Source Conversion, Star-Delta conversion, KCL and KVL, Mesh current and Nodal voltage method.
                                    </li>

                                    <li>
                                        <strong>Module–II : D.C. Circuits & Circuit Theorems</strong><br />
                                        D.C. Circuits :
                                        Steady state analysis with independent and dependent sources; Series and Parallel circuits. <br></br>
                                        Circuit Theorems :
                                        Superposition, Thevenin’s, Norton’s, and Maximum Power Transfer theorems for Independent and Dependent Sources applied to DC circuits.
                                    </li>

                                    <li>
                                        <strong>Module–III : Single-phase AC Circuits, Series Circuits, Parallel Circuits, Series and Parallel Resonance</strong><br />
                                        Single-phase AC Circuits :
                                        Common signals and their waveforms, RMS and Average value. Form factor & Peak factor of a sinusoidal waveform.<br></br>
                                        Series Circuits :
                                        Impedance of Series circuits, Phasor diagram, Active Power, Power factor, Power triangle.<br></br>
                                        Parallel Circuits :
                                        Admittance method, Phasor diagram, Power and Power factor, Power triangle, Series-parallel Circuit, Power factor improvement, Circuit Theorems applied to AC circuits.<br></br>
                                        Series and Parallel Resonance:
                                        Resonance curve, Q–factor, Dynamic Impedance, and Bandwidth.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Three-Phase AC Circuits</strong><br />
                                        Importance and use of a 3-phase network, types of 3-phase connections - Star and Delta, Line and Phase relations for Star and Delta connection, Phasor diagrams, Power relations, analysis of balanced and unbalanced 3-phase circuits, Measurement of Power in 3-phase star and delta network.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Magnetic Circuits & Coupled Circuits</strong><br />
                                        Magnetic Circuits :
                                        Introduction, Series-parallel magnetic circuits, Analysis of Linear and Non-linear magnetic circuits, Energy storage, A.C. excitation, Eddy currents and Hysteresis losses.<br></br>
                                        Coupled Circuits :
                                        Dot rule, Self and mutual inductances, Coefficient of coupling, working of transformer.
                                    </li>
                                </ul>
                                <hr></hr>

                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&si=B77dhC1R9nohFs3p"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Basic Electrical Engineering - Engineers ki Pathshala by Umesh Dhande</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL0s3O6GgLL5cLAfoALo36QVhy1oM5NZsP&si=fJlpb7j47O4In0SL"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>BEEE - Last moment tuitions</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLDN15nk5uLiCSOqr7-rUz6-GtdTAjlvul&si=CHp8FdrSUZSMt0EO"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>ELECTRICAL ENGINEERING - BY TIKLE'S ACADEMY</b>
                                            </a>
                                        </li>

                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://drive.google.com/file/d/1c7sY3PqZDoMekZb_6qSo3rOE3jmJnd51/view"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Book for Pratice - Basic Electrical Engineering(D P Kothari & I J Nagrath) </b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" />
                        <div className="collapse-title text-xl font-medium">Previous Year Paper(PYQ's)</div>
                        <div className="collapse-content">
                            <div className="text-left p-4">
                                <span className='text-pink-500'>Note:</span> Check the official site for all previous year papers (click the given below link)
                                <div className="mt-2 px-4">
                                    <a
                                        href="https://www.bitmesra.ac.in/Other-Department-Pages/content/1/258/361"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-red-600 hover:underline"
                                    >BIT Mesra Archive Official website</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default MechSem1
