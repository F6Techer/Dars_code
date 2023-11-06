import React, { useState }  from 'react'
import "./style.scss"

const Exam1 = () => {
    const [el, setEl] = useState(false)
    const click = () => {
        setEl(!el)
    }
    return (
        <div className='loading'>
            <div className={ el ? "circle" : "circle circle2" }></div>
            <button onClick={click}>Change rotate</button>
        </div>
    )
}

export default Exam1
