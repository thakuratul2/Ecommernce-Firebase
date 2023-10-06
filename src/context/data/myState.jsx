import React from "react";
import MyContext from "./myContext";

function MyState(props){
    const state = {
        name : "Atul Pratap Singh",
        age :"21"
    }

    return (
        <MyContext.Provider value={state}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState;