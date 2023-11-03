import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "./base_url";
import { Link } from "react-router-dom";


const getApiData = () => {
    axios.get(`${base_url}/courses`)
        .then((res) => {
            setCourse(res.data);
        })
        .catch((error) => {
            console.log(error.message);
        })
}

const Courses = () => {

    const [course, setCourse] = useState([])

    // const getApiData = async () => {
    //     try {
    //         const res = await axios.get(`${base_url}/courses`)
    //         console.log(res.data);
    //         setProduct(res.data);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }



    useEffect(() => {
        axios.get(`${base_url}/courses`)
            .then((res) => {
                setCourse(res.data);
            })
            .catch((error) => {
                alert(error.message)
            })
    }, []);


    const deleteCourse = (courseId) => {
        const updatedCourse = [...course];

        axios.delete(`${base_url}/delete-course/${courseId}`)
            .then((res) => {
                // updatedCourse.splice(id, 1);
                const updatedItems = course.filter(course => course.id !== courseId);
                console.log("Course deleted.")
                setCourse(updatedItems);
            })
            .catch((error) => {
                console.log(error.message);
                console.log("something went wrong!!")
            })

    }

    return (
        <div className="">
            <div className="fw-lighter text-muted"><h1 style={{ letterSpacing: "10px" }}>LIST OF COURSES</h1></div>
            {
                course.length > 0 ? course.map((item) => {
                    const { id, title, description, price } = item
                    return <div key={id}>
                        <div className="card p-2 mb-2">
                            <div className="card-heading d-flex justify-content-between">
                                <h3>{title}</h3>
                                <h6 className="text-muted">&#8377; {price}</h6>
                            </div>
                            <p>
                                {description}
                            </p>
                            <div className="text-center">
                                <Link className="btn btn-warning me-2" to={`/update/${id}`}>Update</Link>
                                <button className="btn btn-danger" onClick={() => deleteCourse(id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                }) : "Empty Data"
            }
        </div>
    )
}
export default Courses;