import React from 'react';
import Navbar from "../../components/Navbar";
import PageNotFound from './PageNotFound';
import Footer from '../../components/Footer';

function Error() {
  return (
    <div className="layout">
  {/* <Navbar /> */}
  <main className="content">
    <PageNotFound />
  </main>
  {/* <Footer /> */}
</div>
  );
}

export default Error;
