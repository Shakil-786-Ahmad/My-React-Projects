import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
    return (
        <div className="bg-info text-center py-3">
            <h1 className="fw-bolder" style={{ fontFamily: "monospace" }}>Course Application</h1>
        </div>
    )
}

export default Header;