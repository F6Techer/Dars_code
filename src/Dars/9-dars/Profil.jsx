import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profil = () => {
    return ( 
        <React.Fragment>
            <div>
                <b>sidebar</b>
                <NavLink to={"/dashboard/glavny"}>Glavny</NavLink>
                <NavLink to={"/dashboard/meneger"}>meneger</NavLink>
                <NavLink to={"/dashboard/profil"}>Profil</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </React.Fragment>
     );
}
 
export default Profil;