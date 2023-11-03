// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react"
import ReactDOM  from "react-dom";
import './index.css';


let greet = "";

let currentDate = new Date(2023,9,28,24);
currentDate = currentDate.getHours();
const greetCSS = {};

if(currentDate>=1 && currentDate<12){
  greet = "Good Morning";
  greetCSS.color='green';
}else if(currentDate>=12 && currentDate <16){
  greet = "Good Afternoon";
  greetCSS.color='red';
}else if(currentDate>=16 && currentDate<18){
  greet = "Good Evening";
  greetCSS.color='orange';
}else if(currentDate>=18 && currentDate<=24){
  greet = "Good Night";
  greetCSS.color='black';
}

ReactDOM.render(
  <div className="main-div">
    <h1>Hello Sir, <span style={greetCSS}>{greet}</span></h1>
  </div>
  , 
  document.getElementById("root")
  );

  