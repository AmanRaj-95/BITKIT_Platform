import React from 'react';
// import '../Error404.css';
import './Error404.css';

const PageNotFound = () => {
  return (
    <section className="page_404 dark:text-black">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="four_zero_four_bg">
              <h1>404</h1>
            </div>

            <div className="contant_box_404">
              <h3>We are working on this page</h3>
              <p>This page is currently under development by: <span className='text-pink-500'>BiTKiT</span></p>
              <a
                href="https://forms.gle/kwAQt329rWNK99F9A"
                className="link_404"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
