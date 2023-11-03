import React from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import AddCourse from "./AddCourse";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

const Options = () => {
    return (
        <div class="list-group">
            <Link class="list-group-item list-group-item-action" to="/">Home</Link>
            <Link class="list-group-item list-group-item-action" to="/courses">View Courses</Link>
            <Link class="list-group-item list-group-item-action" to="/add-course">Add Course</Link>
            <Link class="list-group-item list-group-item-action" to="/about">About</Link>
            <Link class="list-group-item list-group-item-action" to="/contact">Contact</Link>
        </div>
    )
}
export default Options;