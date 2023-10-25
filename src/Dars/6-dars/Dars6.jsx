import React, { useState } from 'react';
import "./style.css"
import moon from "./moon.png"
import sun from "./sun.png"

const Dars6 = () => {
    // useState
    let name = "polonchi"
    const [user, setUser] = useState("polonchi")
    function changeName() {
        name = "pistonchi"; 
        setUser("pistonchi")
    }
    const [nav, setNav] = useState(false)
    const handleMenu = () =>{
        setNav(!nav)
    }
    const [mode, setMode] = useState(true)
    const handleMode = () =>{
        setMode(!mode)
        if(mode){
            document.body.style.background = "grey"
        } else{
            document.body.style.background = "white"
        }
    }
    const [count, setCount] = useState(0)
    const handlePlus = () =>{
        setCount((num)=> num + 1)
    }
    const [search, setSearch] = useState(false)
    const handleSearch = () =>{
        setSearch(!search)
    }
    const [color, setColor] = useState("white")
    const handleColor = (params) =>{
        setColor(params)
        document.body.style.background = params
    }
    return ( 
        <React.Fragment>
            <h1>name: {name}</h1>
            <h1>user: {user}</h1>
            <button onClick={changeName}>Click</button>
            <div>
                <button onClick={handleMenu} className={nav ? 'burgerBTN burgerCLOSE' : 'burgerBTN'}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className={nav ? "navbar nav_show" : "navbar"}>
                    <a href="#">Home</a>
                    <a href="#">Product</a>
                    <a href="#">Price</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div>
                <button onClick={()=>setCount((num)=>num-1)}>Minus</button>
                <h1>{count}</h1>
                <button onClick={handlePlus}>Plus</button>
            </div>
            <div>
                <button onClick={handleMode} className={mode ? "mode sun" : "mode moon"}>
                    <img src={mode ? sun : moon} alt="" />
                </button>
            </div>
            <div>
                <button onClick={handleSearch}>Search</button>
                <div className={search? "search search_show" : "search"}>
                    <input type="text" />
                    <button onClick={handleSearch}>X</button>
                </div>
            </div>
            <div>
                <h1 className={color}>Color</h1>
                <button onClick={()=>handleColor("white")}>white</button>
                <button onClick={()=>handleColor("red")}>red</button>
                <button onClick={()=>handleColor("green")}>green</button>
                <button onClick={()=>handleColor("blue")}>blue</button>
            </div>
        </React.Fragment>
     );
}
 
export default Dars6;