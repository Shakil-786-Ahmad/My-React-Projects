import React from "react";
import Logo from "./Logo";

const Heading=()=>{
    return(
        <>
            <div className="navSection">
                <div className="logoSection">
                    <Logo />
                </div>
               <div className="titleSection">
                <h1>List of trending Series</h1>
               </div>
            </div>
        </>
    );
}

export default Heading;