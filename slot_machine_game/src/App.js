import React from "react";
import SlotMachine from "./SlotMachine";

const App = () => {
  return(
    <>
      <div className="machineSection">
      <SlotMachine x='🌵' y='🌵' z='🌵'  />
      <SlotMachine x='🇬🇦' y='💛' z='🐐' />
      <SlotMachine x='🇬🇦' y='💛' z='🌵'  />
      <SlotMachine x='🌵' y='🌵' z='🌵'  />
      <SlotMachine x='💛' y='✈' z='💛' />
    </div>
      
    </>
  )
}

export default App;