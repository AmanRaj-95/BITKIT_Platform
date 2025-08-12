import React from 'react'
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

function CseSem4() {
return (
    <>
            <div className='min-h-screen text-center md:w-[1000px] mx-auto'>
                <h2 className='font-bold text-2xl mt-4 mb-6'>Semester 4</h2>

                <div className='dark:bg-slate-900 text-black'>

                    {/* DM*/}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Database Management System (DBMS)
                        </div>
                        <div className="collapse-content space-y-2">
                            <h3 className='text-red-500 text-bold'>Tips 1 - <span> Important Subject for Internships & placement (Practice Sql Query)</span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">

                                    <li>
                                        <strong>MODULE – I : Introduction to Database and Entity-Relationship Model</strong><br />
                                        Database System Applications, File System Vs Database Systems, View of Data, 
                                        Database Languages, Transaction Management, Database architecture, Database 
                                        Users and Administrator, Types of database System, Overview of design process. 
                                        E-R model, Constraints, E–R Diagram and its components, E-R Diagram issues, 
                                        Weak Entity Sets, Extended E-R Features, Reduction to E-R Schemas to Tables.
                                    </li>

                                    <li>
                                        <strong>MODULE – II : Relational Model </strong><br />
                                        Structure of Relational Database, Codd's Rules, Fundamental Relational Algebra 
                                        Operations, Additional Relational Algebra Operations, Extended Relational Algebra 
                                        Operations. 
                                        Basic structure of SQL queries, Set Operations, Aggregate Functions, Null Values, 
                                        Nested Sub Queries, Complex Queries, views, Modification of Database, Joined 
                                        relations, Data Definition Language, SQL Data Types & Schema Definition, Integrity 
                                        Constraints, Authorization, Triggers. 
                                    </li>

                                    <li>
                                        <strong>MODULE – III : Relational Database Design</strong><br />
                                        Issues in Designing Relational Databases, Types of Anomalies, Normalization and 
                                        its Types, First normal form, Closure of a Set, Functional dependency, Finding 
                                        Candidate keys, Decomposition, Second normal form, Third normal form, BCNF, 
                                        Multivalued dependencies and Fourth normal form, Fifth Normal form. 
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Indexing, Hashing and Query Processing </strong><br />
                                        Ordered Indices, B+ Tree index files, B-Tree index files, Multiple key access Static 
                                        hashing, Dynamic Hashing. Measure of Query Cost, Selection Operation, Evaluation 
                                        of Expressions.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Transaction and Concurrency Control</strong><br />
                                        Transaction Concepts & ACID Properties, Transaction States, Implementation of 
                                        Atomicity & Durability, Concurrent Executions, Serializability & Its Testing, 
                                        Recoverability, Lock-Based protocols, Deadlock Handling.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL3R9-um41Jsw8hAUYOfNmWNjUr73H6ee0&si=3RArgoO-ikckZLda"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>DBMS - Shanu Kuttan CSE Classes</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=dbSY5yLC8KVKgs93"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>DBMS - Gate Smashers</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc&si=UW7NrVmcQWdZPbfT"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>DBMS - Jenny's Lectures</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://drive.google.com/drive/folders/1XGI3YnWEviwJ3MryCH2f7dhlN9tnYTzh"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-file-download-line"></i>
                                                <b>Apna College</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Design and Analysis of Algorithms*/}

                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Design and Analysis of Algorithms (DAA)
                        </div>
                        <div className="collapse-content space-y-2">

                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">

                                    <li>
                                        <strong>Module-I : Algorithms and Complexity</strong><br />
                                        The role of algorithms in computing, algorithm complexity and various cases using 
                                        Insertion Sort, growth of functions (asymptotic notations, standard notations and 
                                        common functions), recurrences (the substitution method, the recursion – tree method 
                                        and the master method).

                                    </li>

                                    <li>
                                        <strong>Module-II : Divide and Conquer </strong><br />
                                        Discussion of basic approach using Binary Search, Merge Sort, Quick Sort, Selection 
                                        in Expected linear time, Maximum Subarray, Matrix Multiplication, Closest – Pair 
                                        problem.
                                    </li>

                                    <li>
                                        <strong>Module-III : Greedy Approach </strong><br />
                                        The general method, Knapsack problem, Job Sequencing with Deadlines, Minimum – Cost Spanning Trees (Prim’s Algorithm, Kruskal’s Algorithm), Optimal Merge 
                                        Patterns (Huffman Codes), Single Source Shortest Paths problem (Dijkstra’s 
                                        Algorithm). 
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Dynamic Programming </strong><br />
                                        The general method, 0/1 Knapsack problem, Travelling Salesperson Problem, Single 
                                        Source Shortest Paths problem (Bellman-Ford Algorithm), All–Pairs Shortest Paths, 
                                        Longest Common Sub-Sequence, Optimal BST. 
                                    </li>

                                    <li>
                                        <strong>MODULE – V : NP Completeness and other Related Topics</strong><br />
                                        NP Completeness and the classes P and NP, Overview of showing problems to be 
                                        NP-Complete, (Decision and Optimization problems, Reductions), NP-Hard 
                                        problems, NP Completeness proofs (Max-Clique, Vertex Cover), Introduction to 
                                        Approximation Algorithms.  
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&si=l_sixVVHEEkWXAut"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Abdul Bari</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL1QH9gyQXfgs7foRxIbIH8wmJyDh5QzAm&si=k8tXavGQLA-tkPnl"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>THE GATEHUB</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&si=SDnRzLQ1l1hHWJGP"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Gate Smashers</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                                <i className="ri-file-download-line"></i>
                                                <b className='text-blue-500'> coming soon..</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Operating System*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Operating System
                        </div>
                        <div className="collapse-content space-y-2">
                                <h3 className='text-red-500 text-bold'>Tips 1 - <span>Important Subject for Internships & Placement.</span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong> Module-I : Introduction to Operating System </strong><br />
                                        Introduction, Computer System Organization and Architecture, Operating System 
                                        Operations, 
                                        Resource Management, Security and Protection, Virtualization, Distributed System, 
                                        Operating System Services, User and Operating System Interface
                                    </li>

                                    <li>
                                        <strong>Module–II : Process Management</strong><br />
                                        Process and Threads: Process Concept, Process Scheduling, Operations on 
                                        Process, Interprocess Communication, Thread 
                                        Overview, Multicore Programming, Multithreading Models.CPU Scheduling: Basic Concepts, Scheduling criteria, Scheduling Algorithms, 
                                        Thread Scheduling, Multi-Processor Scheduling, Algorithm Evaluation  
                                    </li>

                                    <li>
                                        <strong>Module–III : Process Synchronization and Deadlocks</strong><br />
                                        Process Synchronization: Background, Critical Section Problem Peterson 
                                        Solution, Hardware Support 
                                        for Synchronization, Mutex locks, Semaphore, Monitors, Classical problems of 
                                        Synchronization 
                                        Deadlock: Deadlock Characterization, Methods for Handling Deadlock, Deadlock 
                                        Prevention, Deadlock Avoidance, Deadlock Detection, Recovery from Deadlock  
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Main Memory</strong><br />
                                        Background, Contiguous Memory Allocation, Paging, Structure of 
                                        the Page Table, 
                                        Swapping, Segmentation 
                                        Virtual Memory : Background, Demand paging, Copy-on-write, Page 
                                        Replacement, Allocation of Frames, Thrashing
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Storage and File Management </strong><br />
                                        Storage Management : HDD Scheduling, Swap Space Management, RAID 
                                        Structures 
                                        File Management : File Concepts, Access Methods, Directory structure, Protection, 
                                        File- system Implementation, Allocation Methods and Free Space Management.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=YPRG8fxX1K9-xFx3"
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
                                                href="https://youtube.com/playlist?list=PL0s3O6GgLL5csKdIeV-Z7fZXohZUMAAsG&si=sLXQu2pSD0CxoyGg"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Last Moment Tuitions</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD&si=eMiQ06UB4Hz7RNVE"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>KnowledgeGATE by Sanchit Sir</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://www.gatevidyalay.com/operating-system/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-file-download-line"></i>
                                                <b>Gate Vidyalay(Practice)</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*FLAT*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Formal Language and Automata Theory
                        </div>
                        <div className="collapse-content space-y-2">
                        <h3 className='text-red-500 text-bold'>Tips 1 - <span>Tough subjects, always prepare before the exam, and make your own notes</span></h3>
                            <h3 className='text-red-500 text-bold'>Tips 2- <span>Do Pratice from PYQ's </span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I  </strong><br />
                                        Introduction to Automata (mathematical model of digital devices 
                                        including real computer) for computation, State Transition Graph, Finite  Automaton 
                                        (FA)   and    its    types,   Deterministic   Finite  Automaton (DFA),  Non-deterministic 
                                        Finite   Automaton (NDFA), Complement, Union, Intersection of  FA’s , Conversion
                                        Strategy  from   NDFA  to   DFA , Minimization  of   FA,  Finite   Automaton with Output, Applications of  FA
                                    </li>

                                    <li>
                                        <strong>Module–II : REGULAR EXPRESSION </strong><br />
                                        R.E.’s    and  basic operations,   
                                        Algebraic  laws  on  Regular Expression,  Finite   and  Infinite Languages, 
                                        Equivalence of finite Automaton and regular expressions,  Constructing   NDFA   
                                        from  Regular  Expression ,   Pumping  Lemma  for   Regular   Language,  Closure 
                                        properties of  Regular Languages,  Non-regular languages, Applications   of  Regular  
                                        Expression.
                                    </li>

                                    <li>
                                        <strong>Module–III </strong><br />
                                        Introduction,  Formal   Definition   of   Grammar, The  Chomsky   
                                        Hierarchy of Grammar,  Designing  Regular grammar  from  DFA, Context Free 
                                        Grammar, Closure  properties  of  Context Free Languages,  CFG  and Normal form: 
                                        Chomsky Normal Form, Greibach  Normal Form, Non-Context Free Language, 
                                        Applications of CFGs.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : PUSHDOWN AUTOMATON (PDA)</strong><br />
                                        Introduction,   Definition of 
                                        PDA, Types of Pushdown Automata (DPDA and NPDA),  Converting CFG to PDA,  
                                        Derivation (Parsing),  Parsing Techniques,  Ambiguous  and  Unambiguous 
                                        Grammar, Demerits of Ambiguous  Grammar.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : TURING MACHINE(TM)</strong><br />
                                        Single Tape TM,   Variations of TM, 
                                        Halting  Problem, Turing Machine and Languages, Enumerable Languages, 
                                        Decidable, Undecidable languages,  Introduction to classes  of  Problems: P, NP, NP
                                        C and NP-Hard.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL1QH9gyQXfgsUBfYUR0WirJASgif4pHVX&si=bNqasaCOFiDJ9M4T"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>THE GATEHUB</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&si=J4u1npyxx61yTN5R"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Gate Smashers</b>
                                            </a>
                                        </li>
                                    </ul>
                                    
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <i className="ri-file-download-line"></i>
                                            <b className='text-blue-500'> coming soon..</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*NM*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Numerical Methods
                        </div>
                        <div className="collapse-content space-y-2">
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : ERRORS AND NONLINEAR EQUATIONS </strong><br />
                                        Types and sources of errors, Propagation of errors. 
                                        Bisection method, Regula-Falsi method, Secant method, Newton-Raphson method 
                                        and its variants, General Iterative method.
                                    </li>

                                    <li>
                                        <strong>Module–II : SYSTEM OF LINEAR EQUATIONS </strong><br />
                                        Gaussian Elimination, Gauss-Jordan, LU Decomposition (Crout’s method), Gauss
                                        Jacobi and Gauss-Siedel methods to solve linear system of equations. 
                                    </li>

                                    <li>
                                        <strong>Module–III : INTERPOLATION</strong><br />
                                        Lagrange’s interpolation, Newton’s divided differences interpolation formulas, 
                                        Interpolating polynomial using Newton forward and backward differences.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : DIFFERENTIATION AND INTEGRATION </strong><br />
                                        Differentiation using interpolation formulas, Integration using Newton-Cotes 
                                        formulas: Trapezoidal rule, Simpson’s one-third and three-eighth rules.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : SOLUTION OF ORDINARY DIFFERENTIAL EQUATIONS </strong><br />
                                        Euler’s method, modified Euler’s method, Runge-Kutta Methods of second and 
                                        fourth order to solve initial value problems.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLhSp9OSVmeyKQu9bO27NN_2wIyiHUX2-f&si=nV3CA3JTdSv5kqW7"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>MKS TUTORIALS by Manoj Sir</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr></hr>
                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <i className="ri-file-download-line"></i>
                                            <b className='text-blue-500'> coming soon..</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Open Elective - I /MOOC - I */}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                                Open Elective - I / MOOC - I
                        </div>
                        <div className="collapse-content space-y-2">
                            <h3 className='text-red-500 text-bold mb-1'>Tips - <span> For Better Grade - Choose MOOC(NPTEL)</span></h3>
                            Easy Subject under MOOC(choose one that is available)
                            <div>
                                <ul className='text-left list-disc pl-5 md:flex justify-evenly'>
                                    <li className='text-blue-500'> Education for Sustainable Development</li>
                                    <li className='text-blue-500'> Psychology of Learning</li>
                                    <li className='text-blue-500'> Conservation Economics</li>
                                </ul>
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

export default CseSem4
