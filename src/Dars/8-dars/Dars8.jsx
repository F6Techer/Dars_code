import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

const Dars8 = () => {
    return ( 
        <React.Fragment>
            <h2>React-router-dom</h2>
            <div className="">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </div>
            <div className="pages">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </React.Fragment>
     );
}
 
export default Dars8;