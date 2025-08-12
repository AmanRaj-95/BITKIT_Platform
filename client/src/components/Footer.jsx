// import React from 'react'

// function Footer() {
//     return (
//         <div className="pt-2 pb-1">
//             <hr className="mb-2" />
//             <footer className="footer footer-center text-sm text-base-content rounded px-4 py-4 w-full dark:bg-slate-900 dark:text-white">
//                 <nav className="flex flex-col md:flex-row gap-1.5 md:gap-3 items-center justify-center">
//                     <a className="link link-hover" href="/about">About Us</a>
//                     <a className="link link-hover" href="/contact">Contact</a>
//                     <a className="link link-hover" href="/faqs">FAQs</a>
//                     <a className="link link-hover" href="https://bitmesra.ac.in/" target="_blank" rel="noopener noreferrer">Official Site</a>
//                 </nav>
                
//                 <aside className="mt-1">
//                     <p className="text-xs md:text-sm">© {new Date().getFullYear()} BiTKiT. All rights reserved.</p>
//                 </aside>
//             </footer>
//         </div>
//     )
// }

// export default Footer
import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="pt-2 pb-1">
            <hr className="mb-2" />
            <footer className="footer footer-center text-sm text-base-content rounded px-4 py-4 w-full dark:bg-slate-900 dark:text-white">
                <nav className="flex flex-col md:flex-row gap-1.5 md:gap-3 items-center justify-center">
                    <Link className="link link-hover" to="/about">About Us</Link>
                    <Link className="link link-hover" to="/contact">Contact</Link>
                    <Link className="link link-hover" to="/faqs">FAQs</Link>
                    <a className="link link-hover" href="https://bitmesra.ac.in/" target="_blank" rel="noopener noreferrer">Official Site</a>
                </nav>
                
                <aside className="mt-1">
                    <p className="text-xs md:text-sm">© {new Date().getFullYear()} BiTKiT. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer

