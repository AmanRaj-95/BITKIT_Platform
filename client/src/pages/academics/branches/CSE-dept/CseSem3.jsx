import React from 'react'
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

function CseSem3() {
    return (
        <>
            <div className='min-h-screen text-center md:w-[1000px] mx-auto'>
                <h2 className='font-bold text-2xl mt-4 mb-6'>Semester 3</h2>

                <div className='dark:bg-slate-900 text-black'>

                    {/* DM*/}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Discrete Mathematics
                        </div>
                        <div className="collapse-content space-y-2">
                            <h3 className='text-red-500 text-bold'>Tips 1 - <span> Scoring Subject, focus on your Teacher's Notes</span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">

                                    <li>
                                        <strong>MODULE – I </strong><br />
                                        Mathematical logic and Mathematical Reasoning, Compound Statements, Propositional Equivalences, Predicates and Quantifiers, Methods of Proof, Mathematical Induction.
                                    </li>

                                    <li>
                                        <strong>MODULE – II </strong><br />
                                        Recurrence Relations, Classification of Recurrence Relations and their solutions by Characteristic Root method, Generating function and their various aspects, Utility of Generating function in solving Recurrence Relations.
                                    </li>

                                    <li>
                                        <strong>MODULE – III </strong><br />
                                        Set, Operations on Set, Relations, Properties/Classification of Relations, Closure operations on Relations, Matrix representation of Relations, Digraphs, Partial Ordering, Poset, Warshall's algorithm, Growth of Functions, Big O, Big Omega, Big Theta.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV </strong><br />
                                        Binary Operations, Groups, Product of Groups, Semi group, Permutation Group, Composition of Permutation, Inverse Permutation, Cyclic Permutation, Transposition, Even and Odd Permutation, Coding of Binary Information and Error Correction, Decoding and Error Correction.
                                    </li>

                                    <li>
                                        <strong>MODULE – V </strong><br />
                                        Introduction to Graph, Graph Terminologies and their Representation, Connected & Disconnected graphs, Isomorphic Graph, Euler & Hamilton graphs. Introduction to Trees, Spanning Trees, Minimum Spanning Tree.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL0s3O6GgLL5fIuvacQRK8zJ4bHycFsRhS&si=0KyYAGH-n4EPPSAz"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>last Moment Tuitions</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3&si=g6k4TDjGvfjfzdKY"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Gate Smashers</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3&si=X1N1JBZoURDPaRxt"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Neso Academy</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&si=5Dirr967UHD1ZFsX"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Dr. Gajendra Purohit</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://www.geeksforgeeks.org/discrete-mathematics-tutorial/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-file-download-line"></i>
                                                <b>gfg Notes(All In One)</b>
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/*phy*/}

                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Digital System Design
                        </div>
                        <div className="collapse-content space-y-2">

                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">

                                    <li>
                                        <strong>Module-I : Basics of Digital Electronics </strong><br />
                                        Number representation, Binary number system, Number base
                                        conversion, Octal, Hexadecimal and BCD codes, binary Arithmetic, Logic gates, Introduction to
                                        VHDL and Verilog, VHDL Models, Logic Families: TTL, ECL, and CMOS Logic Circuits, Logic
                                        levels, voltages and currents, fan-in, fan-out, speed, power dissipation. Comparison of logic
                                        families.

                                    </li>

                                    <li>
                                        <strong>Module-II : Simplification of Boolean functions </strong><br />
                                        Boolean Algebra, Basic theorems and Properties, De 
                                        Morgan’s theorem, Canonical & Standard forms, Simplification of Boolean function using 
                                        Karnaugh map, POS& SOP simplification, Prime implicant, NAND and NOR implementation.
                                    </li>

                                    <li>
                                        <strong>Module-III : Design of Combinational Circuits </strong><br />
                                        Analysis and design procedure, Parity Generators and 
                                        Checkers, Adders, Subtractors, Look ahead carry, Adder, 4-bit BCD adder/subtractor, Magnitude 
                                        comparator, Decoders, Encoders, Multiplexers, De-multiplexers, , Design of 1 bit ALU for basic 
                                        logic and arithmetic operations. 
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Design of Sequential Circuits and Memories </strong><br />
                                        Basic Latch, Flip-Flops (SR, D, JK, T and Master
                                        Slave), Triggering of Flip Flops, Synchronous and asynchronous counters, Registers, Shift 
                                        Registers, Memories and Programmable Logic design, Types of memories, Memory Expansion 
                                        and its decoding, Programmable Logic Arrays (PLA), Programmable Array Logic (PAL)
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Design of simple computing machines</strong><br />
                                        SAP-I concepts with stress on timing diagrams, 
                                        Microinstructions, Fetch and Execution cycle variable machine cycle, Hardware control Matrix, 
                                        Macroinstructions, Microprogramming , Bus concepts, Multiplexed Minimum system. Pipelining 
                                        concepts. 
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm&si=nlQjucEwNujh1dbi"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Digital Electronics - Neso Academy</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLWPirh4EWFpHk70zwYoHu87uVsCC8E2S-&si=90R9I_ZxKJORLh92"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Digital Electronics for GATE</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLgwJf8NK-2e7nYSG31YWEUfwgAp2uIOBY&si=J-yU3K_6VU7s5zfW"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Digital Electronics - Engineering Funda</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            
                                                <i className="ri-file-download-line"></i>
                                                <b className='text-blue-500'> coming soon.. </b>
                                        </li>
                                    </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*BSE*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Data Structure and Algorithms
                        </div>
                        <div className="collapse-content space-y-2">
                                <h3 className='text-red-500 text-bold'>Tips 1 - <span>Don’t take this subject lightly! It plays a big role in shaping your problem-solving(specially in placement).</span></h3>
                                <h3 className='text-red-500 text-bold'>Tips 2- <span>Important Subject for Internships & Placement.</span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong> Module-I </strong><br />
                                        Basics of Data Structures and Algorithm, Time and Space Complexity, 
                                        Asymptotic Notations, Time complexity analysis of non-recursive and recursive 
                                        algorithms, Examples of multi-dimensional array, polynomial operations and 
                                        sparse matrix.
                                    </li>

                                    <li>
                                        <strong>Module–II </strong><br />
                                        Singly Linked List : concept, representation and operations, Circular Linked 
                                        List, Doubly Linked List, Multi-ply linked list and their  Applications
                                    </li>

                                    <li>
                                        <strong>Module–III </strong><br />
                                        Stack : basic operations using Array and LL, Queue: basic operations using 
                                        Array and LL, Circular Queue and Variants of Queue, Stack and Queue 
                                        Applications 
                                    </li>

                                    <li>
                                        <strong>MODULE – IV</strong><br />
                                        Binary Search, Hash Search, Selection Sort, Insertion Sort, Quick Sort, Merge 
                                        Sort, Radix Sort, External Sorting: k-way merging approach, Analysis of Search 
                                        and Sorting Algorithms 
                                    </li>

                                    <li>
                                        <strong>MODULE – V</strong><br />
                                        Basic concepts and terminologies of Binary Search Tree, Height Balanced Trees 
                                        and Heap, Disjoint Set, Graph: concept and terminologies, Concept of Breadth 
                                        First Search, Depth First Search, Spanning Tree.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi&si=wHI1wr4yTPr-GCCT"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Data Structures and Algorithms - CodeWithHarry</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtu.be/irqbmMNs2Bo?si=EkNM4zJEyTgtBfRt"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Apna Collge</b>
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
                                                <b>Jenny's Lectures</b>
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
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/C_Complete_Notes.pdf"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-file-download-line"></i>
                                                <b>Notes - CodeWithHarry (C Language)</b>
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
                            Computer Organization and Architecture 
                        </div>
                        <div className="collapse-content space-y-2">
                        <h3 className='text-red-500 text-bold'>Tips 1 - <span>Tough subjects, always prepare before the exam, and make your own notes</span></h3>
                            <h3 className='text-red-500 text-bold'>Tips 2- <span>Do Pratice from PYQ's </span></h3>
                            <div className="text-left p-4">
                                
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : Basic Structures of Computers</strong><br />
                                        Digital Logic Concepts Revisit: Combinational Circuits, Sequential Circuits, Flip
                                        Flops, Registers, Fixed and floating point Representation and Arithmetic Operations 
                                        Basic Structure of Computers: Computer Types, Functional Units, Input Unit, 
                                        Memory Unit, Arithmetic and Logic Unit, Output Unit, Control Unit, Performance, 
                                        Evolution of Computer Architecture
                                    </li>

                                    <li>
                                        <strong>Module–II : Instruction Set Architecture and Data Path</strong><br />
                                        Instruction Set Architecture : Memory Locations and Addresses, Byte Addressability, Big-Endian and Little-Endian Representation, Word Alignment, Addressing Modes, 
                                        Assembly Language, Subroutines.
                                        Datapath: Instructions and Instruction Sequencing, Bus Concepts: Address Bus, Data 
                                        Bus and Control Bus.
                                    </li>

                                    <li>
                                        <strong>Module–III : Basic Processing Unit & Pipelining</strong><br />
                                        Basic Processing & Control Unit: ALU Design Concepts, Instruction Execution, 
                                        Instruction Fetch and Execution Steps. 
                                        Control Signals, Hardwired Control, Microprogram Control. 
                                        Pipelining: Basic Concept, Pipeline Organization, Pipelining Issues, Data 
                                        Dependencies, Memory Delays, Branch Delays, Pipeline Performance Evaluation.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Memory Organization</strong><br />
                                        Basic Memory Organization: Memory Hierarchy, Semiconductor RAM Memories, 
                                        Read-only Memories 
                                        Cache and Other Memory Organization: Cache Memories, Performance 
                                        Considerations, Virtual Memory, Technology related to Hard Disk and RAID. 
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Input Output & Parallel Processing</strong><br />
                                        Structures :
                                        Basic Input Output:  Accessing I/O Devices, Interrupts, Direct Memory Access, Bus 
                                        Arbitration. 
                                        Parallel Processing: Hardware Multithreading, Vector (SIMD) Processing, Shared
                                        Memory Multiprocessors, Cache Coherence, Multicomputers, Performance 
                                        Modeling.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL0s3O6GgLL5es3eh6-E4JVnymMqZKRAHH&si=OBawlzaMaj12DcTk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>COA Lectures - Last moment tuitions</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=fBnFVV1qZe7QGD5U"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Computer Organization and Architecture - Gate Smashers</b>
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
                                                <b>Computer Organization - TutorialsPoint</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLYwpaL_SFmcCaiXeUEjcTzHwIfJqH1qCN&si=SHe3AU_d1ph4Owmi"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Computer Organization and Architecture - 5 Minutes Engineering</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q&si=pe0XeMrxV_VRe-d3"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Computer Organization & Architecture - Neso Academy</b>
                                            </a>
                                        </li>
                                    </ul>
                                    
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://www.pw.live/exams/wp-content/uploads/2023/11/04.-Computer-organization-Architecture_.pdf"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-file-download-line"></i>
                                                <b>PW - Notes</b>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Mathematics for Computer Science*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Mathematics for Computer Science
                        </div>
                        <div className="collapse-content space-y-2">
                        
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : Functions and Logic</strong><br />
                                        Functions: Introduction, Types of Functions, Growth of Functions, Polynomials, 
                                        Operations on Polynomials. 
                                        Boolean Algebra: Logic Gates, Simplification using Karnaugh Maps.
                                    </li>

                                    <li>
                                        <strong>Module–II : Combinatorics and Probability</strong><br />
                                        Probability and Random Variables: Introduction to Counting Techniques, Random 
                                        Variables, Discrete Random Variable, Entropy Calculation, Probability Mass 
                                        Function, Continuous Random Variable, Probability Density Function, Cumulative 
                                        Distribution Function, Conditional Probability, Bayes’ Theorem, Expectation, 
                                        Probability Distributions: Discrete and Continuous, Markov Chains, Describing 
                                        Datasets, Summarizing Datasets
                                    </li>

                                    <li>
                                        <strong>Module–III : Number Theory and Foundations of Cryptography</strong><br />
                                        Introduction to Number Theory: Divisibility, The Greatest Common Divisor, 
                                        Modular Arithmetic, Prime Numbers, Multiplicative Inverses, Fermat's and Euler's 
                                        Theorem, Remainder Arithmetic, Linear and Quadratic Congruence, Discrete 
                                        Logarithms. 
                                        Finite Fields: Groups, Rings, Fields, Finite Fields of the Form GF(p), Polynomial 
                                        Arithmetic, Finite Fields of the Form GF(2^n)
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Linear Algebra and Matrices</strong><br />
                                        Vector Spaces and Matrices: Field, Vector and Vector Space (Linear Dependence 
                                        and Independence, Basis Vectors and Dimension), Hilbert Space, Orthogonality, 
                                        Norms, Matrices and Matrix Operations, Determinants, Rank and Inverse of 
                                        Matrices, Eigenvalues and Eigenvectors, Applications in PageRank and Facial 
                                        Recognition, Matrix Factorization using Eigenvalue and Eigen-Space, Eigen Value 
                                        Decomposition, Jacobian and Hessians Matrix.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Some Special Inequalities and Optimization</strong><br />
                                        Inequalities: Introduction, Chebyshev’s Inequality, Selberg's Inequality, Jensen’s 
                                        Inequality, Cauchy–Schwarz Inequality, Kraft’s Inequality. 
                                        Optimization: Lagrange Multipliers, Convex Optimization, Applications in 
                                        Machine Learning. 
                                    </li>
                                </ul>
                                <hr></hr>

                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                                <i className="ri-youtube-fill"></i>
                                                <b className='text-blue-500'> coming soon..</b>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            
                                                <i className="ri-file-download-line"></i>
                                                <b className='text-blue-500'> coming soon.. </b>
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
        </>
    ) 
}

export default CseSem3
