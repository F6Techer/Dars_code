import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
    let params = useParams()
    console.log(params)

    return ( 
        <React.Fragment>
            <h1>Single page {params.id}</h1>
        </React.Fragment>
     );
}
 
export default SinglePage;