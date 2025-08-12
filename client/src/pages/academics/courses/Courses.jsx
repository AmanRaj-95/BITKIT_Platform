import React from 'react'
import Navbar from '../../../components/Navbar'
import Course from '../courses/Course'
import Footer from '../../../components/Footer'

function Courses() {
  return (
    <>
    {/* <Navbar/> */}
    <div className=' p-6 min-h-screen bg-slate-800'>
      <Course/>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Courses
