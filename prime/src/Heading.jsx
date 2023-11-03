import React from "react";

const Heading = () => {
    return (
        <div className="heading" style={{ backgroundColor: "gray", display: "flex", padding: "20px" }}>
            <div className="opt1">
                Home
            </div>
            <div className="opt2">
                Gallary
            </div>
            <div className="opt3">
                Services
            </div>
            <div className="opt4">
                About
            </div>
            <div className="opt5">
                Contact
            </div>
        </div>
    )
}

export default Heading;