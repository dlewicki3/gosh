import React from 'react';
import Navbar from './Components/Navbar.jsx';
import O1 from './Components/O1.jsx';
import O2 from './Components/O2.jsx';
import O3 from './Components/O3.jsx';
import "./index.css";

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <O1/>
        <O2/>
        <O3/>
    </div>
  )
}

export default App;
