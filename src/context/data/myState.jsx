import React, { useState } from "react";
import MyContext from "./myContext";

function MyState(props){
  const [mode, setMode] = useState('light');

  const toggle =()=>{
    if(mode === 'light'){
        setMode('dark');
        document.body.style.background = 'rgb(17,24,39)';
    }else{
        setMode('light');
        document.body.style.background = 'white';
    }
  }

    return (
        <MyContext.Provider value={{mode,toggle}}>
            {props.children}
            
        </MyContext.Provider>
    )
}

export default MyState;