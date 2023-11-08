import React from 'react';
import Dars14 from './Dars/14-dars/Dars14';
import SinglePage from './Dars/14-dars/SinglePage';
import { Routes, Route, Link } from 'react-router-dom';
import Post from './Dars/14-dars/Post';
import Edit from './Dars/14-dars/Edit';
// f6_frontend

const App = () => {
  return ( 
    <React.Fragment>
      <div className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/post"}>Post</Link>
      </div>
      <Routes>
        <Route index element={<Dars14 />}/>
        <Route path='/news/:id' element={<SinglePage/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/post' element={<Post/>}/>
      </Routes>
      
    </React.Fragment>
   );
}
 
export default App;