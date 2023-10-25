import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
    let location = useLocation()
    console.log(location, "nomatch")
    return ( 
        <React.Fragment>
            <h1>404</h1>
            <h2>So'ralgan {location.pathname} sahifa mavjud emas</h2>
        </React.Fragment>
     );
}
 
export default NoMatch;