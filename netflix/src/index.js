import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Card from "./Card";
import "./index.css";
import CardArray from "./CardArray";

// function value(val) {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       link={val.link}
//     />
//   );
// }

// const value = (val) => {
//   return(
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       link={val.link}
//     />
//   )
// }

ReactDOM.render(
  <>
    <Heading />
    {CardArray.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          link={val.link}
        />
      )
    })}
  </>,
  document.getElementById("root")
);