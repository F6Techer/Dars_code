import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <React.Fragment>
            <h1>About Page</h1>
            <Link to={"/"}>Home</Link>
        </React.Fragment>
     );
}
 
export default About;