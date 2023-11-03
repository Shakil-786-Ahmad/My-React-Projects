import React from "react";
import { Link } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
    return (
        <div className="list-group">
            <Link className="list-group-item list-group-item-action" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" to="/view-courses">View Courses</Link>
            <Link className="list-group-item list-group-item-action" to="/add-course">Add Course</Link>
            <Link className="list-group-item list-group-item-action" to="/about">About</Link>
        </div>
    )
}
export default Menu;