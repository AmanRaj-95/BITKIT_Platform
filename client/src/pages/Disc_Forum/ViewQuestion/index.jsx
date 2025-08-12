import React from 'react';
import Sidebar from '../LandingPg/Sidebar';
import MainQn from './MainQn';

function Index() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900">
      {/* Sidebar on the left (collapsible in mobile) */}
      <Sidebar />

      {/* Main content section */}
      <div className="flex-1 p-1 md:p-8">
        <MainQn />
      </div>
    </div>
  );
}

export default Index;
