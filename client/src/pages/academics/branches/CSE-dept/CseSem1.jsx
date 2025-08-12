import React from 'react'
// import Navbar from '../../Components/Navbar'
// import Footer from '../../Components/Footer'
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';


function CseSem1() {
  return (
    <>
      {/* <Navbar /> */}
      <div className='min-h-screen text-center md:w-[1000px] mx-auto'>
        <h2 className='font-bold text-2xl mt-4 mb-6'>Semester 1</h2>

        <div className='dark:bg-slate-900 text-black'>

          {/* ✅ Mathematics-1  */}
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
                        <i className="ri-file-download-line"></i>
                        <b>2022 Notes</b>
                      </a>
                    </li>
                  </ul>

                </div>

              </div>

            </div>
          </div>

          {/*Basic Electronics*/}

          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="radio" name="outer-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Basic Electronics
            </div>
            <div className="collapse-content space-y-2">
              <h3 className='text-red-500 text-bold'>Tips 1 - <span >Study this subject carefully — many students struggle or get backs in it.</span></h3>
              <div className="text-left p-4">
                <ul className="list-disc space-y-4 ml-5 text-justify">

                  <li>
                    <strong>Module-I : Diodes and Applications</strong><br />
                    Introduction to semiconductor materials, PN junction diode, barrier potential, depletion layer width, junction capacitance, diode current equation, I-V plot, diode-resistance, temperature dependence, breakdown mechanisms, Zener diode – operation and applications, Diode as a Rectifier: Half Wave and Full Wave Rectifiers with and without C-Filters.
                  </li>

                  <li>
                    <strong>Module-II : Bipolar Junction Transistors (BJT)</strong><br />
                    Basic operation of PNP and NPN Transistors, Input and Output Characteristics of CB, CE and CC Configurations. Transistor biasing: operating point, Fixed bias, emitter bias, voltage divider bias, stability factor, small signal analysis (h-parameter model) of CE configuration.
                  </li>

                  <li>
                    <strong>Module-III : Field Effect Transistors</strong><br />
                    JFET: Principle of operation, transfer characteristics, MOSFET: Operation of N-MOS, P-MOS, enhancement and depletion type, transfer characteristics, CS biasing of JFET and MOSFET.
                  </li>

                  <li>
                    <strong>MODULE – IV : Operational Amplifiers</strong><br />
                    Introduction of Operational Amplifier, Characteristics of Operational Amplifier, Differential Amplifier, CMRR, Slew Rate, input and output offset voltages, Inverting and non-inverting amplifiers, Summing Amplifier, Difference amplifier, Differentiator and Integrator.
                  </li>

                  <li>
                    <strong>MODULE – V : Boolean Algebra and Logic Gates</strong><br />
                    Boolean Algebra, Boolean operators, Truth table of different digital logic gates (AND, OR, NOT, NAND, NOR, EXOR, EX-NOR), application of diode for design of logic gates, realization of logic gates using universal gates, adder, subtractor.
                  </li>

                </ul>
                <hr></hr>
                <div className="mt-2 px-4">
                  <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>Neso Academy(Analog Electronics)</b>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>Neso Academy(Digital Electronics)</b>
                      </a>
                    </li>
                  </ul>

                  <hr></hr>

                  <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <a
                        href="https://www.tutorialspoint.com/basic_electronics/index.htm"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <i className="ri-file-download-line"></i>
                        <b>Tutorial Point</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*BME*/}
          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="radio" name="outer-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Basic of Mechanical Engineering
            </div>
            <div className="collapse-content space-y-2">

              <div className="text-left p-4">
                <ul className="list-disc space-y-4 ml-5 text-justify">
                  <li>
                    <strong> Module-I : System of Forces and Structure Mechanics</strong><br />
                    Addition of Forces, Moment of a Force, Couple, Varignon’s theorem, Free Body Diagram, Equilibrium in Two and Three Dimensions, Equivalent Forces and Moment.
                    Types of Plane Trusses, Analysis of Plane Trusses by: Method of Joints and Method of Sections.
                    Hooke’s Law of elasticity, Stress and Strain, Relation between elastic constants.
                  </li>

                  <li>
                    <strong>Module–II : Kinematics & Kinetics of rigid bodies</strong><br />
                    Types of rigid body motion – translation, rotation about fixed axis, equations defining the rotation of a rigid body about a fixed axis, plane motion, absolute and relative velocity in plane motion, instantaneous center of rotation.
                    Equation of motion and D’Alembert’s principle.
                  </li>

                  <li>
                    <strong>Module–III : Friction </strong><br />
                    Interfacial Friction
                    (a) Laws of dry friction, static & kinetic co-efficient of friction, Analysis of static, kinetic and rolling friction.
                    (b) Analysis of frictional forces in inclined planes, wedges, screw jacks and belt drives.
                  </li>

                  <li>
                    <strong>MODULE – IV : Boilers and Internal Combustion Engine</strong><br />
                    Classification of Boilers, Fire tube and Water Tube boilers. Boiler Mountings and Accessories. Boiler efficiency.
                    Classification of IC Engines.
                    Basic components and terminology of IC engines, working principle of four stroke and two stroke – petrol and diesel engine.
                  </li>

                  <li>
                    <strong>MODULE – V : Non-Conventional Energy Sources</strong><br />
                    Renewable and Non-renewable Energy Resources, Advantages and Disadvantages of Renewable Resources, Renewable Energy Forms and Conversion – Solar Energy, Wind Energy, Hydro Energy.
                  </li>

                </ul>
                <hr></hr>
                <div className="mt-2 px-4">
                  <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=PL0s3O6GgLL5cTyibHXZEBFD4zQeR_HrGG"
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
                        href="https://www.youtube.com/playlist?list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>ENGINEERING MECHANICS - BY TIKLE'S ACADEMY</b>
                      </a>
                    </li>
                  </ul>

                  <hr></hr>

                  <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <i className="ri-file-download-line"></i>
                      <b className='text-blue-500'> Make Your Own Class Notes</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*EVS*/}
          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="radio" name="outer-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Environmental Sciences
            </div>
            <div className="collapse-content space-y-2">
              <h3 className='text-red-500 text-bold'>Tips 1 - <span >Scoring & Easy Subject.</span></h3>
              <div className="text-left p-4">
                <ul className="list-disc space-y-4 ml-5 text-justify">
                  <li>
                    <strong>Module-I : Ecosystem and Environment</strong><br />
                    Concepts of Ecology and Environmental science, ecosystem: structure, function and services, Biogeochemical cycles, energy and nutrient flow, ecosystem management. Concept of Biodiversity.
                  </li>

                  <li>
                    <strong>Module–II : Air Pollution</strong><br />
                    Structure and composition of unpolluted atmosphere, classification of air pollution sources, types of air pollutants, effects of air pollution, monitoring of air pollution, Air pollution control and management.
                  </li>

                  <li>
                    <strong>Module–III : Water Pollution</strong><br />
                    Water Resource; Water Pollution: types and Sources of Pollutants; effects of water pollution; Water quality monitoring, Water quality index, water and wastewater treatment: primary, secondary and tertiary.
                  </li>

                  <li>
                    <strong>MODULE – IV : Soil Pollution and Solid Waste Management</strong><br />
                    Soil profile, soil properties, soil pollution, Municipal solid waste management. MSW – Functional elements of MSW
                  </li>

                  <li>
                    <strong>MODULE – V : Noise pollution</strong><br />
                    Noise pollution: introduction, sources, outdoor and indoor noise propagation, Effects of noise on health, criteria noise standards and limit values, Noise measurement techniques, prevention and control of noise pollution.
                  </li>

                </ul>
                <hr></hr>
                <div className="mt-2 px-4">
                  <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>Environmental Science- Gautam Varde</b>
                      </a>
                    </li>
                  </ul>
                  <hr></hr>

                  <h2 className="text-lg font-semibold mt-2"> NOTES - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <a
                        href="https://drive.google.com/drive/u/3/folders/1rC0oDsmG74RAMXLUNfnb3PhkdqT8SdnD"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <i className="ri-file-download-line"></i>
                        <b>Notes ( 2022 )</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*Chemistry*/}
          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="radio" name="outer-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Chemistry
            </div>
            <div className="collapse-content space-y-2">

              <div className="text-left p-4">
                <ul className="list-disc space-y-4 ml-5 text-justify">
                  <li>
                    <strong>Module-I : Bonding in Coordination Complex</strong><br />
                    Introduction to Chemical Bonding, Werner's Theory, Bonding in coordination complexes, Crystal Field Theory, Octahedral, Tetrahedral and Square planar complexes, CFSE, Jahn Teller theorem, Spectral, electronic and magnetic properties of coordination complexes.
                  </li>

                  <li>
                    <strong>Module–II : Organic Structure and Reactivity</strong><br />
                    Aromaticity, Geometrical isomerism: cis–trans, E/Z, and syn-anti isomerism; Optical isomerism & Chirality; Wedge, Fischer, Newmann and Sawhorse projection formulae and interconversions; D/L, R/S nomenclature system; Conformational studies of n-butane.
                    Addition, Elimination, Substitution and Rearrangement reaction.
                  </li>

                  <li>
                    <strong>Module–III : Kinetics and Catalysis</strong><br />
                    Kinetics of Chain, Parallel/Competing/Side, Consecutive reactions; Fast reactions; Outline of Catalysis, Acid-base catalysis, Enzyme catalysis (Michaelis–Menten equation), Important catalysts in industrial processes: Hydrogenation using Wilkinson’s catalyst, Phase transfer catalyst.
                  </li>

                  <li>
                    <strong>MODULE – IV : Spectroscopic Techniques</strong><br />
                    Absorption Spectroscopy, Lambert-Beer’s law, Principles and applications of UV-Visible spectroscopy, Principles and applications of Vibrational spectroscopy; Introduction of NMR spectroscopy.
                  </li>

                  <li>
                    <strong>MODULE – V : Phase and Chemical Equilibrium</strong><br />
                    Phase rule: terms involved, Phase diagram of one component (Water) & two component (Pb/Ag) system & their applications; Gibbs Free energy, Van’t Hoff equation and Chemical Equilibrium; Nernst Equation, Standard electrode potential, EMF measurement and its application, Batteries and Fuel Cells.
                  </li>
                </ul>
                <hr></hr>

                <div className="mt-2 px-4">
                  <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=PL0s3O6GgLL5cyrk8azVOaXwRhrh7sFHus"
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
                        href="https://drive.google.com/drive/u/3/folders/1YuuGCBMMPZQMt8S4yfWJlPb1XUzY8CJc"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <i className="ri-file-download-line"></i>
                        <b>Notes ( 2022 )</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="radio" name="outer-accordion" />
            <div className="collapse-title text-xl font-medium">Engineering Graphics</div>
            <div className="collapse-content">
              <div className="text-left p-4">
                <span className='text-pink-500'>Tips :</span> The provided YouTube links and Book are sufficient for this Subject
                <div className="mt-2 px-4">
                  <h2 className="text-lg font-semibold mb-2">YouTube Links <i className="fa-brands fa-youtube fa-lg" style={{ color: "red" }}></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <a
                        href="https://youtube.com/playlist?list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&si=qSLDwOzSQYFVARXh"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>Engineering Drawing HINDI - Manas Patnaik </b>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://youtube.com/playlist?list=PLIhUrsYr8yHwDUrVYmUNYkEeZgZTvoIfS&si=VDR3XpTXUi-ctUBl"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>Engineering Drawing English - Manas Patnaik </b>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://youtube.com/playlist?list=PLDN15nk5uLiD3MEUiqsYPnZOHcVu7um6_&si=0_zi8QGTD2uAU3rM"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>ENGINEERING DRAWING - TIKLE'S ACADEMY</b>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://youtube.com/playlist?list=PL0s3O6GgLL5egBN9RQS9jsX04IQaMl9S6&si=clH2bga4vO9a-pbY"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>Engineering Drawing for Beginners - Last moment tuitions</b>
                      </a>
                    </li>

                  </ul>
                  <hr></hr>

                  <h2 className="text-lg font-semibold mt-2"> Book - <i className="fa-solid fa-file-arrow-down fa-lg"></i></h2>
                  <ul className="list-none space-y-2 ml-1">
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1K62WCCkX2Y6uYfwcTzrQk-93ji2s_vb0/preview"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <i className="ri-youtube-fill"></i>
                        <b>ND Bhatt</b>
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

export default CseSem1;
