import React from 'react';
import './hero.css'
import { FaCheck} from "react-icons/fa";
// import Parallax from 'react-rellax';
// import { motion } from 'framer-motion';

// const transition = {
//   duration: 1,
//   type: "spring",
// };

const Card = () => {
  return (
    <>
    <div className='main-card row'>
      <h1 className='text-center text-white'>Services</h1>
      <div className='card-single col-md-3 col-sm-12'>
          <h3 className='text-center'>GST Registration and return filing</h3>
          <p><FaCheck className='tick-icon'/> &nbsp; GST 3B filing</p>
          <p><FaCheck className='tick-icon'/> &nbsp;GST R1 filing</p>
        </div>
        
        <div className='card-single col-md-3 col-sm-12'>
          <h3>Income Tax filing</h3>
          <p><FaCheck className='tick-icon'/> &nbsp; ITR 1</p>
          <p><FaCheck className='tick-icon'/> &nbsp; ITR 2</p>
          <p><FaCheck className='tick-icon'/> &nbsp; ITR 3 , ITR 4 , ITR 5</p>
          {/* <p><FaCheck className='tick-icon'/> &nbsp; ITR 4</p>
          <p><FaCheck className='tick-icon'/> &nbsp; ITR 5</p> */}
        </div>
        <div className='card-single col-md-3 col-sm-12'>
          <h3>Accounting & Book keeping</h3>
          <p>One stop solution for Accounting & book keeping.</p>
        </div>
        {/* Another 3 card starte heer */}
        <div className='card-single col-md-3 col-sm-12'>
          <h3 className='text-center'>Audit & Assurance</h3>
          <p>My team of experts provides the accurate maintenance through evaluation and preparation.</p>
        </div>
        <div className='card-single col-md-3 col-sm-12'>
          <h3>Advisory</h3>
          <p>My team of experts provides the accurate maintenance through evaluation and preparation.</p>
        </div>
        <div className='card-single col-md-3 col-sm-12'>
          <h3>Investment & financial planning</h3>
          <p>My team of experts provides the accurate maintenance through evaluation.</p>
        </div>
    </div>
    </>
  )
}

export default Card
