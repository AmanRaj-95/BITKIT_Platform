import React from 'react'
function CseSem6() {
return (
    <>
            <div className='min-h-screen text-center md:w-[1000px] mx-auto'>
                <h2 className='font-bold text-2xl mt-4 mb-6'>Semester 6</h2>
                <div className='dark:bg-slate-900 text-black'>
                    {/* Machine Learning*/}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Machine Learning
                        </div>
                        <div className="collapse-content space-y-2">
                            <h3 className='text-red-500 text-bold'>Tips - <span>Important subject for aspiring AIML students</span></h3>
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">

                                    <li>
                                        <strong>MODULE – I : Introduction to Machine Learning and Types of Data Exploration </strong><br />
                                        Need of Machine Learning, Types, challenges and applications of Machine Learning, Univariate, Bivariate and Multivariate statistics, Essential statistics for multivariate data.
                                    </li>

                                    <li>
                                        <strong>MODULE – II : Basics Learning Theory and Similarity based Learning</strong><br />
                                        Learning and its types, Computation learning theory, Design of learning system, Representation of hypothesis, hypothesis space, Bias and Variance and their Tradeoff, Model selection and model evaluation, Resampling methods, Similarity based learning, difference between instance and model-based learning, Nearest Neighbor Learning.
                                    </li>

                                    <li>
                                        <strong>MODULE – III : Prediction and Classification Techniques </strong><br />
                                        Regression Analysis, Introduction to regression, linearity, correlation and causation, 
                                        Linear Regression and its validation methods, Multiple Linear Regression, Logistic 
                                        Linear Regression, Ridge, Lasso Regression. 
                                        Decision Tree Learning Model, ID3, C4.5, CART models, Tree pruning and 
                                        Validation.
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Support Vector Machine and Ensemble Learning </strong><br />
                                        Introduction to SVM, Optimal hyperplane, Hard Margin and Soft Margin SVM, Kernels and Non-Linear SVM Introduction to Ensemble techniques, Parallel EMs: Voting, Bootstrap, Bagging, Random Forest, Incremental EM, Stacking, Sequential EM, AdaBoost.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Clustering Algorithms</strong><br />
                                        Introduction to Clustering approaches, Proximity measures, Hierarchical Clustering 
                                        algorithms, Single, Complete and Average Linkage algorithms, Mean shift clustering 
                                        algorithms, Partitional clustering algorithms, K-Means, K-Medoid, Density based 
                                        methods, DBSCAN algorithms, probability Model based methods, Fuzzy clustering.
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T&si=IisQ8ukqCs95sjBJ"
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
                                                href="https://youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ&si=B_8vA2fLUe5ENVB8"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Krish Naik Hindi</b>
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

                    {/* Introduction to Cyber Security */}

                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Introduction to Cyber Security
                        </div>
                        <div className="collapse-content space-y-2">

                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : Introduction to Cyber Security</strong><br />
                                        Computer Security: Introduction: Basic concepts and terminology in cybersecurity, 
                                        Motivation to study cybersecurity, real world examples of cyberattacks, Branches of 
                                        cybersecurity, Threats, Harm, Vulnerabilities, Controls, Authentication, Access 
                                        Control and Cryptography.
                                    </li>

                                    <li>
                                        <strong>Module-II : Cyber Attacks and Defense & Web Security </strong><br />
                                        Malware: Virus, worms, trojan horse, rootkit, zombie, bot, botnet, ransomware, Bug: 
                                        buffer overflow, integer overflow, TOCTTOU, covert channel, Security model: threat 
                                        model, trust model, trusted computing base, Security principles and countermeasures.<br></br>
                                        Web Security : Security architecture of World Wide Web, Security Architecture of Web Servers, and Web Clients Browser Attacks, Web Attacks Targeting Users: Cross Site Scripting Attacks, Cross Site Request Forgery, SQL Injection Attacks, Obtaining User or Website Data, Email Attacks, Content Security Policies (CSP) in web Session Management and User Authentication, Session Integrity.
                                    </li>

                                    <li>
                                        <strong>Module-III : Network Vulnerabilities </strong><br />
                                        Overview of vulnerability scanning, Open Port / Service Identification, Banner /Version Check, Traffic Probe, Vulnerability Probe, Vulnerability Examples, OpenVAS. Networks Vulnerability Scanning (Netcat, Socat), Network Sniffers and Injection DOS and DDOS attack, Attack on wireless Networks. 
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : Web Application and Network Defense Tools</strong><br />
                                        Scanning for web vulnerabilities tools: Nikto, W3af, HTTP utilities - Curl, OpenSSL 
                                        and Stunnel. Application Inspection tools – Zed Attack Proxy, Sqlmap, DVWA, 
                                        Webgoat. Password Cracking and Brute-Force Tools: John the Ripper, L0htcrack, 
                                        Pwdump.<br></br>
                                        Firewalls and Packet Filters: Firewall Basics, Packet Filter Vs Firewall, How a 
                                        Firewall Protects a Network, Packet Characteristic to Filter, Stateless Vs Stateful 
                                        Firewalls, Network Address Translation (NAT) and Port Forwarding, VPN: the basic 
                                        of Virtual Private Networks, Firewall: Introduction, Linux Firewall, Windows 
                                        Firewall, Snort: Intrusion Detection System.
                                    </li>

                                    <li>
                                        <strong>MODULE – V : Introduction to Cyber Crime, law and Investigation</strong><br />
                                        Cyber Crimes : Types of Cybercrime, Hacking, Attack vectors, Cyberspace and 
                                        Criminal Behavior, Clarification of Terms, Traditional Problems Associated with 
                                        Computer Crime, Introduction to Incident Response, Digital Forensics, Computer 
                                        Language, Network Language, Realms of the Cyber world. <br></br>
                                        Internet crime and Act : A Brief History of the Internet, Recognizing and Defining 
                                        Computer Crime, Contemporary Crimes, Computers as Targets, Contaminants and 
                                        Destruction of Data, Indian IT ACT 2000.  
                                    </li>

                                </ul>
                                <hr></hr>
                                <div className="mt-2 px-4">
                                    <h2 className="text-lg font-semibold mb-2"> YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                            <a
                                                href="https://youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII&si=g2Bqi9ZpPWc2VWsO"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                                <b>Neso Academy</b>
                                            </a>
                                        </li>    
                                    </ul>
                                    <hr></hr>
                                    <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                                    <ul className="list-none space-y-2 ml-1">
                                        <li>
                                                <a
                                                href="https://www.geeksforgeeks.org/cyber-security-tutorial/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-red-600 hover:underline"
                                            >
                                                <i className="ri-file-download-line"></i>
                                                <b> GFG-Cyber-Security</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Program Elective-II / (PE-II)  */}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Program Elective-II (PE-II) 
                        </div>
                        <div className="collapse-content space-y-2">
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : coming soon..</strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>Module–II : coming soon.. </strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>Module–III : coming soon.. </strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : coming soon.. </strong><br />
                                        
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
                                            
                                                <i className="ri-youtube-fill text-red-600"></i>
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

                    {/* Program Electrive III (PE-III) */}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Program Electrive III (PE-III)
                        </div>
                        <div className="collapse-content space-y-2">
                            <div className="text-left p-4">
                                <ul className="list-disc space-y-4 ml-5 text-justify">
                                    <li>
                                        <strong>Module-I : coming soon..</strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>Module–II : coming soon.. </strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>Module–III : coming soon.. </strong><br />
                                        
                                    </li>

                                    <li>
                                        <strong>MODULE – IV : coming soon.. </strong><br />
                                        
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
                                            
                                                <i className="ri-youtube-fill text-red-600"></i>
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

                    {/*Open Elective - III / MOOC - III */}
                    <div className="collapse collapse-plus bg-base-200 mt-2">
                        <input type="radio" name="outer-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                                Open Elective - III / MOOC - III 
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

export default CseSem6
