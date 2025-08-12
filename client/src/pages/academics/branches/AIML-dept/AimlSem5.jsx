import React from 'react';
function AimlSem5() {
return (
        <>
            <div className='min-h-screen text-center md:w-[1000px] mx-auto'>
                <h2 className='font-bold text-2xl mt-4 mb-6'>Semester 5</h2>

                <div className='dark:bg-slate-900 text-black'>

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

                    {/* Basics of Supervised Learning */}

                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Data Mining Concepts and Techniques(DMCT)
                        </div>
                        <div className="collapse-content space-y-2">

                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module 1: Preliminaries</strong><br />
                                        Terminology, Regression, Classification, Weight Space, Curse of dimensionality, Overfitting,Training, testing and Validation Sets, Confusion Matrix, Accuracy Metrics, ROC Curve, Unbalanced

datasets, Precision, Probability, Naïve Bayes’ classification, Basic Statistics – Average, Variance and

Covariance, Gaussian.
                                    </li>

                                    <li>
                                        <strong>Module 2: Neural Networks, Linear Separability and Multi-Layer Perceptron </strong><br />
                                        Hebb’s rule, McCullogh and Pitts Neurons, Limitations of the basic neurons, the Perceptron, the

concept of Linear Separability, Linear Regression, The concept of Bias, Backpropagation and its

working, Practical aspects of learning – Amount of training data, number of hidden layers, when to

stop learning, Deriving the back propagation algorithm
                                    </li>

                                    <li>
                                        <strong>Module 3: Support Vector Machines </strong><br />
                                        The concept of optimal separation, Kernels and choosing the right kernel, The SVM algorithm,

Extending SVM for multi class classification, SYM regression
                                    </li>

                                    <li>
                                        <strong>Module 4: Learning with Trees </strong><br />
                                        Using decision trees, Constructing decision trees, Entropy, ID3, Dealing with continuous variables,

Computational complexity, Gini Index and CART
                                    </li>

                                    <li>
                                        <strong>Module 5: Ensemble Learning</strong><br />
                                        Concepts, Bagging, Boosting, Random Forest, Different ways to combine classifiers 
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2"> YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>CampusX</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Krish Naik Hindi</b>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.youtube.com/playlist?list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b> Gate Smashers</b>
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
                                        <strong>Module–II : coming soon..</strong><br />
                                        
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
                                                <b > coming soon..</b>
                                            
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
                            Program Elective-II(PE-II)
                        </div>
                        <div className="collapse-content space-y-2">
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : coming soon..</strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>Module–II : coming soon..</strong><br />

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

export default AimlSem5;
