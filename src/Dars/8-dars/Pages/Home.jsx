import React, { useState } from "react";
import moon from "./moon.png"
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate()
    const [value, setValue] = useState("")
    const handleLogin = () =>{
        if (value === "1234") {
            setTimeout(() => {
                navigate("/about")
            }, 2000);
        } else{
            alert("Login xato")
        }
    }
    return ( 
        <React.Fragment>
            <h1>Home Page</h1>
            <div>
                <input type="text" onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </div>
            <img src={moon} alt="" onClick={()=>navigate("/about")}/>
        </React.Fragment>
     );
}
 
export default Home;