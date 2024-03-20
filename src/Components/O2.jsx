import React from 'react';
import "./O2.css";
import Icon2 from "./Icon2";

const O2 = () => {
  return (
    <div className="o2">
      <div className="k2">
        <div className="left2">
          <div className="top">
            <p className='middle-txt2'>We know the challenges </p>
            <p className='big-txt2'>you're facing today.</p>
            <p className='small-txt2'>Choose the challenges you're dealing with, and we'll <br></br>be there to support you at <br></br>every stage of our collaboration</p>
          </div>
          <div className="middle">
            <Icon2/>
          </div>
          <div className="bottom">
            <p className='thin-bottom-txt2'>Free Consultation</p>
            <p className='thick-bottom-txt2'>We will prepare an offer for you within 24 hours after the meeting!</p>
            <button className='btn2'>Umów się!</button>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default O2;
