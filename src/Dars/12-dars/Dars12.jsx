import React, { useRef } from 'react';

const Dars12 = () => {
    let inputElement1 = useRef()
    let inputElement2 = useRef()
    let login = "admin"
    let parol = "12345"
    // const inputElement = document.querySelector("#input")
    console.log(inputElement1.current)
    const handleFocus = () => {
        // inputElement1.current.focus()
        // inputElement1.current.classList.toggle("red")
        // console.log(inputElement1.current.value)
        if (inputElement1.current.value === login && inputElement2.current.value === parol) {
            alert("To'g'ri")
        } else if(inputElement1.current.value === login && inputElement2.current.value !== parol){
            console.log("login to'g'ri, parol xato")
            inputElement2.current.focus()

        }else if(inputElement1.current.value !== login && inputElement2.current.value === parol){
            console.log("parol to'g'ri, login xato")
            inputElement1.current.focus()

        } else{
            alert("parol va login xato")
            inputElement1.current.focus()
        }
    }
    return ( 
        <React.Fragment>
            <input type="text" placeholder='Login' ref={inputElement1}/>
            {}
            <input type="text" placeholder='Parol' ref={inputElement2}/>
            {false ? <b>parol xato</b> : ""}
            <button onClick={handleFocus}>Focus</button>
        </React.Fragment>
     );
}
 
export default Dars12;
