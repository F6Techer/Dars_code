import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import SinglePage from './Pages/SinglePage';
import NoMatch from './Pages/NoMatch';
import Profil from './Profil';
import { Routes, Route, Outlet, NavLink, useLocation } from 'react-router-dom';

const Dars9 = () => {
    let location = useLocation()
    // console.log(location, "Dars9")
    return ( 
        <React.Fragment>
            <div className="">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/news"}>News</NavLink>
                <NavLink to={"/dashboard"}>dashboard</NavLink>
            </div>
            <div className="pages">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/news' element={<About />} />
                    <Route path='/news/:id' element={<SinglePage />}/>
                    <Route path='*' element={<NoMatch />}/>

                    <Route path='/dashboard' element={<Profil />}>
                        <Route path='glavny' element={<h1>Glavny</h1>}/>
                        <Route path='meneger' element={<h1>meneger</h1>}/>
                        <Route path='profil' element={<h1>Profil</h1>}/>
                    </Route>
                </Routes>
            </div>
        </React.Fragment>
     );
}
 
export default Dars9;