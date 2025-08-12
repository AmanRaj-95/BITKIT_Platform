import React from 'react'
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

function CseSem5() {
return (
        <>
            <div className='min-h-screen text-center md:w-[1000px] mx-auto'>
                <h2 className='font-bold text-2xl mt-4 mb-6'>Semester 5</h2>

                <div className='dark:bg-slate-900 text-black'>

                    {/* Compiler Design */}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Compiler Design
                        </div>
                        <div className="collapse-content space-y-2">
                            <h3 className='text-red-500 text-bold'>Tip1 - <span>💀💀 Tough subject, finish early 💀💀</span></h3>
                            <h3 className='text-red-500 text-bold'>Tip2 - <span> Practice from PYQ's </span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">

                                    <li>
                                        <strong>MODULE – I </strong><br />
                                        Introduction to Compilers and  its Cousins, Structure of a Compiler.,  
                                        Lexical Analyzer,  Input  Buffering,  Specification  and  Recognition  of  Tokens. 
                                        Construction of Deterministic Finite Automata directly from regular expression.
                                    </li>

                                    <li>
                                        <strong>MODULE – II </strong><br />
                                        Introduction  to  Syntax  Analysis.  Grammar rewriting transformations 
                                        for parsing methods.  Recursive  and  Non-Recursive  Top-Down  Parsers,  design of 
                                        LL(1) parser.  Bottom-up  Parsers:  Variants of LR Parsers, handling of conflicts. 
                                        Detection and reporting of syntax errors. 
                                    </li>

                                    <li>
                                        <strong>MODULE – III </strong><br />
                                        Introduction to Semantic analysis.  Syntax-Directed Definition (SDD) 
                                        and Syntax-Directed Translation Schemes (SDTS). SDTS for declaration processing. 
                                        Three  Address  Code. Concepts of types of attributes for semantic analysis. Type 
                                        checking for expressions and generation of intermediate code for assignment 
                                        statement. Translation of multi-dimensional array references. 
                                    </li>

                                    <li>
                                        <strong>MODULE – IV </strong><br />
                                        Complete and Partial Evaluation of Boolean expressions and 
                                        Translation of control flow constructs.  Resolution of forward and backward jumps 
                                        in the intermediate code. Translation of function call and return, Memory layout of 
                                        code and data, Activation record for implementation of function calls.
                                    </li>

                                    <li>
                                        <strong>MODULE – V </strong><br />
                                        Addresses of code and  data in assembly code and correlate with the 
                                        same in source code. Construction of Basic  Blocks and Control Flow Graph. 
                                        Illustration of  Machine  Independent  Local and Global Optimizations, unreachable 
                                        code, constant folding, constant propagation, loop invariant code motion, elimination 
                                        of common expressions, removal of dead code. 
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr&si=K1KGGuZ2uEpRSjXz"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>The GateHub</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLIB7RoaCD0OwYD-BgcfJC-CGjzBitzJ9T&si=tFeCca9QhI-FoKmd"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>One Night Prep</b>
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

                    {/* Data Mining Concepts and Techniques */}

                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Data Mining Concepts and Techniques(DMCT)
                        </div>
                        <div className="collapse-content space-y-2">

                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : Data Mining</strong><br />
                                        Introduction, Relational Databases, Data Warehouses, Transactional 
                            databases, Advanced database Systems and Application, Data Mining 
                            Functionalities, Classification of Data Mining Systems, Major Issues in Data 
                            Mining.Getting to Know Your: Data, Data Objects and Attribute Types , Basic Statistical 
                            Descriptions of Data , Data Visualization, Measuring Data Similarity and 
                            Dissimilarity.
                                    </li>

                                    <li>
                                        <strong>Module-II : Data Processing </strong><br />
                                        Data Cleaning, Data Integration and Transformation, Data 
                                        Reduction, Data Discretization and Concept Hierarchy Generation.
                                    </li>

                                    <li>
                                        <strong>Module-III : Data Warehouse </strong><br />
                                        Basic Concepts, DataWarehouse Modeling: Data Cube and OLAP, DataWarehouse Design and Usage, DataWarehouse Implementation, Data Generalization by Attribute-Oriented Induction, Data Cube Computation: Preliminary Concepts.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV </strong><br />
                                        Mining Frequent Patterns, Associations, and Correlations: Basic Concepts, Frequent 
                                        Itemset Mining Methods, Apriori Algorithm, A Pattern-Growth Approach, 
                                        Interesting Pattern Evaluation Methods.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Advanced Pattern Mining</strong><br />
                                        Pattern Mining: A Road Map, Pattern Mining in 
                                        Multilevel, Multidimensional Space, Constraint-Based Frequent Pattern Mining, 
                                        Mining High-Dimensional Data and Colossal Patterns, Mining Compressed or 
                                        Approximate Patterns, Pattern Exploration and Application.   
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2"> YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PL0s3O6GgLL5fuVR545mzIuCkgGLi02fkN&si=CWdu4Gc-jm2Bw9p3"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Last moment tuitions</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLYwpaL_SFmcChP0xiW3KK9elNuhfCLVVi&si=ss6Hzztq5cJf0J0p"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>5 Minutes Engineering</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLV8vIYTIdSnb4H0JvSTt3PyCNFGGlO78u&si=TCewn38sUG6w7ZSS"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b> Easy Engineering Classes</b>
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

                    {/* Data Communication & Computer Networks */}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Data Communication & Computer Networks 
                        </div>
                        <div className="collapse-content space-y-2">
                                <h3 className='text-red-500 text-bold'>Tips 1 - <span>Important Subject for Internships & Placement.</span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong> Module-I : Data Communications and Networking Overview </strong><br />
                                        A Communications Model, Data Communications, Networks, Internet, OSI, TCP/IP Protocol Architecture, Standards and Protocol Layers, Internet Applications, Data Transmission Concepts and Terminology, Analog and Digital Data Transmission, Transmission Impairments, Channel Capacity.
                                    </li>

                                    <li>
                                        <strong>Module–II : Transmission Media and Signal Encoding Techniques</strong><br />
                                        Guided Transmission Mediums, Wireless Transmission and Propagation, Digital Signaling and Analog Signaling, Encoding Techniques, Modulation Techniques.  
                                    </li>

                                    <li>
                                        <strong>Module–III : Error Handling, Data Link Control Protocols and Multiplexing </strong><br />
                                        Types of Errors, Error Detection and Correction Techniques, Flow Control, Error Control, High-Level Data Link Control (HDLC), Frequency Division Multiplexing, Time Division Multiplexing. 
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Wide Area Networks and Local Area Networks</strong><br />
                                        Switching Network, CircuitSwitching Networks, Circuit-Switching Concepts, Packet-Switching Principles, Principles of Cellular Networks, Cellular Network Generations, Topologies, LAN Protocol Architecture, Virtual LANs.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Ethernet, Wireless LAN Overview and Internetworking </strong><br />
                                        Traditional and HighSpeed Ethernet, IEEE 802.11, Internet Protocol, IP Addressing, Transport Protocols,Routing in Packet Switching Networks, Routing Protocols (Distance Vector, Link State, Path Vector), Congestion Control, Traffic Management, SMTP, DNS, HTTP, DHCP.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&si=u4GgQNbs35AOnSpq"
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
                                    </ul>
                                    <hr></hr>

                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://www.geeksforgeeks.org/computer-network-tutorials/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-file-download-line"></i>
                                                <b>GFG-Resources</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://drive.google.com/drive/folders/1XGI3YnWEviwJ3MryCH2f7dhlN9tnYTzh"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Apna College(Computer Networking for Placement   )</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Artificial Intelligence*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Artificial Intelligence(AI)
                        </div>
                        <div className="collapse-content space-y-2">
                        <h3 className='text-red-500 text-bold'>Tips 1 - <span>Important Subject for Python Lover</span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : Preliminaries</strong><br />
                                        What is Artificial Intelligence (AI)? Evolution of AI, Intelligent Agents, Concept of rationality, Nature of environments, Structure of agents, Applications of AI.
                                    </li>

                                    <li>
                                        <strong>Module–II : Problem Solving by Search Agent </strong><br />
                                        Search based problem solving, State space search, Heuristic search, Local search, Search in complex environments, Game tree search.
                                    </li>

                                    <li>
                                        <strong>Module–III : Knowledge Representation and Reasoning</strong><br />
                                        Knowledge based agents, propositional logic, propositional logic to predicate logic, 
                                        propositional logic-based agents, First order predicate logic, Knowledge 
                                        representation in First Order Logic, Forward chaining, Backward chaining, Inference by Resolution.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Planning and Probabilistic Reasoning </strong><br />
                                        Planning in AI, Components of a planning problem, Types of planning in AI, Goal 
                                        stack planning, Reasoning under uncertainty, Bayesian Inference, Probabilistic 
                                        reasoning.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Learning</strong><br />
                                        What is learning? Rote learning, Learning by taking advice, Learning from examples: 
                                        Induction, Formal learning theory, Neural net learning,  Underfitting and Overfitting.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&si=eBy-a24XXKGkRK0G"
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
                                                href="https://youtube.com/playlist?list=PL4gu8xQu0_5JrWjrWNMmXNx4zFwRrpqCR&si=TQLXf1oIUjhf4-1F"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Mahesh Huddar</b>
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
                    
                    {/*Program Elective-I (PE-I)*/}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Program Elective-I(PE-I)
                        </div>
                        <div className="collapse-content space-y-2">
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : coming soon..</strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>Module–II :  coming soon..</strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>Module–III : coming soon..</strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : coming soon..</strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>MODULE – V : coming soon..</strong><br />
                                        
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                                <i className="ri-youtube-fill"></i>
                                                <b> coming soon..</b>
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

                    {/*Open Elective - II / MOOC - II */}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                                Open Elective - II / MOOC - II
                        </div>
                        <div className="collapse-content space-y-2">
                            <h3 className='text-red-500 text-bold mb-1'>Tips - <span> For Better Grade - Choose MOOC(NPTEL)</span></h3>
                            Easy Subject under MOOC (choose one that is available)
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

export default CseSem5;
