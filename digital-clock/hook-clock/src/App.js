import React, { useState } from "react";




const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [currentTime, setCurrTime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCurrTime(newTime);
  }

  return(
    <>
      <h1> {currentTime} </h1>
      <button onClick={UpdateTime}>Click Me</button>
    </>
  )
}

export default App;