import React from 'react';
import Dars18 from './Dars/18-dars/Dars18';
import Dars17 from './Dars/17-dars/Dars17';
import Mode, { MyContext } from './context/context';
const App = () => {
  return ( 
    <Mode>
      <MyContext.Consumer>
        {(value)=>{
          console.log(value)
          return(
            <div className={
                value.tema ? 'home light' : 'home dark'
              }
            >
              <Dars17 />
              <button onClick={value.handleTema}>
                Tema
              </button>
            </div>
            
          )
        }}
      </MyContext.Consumer>
    </Mode>
   );
}
 
export default App;