// import React from 'react';
// import Sidebar from '../LandingPg/Sidebar';
// import Tags from './Tags';
// import './index.css';

// function index() {
//   return (
//     <div className='stack-index'>
//       <div className='stack-index-content'>      
//         <Sidebar/>
//         <Tags/>     
//       </div>
//     </div>
//   );
// }

// export default index;
import React from 'react';
import Sidebar from '../LandingPg/Sidebar';
import Tags from './Tags';
import './index.css';

function Index() {
  return (
    <div className='flex flex-col md:flex-row min-h-[calc(100vh-64px)]'>
      <Sidebar />
      <div className='flex-1 overflow-y-auto p-4'>
        <Tags />
      </div>
    </div>
  );
}

export default Index;
