import React from "react";
import App from "./App";
import './App.css';

function Hello({firstName}){
    return(
        <p className="name">This is paraghraph from hello.js:
            <strong> {firstName}</strong></p>
    )
}


export default Hello;