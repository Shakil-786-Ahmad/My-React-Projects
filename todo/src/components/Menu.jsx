import React from "react";
import { Link } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
    return (
        <div className="list-group">
            <Link className="list-group-item active" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" to="/view-todos">View Todos</Link>
            <Link className="list-group-item list-group-item-action" to="add-todo">Add New</Link>

        </div>
    )
}
export default Menu;