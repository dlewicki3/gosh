import React from 'react';
import { motion } from 'framer-motion';
import './O1.css';
import { HiMiniArrowDownRight } from "react-icons/hi2";

const O1 = () => {
  return (
    <motion.div className="o1">
      <div className="absolut"></div>
      <div className="k1">
        <motion.div className="left1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <motion.p className='big-txt1' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            The ultimate <span className='span-class'>getaway</span> to exceptional <span className='span-class'>user experience.</span>
            <motion.button className='btn1'initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
              Start a project! <HiMiniArrowDownRight />
            </motion.button>
          </motion.p>
        </motion.div>
        <motion.div className="right1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          {/* Treść dla diva "right1" */}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default O1;
