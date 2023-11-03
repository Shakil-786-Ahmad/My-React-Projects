import React from "react";
import Card from "./Card";
import "./App.css";
import Heading from "./Heading";
import CardResources from "./CardResources";

// function myCard(val) {
//     console.log(val);
//     return (
//         <Card
//             imgSrc={val.imgSrc}
//             title={val.title}
//             description={val.description}
//         />
//     )
// }

const App = () => {
    return (
        <div className="main-div">


            <Heading />

            <div className="main-card">

                {CardResources.map((val) => {
                    return (
                        <Card
                            imgSrc={val.imgSrc}
                            title={val.title}
                            description={val.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App;