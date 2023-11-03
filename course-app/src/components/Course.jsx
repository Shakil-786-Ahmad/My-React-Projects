import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"


const Course = (props) => {

    const handleDelete = (e) => {
        alert(e.target.id.value)
    }
    return (
        <div className="card p-2 mb-2">
            <div className="card-heading d-flex justify-content-between">
                <h3>{props.title}</h3>
                <h6 className="text-muted">&#8377; {props.price}</h6>
            </div>
            <p>
                {props.description}
            </p>
            <div>
                <button className="btn btn-warning me-2">Update</button>
                <button className="btn btn-danger" onClick={() => { alert(props.id) }}>Delete</button>
            </div>
        </div>
    )
}
export default Course;