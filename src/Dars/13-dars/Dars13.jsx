import React, { useEffect, useState } from 'react';

const Dars13 = () => {
    // useEffect(function, dependensy)
    const [count, setCount] = useState(5)
    const handlePlus = () => {
        setCount((count) => count + 1)
    }
    const [calc, setCalc] = useState(0)

    const [width, setWidth] = useState(window.innerWidth)
    console.log(width)
    useEffect(
        ()=>{
            setCalc(()=> count * 2) 
        },
        [count]
    )
    useEffect(()=>{
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        // scroll
        return () =>{
            window.removeEventListener("resize", handleResize)
        }
    })
    return ( 
        <React.Fragment>
            <h1>Render bo'ldi {count} martta</h1>
            <h1>Calculator: {calc}</h1>
            <button onClick={handlePlus}>Plus</button>
            <div className='red' style={{width: width-50+"px"}}>
                Lorem, ipsum.
            </div>
        </React.Fragment>
     );
}
 
export default Dars13;