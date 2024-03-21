import React from 'react'
import "./O4.css";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaShop } from "react-icons/fa6";
import { SiBitcoincash } from "react-icons/si";

const O4 = () => {
  return (
    <div className="o4">
        <div className="k4">
            <p className='big-txt4'>For who is UI/UX design?</p>
<div className="na-kwa4">
    <div className="kwa4">
        <div className="na-icon">
    <HiMiniDevicePhoneMobile />
    </div>
    <p className='small-txt4'>
    For mobile and web <br></br>applications.
    </p>
    </div>
    <div className="kwa4">
    <div className="na-icon">
    <FaShop />

    </div>
    <p className='small-txt4'>
    For e-commerce stores looking<br></br> to increase <br></br>their conversion rates.
    </p>
    </div>
    <div className="kwa4">
    <div className="na-icon">

    <SiBitcoincash />

    </div>
    <p className='small-txt4'>
    For websites
    </p>
    </div>
</div>
        </div>
    </div>
  )
}

export default O4