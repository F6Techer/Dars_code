import React, {createContext, useState} from 'react'

export const MyContext = createContext()

const Mode = (props) => {
    const [tema, setTema] = useState(false)
    const handleTema = () =>{
        setTema(!tema)
    }
    return (
        <MyContext.Provider value={{
            tema:tema,
            handleTema:handleTema
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default Mode
