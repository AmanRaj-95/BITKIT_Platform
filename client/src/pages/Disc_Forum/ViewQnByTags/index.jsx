// import TagQuestions from "./TagQuestions";
// import Sidebar from "../LandingPg/Sidebar"

// function index(){
//     return(
//         <div className='stack-index'>
//             <div className='stack-index-content'>      
//                 <Sidebar/>
//                 <TagQuestions/>     
//             </div>
//         </div>
//     )
// }

// export default index;
import React from "react";
import Sidebar from "../LandingPg/Sidebar";
import TagQuestions from "./TagQuestions";

function Index() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar (fixed width on desktop, collapsible on mobile handled inside Sidebar) */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow px-4 py-0 bg-white dark:bg-gray-900">
                <TagQuestions />
            </div>
        </div>
    );
}

export default Index;
