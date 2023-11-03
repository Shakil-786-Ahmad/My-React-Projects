import React, { useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

const Courses = () => {

    const [course, setCourse] = useState([
        { id: "id", title: "Core Java", description: "This is some description about this course." },
        { id: "id", title: "Advance Java", description: "This is some description about this course." },
        { id: "id", title: "Spring MVC", description: "This is some description about this course." }
    ]);

    return (
        <div>
            {course.map((item) => {
                const { id, title, description } = item;
                return (
                    <div className="card" key={id}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div>
                            <button className="btn btn-warning">Update</button>
                            <button className="btn btn-danger m-2">Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Courses;