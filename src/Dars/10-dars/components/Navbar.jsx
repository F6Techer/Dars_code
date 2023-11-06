import React, { useState } from 'react';
import { Nike, Cart } from '../../../assets/icon';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [filter, setFilter] = useState(false)
    const handleFilterOpen = () =>{
        setFilter(true)
    }
    const handleFilterClose = () =>{
        setFilter(false)
    }
    return ( 
        <React.Fragment>
            <div className="navbar">
                <div className="logo">
                    <Nike/>
                </div>
                <div className="nav">
                    <NavLink to={"/"}>Men</NavLink>
                    <NavLink to={"/women"}>Women</NavLink>
                    <NavLink to={"/kids"}>Kids</NavLink>
                    <NavLink to={"/sale"}>Sale</NavLink>
                </div>
                <div className="cart" onClick={handleFilterOpen}>
                    <Cart />
                </div>
                <div className={filter ? "filter filter__open": "filter"}>
                    <button className='close__filter' onClick={handleFilterClose}>
                        X
                    </button>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Navbar;