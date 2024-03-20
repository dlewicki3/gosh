import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import "./O3.css";



const O3 = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['150%', '0%']);

  return (

    <div className="o3">
        <div className="k3">
          <div className="left3">  
      <motion.div className="par" style={{ y }} >
</motion.div>
<div className="show-after"></div>
</div>
<div className="right3">
  <p className='middle-txt3'>Our services</p>
  <br></br>
  <p className='big-txt3'>Return on high investment</p>
  <br></br>
  <p className='small-txt3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta neque quibusdam facere!</p>
  <p className='link-txt3'>Website and application audits

</p>
  <p className='link-txt3'>User research

</p>
  <p className='link-txt3'>Designing intuitive interfaces

</p>
  <p className='link-txt3'>Comprehensive project implementations
</p>
<br></br>
<button className='btn3'>Sprawdź całą ofertę!</button>
</div>
      </div>
    </div>
  );
}

export default O3;
