import React from 'react'
import { MyContext } from '../../context/context'
const Dars18 = () => {
    return (
        <MyContext.Consumer>
            {(value)=>{
                return(
                    <div className={
                        value.tema ? 'dark' : "light"
                        }
                    >
                        <button onClick={value.handleTema}>
                            tema change
                        </button>
                        <h1>18 Dars</h1>
                    </div>
                )
            }}
        </MyContext.Consumer>
        
    )
}

export default Dars18
