import React, { useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import base_url from "../api/base_url";


const AddTodo = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    const handleForm = (event) => {

        event.preventDefault();

        axios.post(`${base_url}/save`, formData).then(
            (response) => {
                alert("Saved successfully.")
            },
            (error) => {
                alert("Something went wrong!")
            }
        )
    }


    return (
        <div className="">
            <h2 className="text-center bg-info py-2">Add New Todo</h2>
            <div className="bg-secondary">
                <form className="p-3 border radius-2" onSubmit={handleForm}>
                    <div className="form-group mb-2">
                        <label className="form-label fs-4 fw-bold">Enter Title </label>
                        <input className="form-control fs-5"
                            id="title"
                            type="text"
                            placeholder="Enter Todo Title"
                            name="title"
                            required
                            onChange={(e) => {
                                setFormData({ ...formData, title: e.target.value })
                            }}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label fs-4 fw-bold">Enter Description </label>
                        <input className="form-control fs-5"
                            id="description"
                            type="text"
                            placeholder="Enter Todo Description"
                            name="description"
                            required
                            onChange={(e) => {
                                setFormData({ ...formData, description: e.target.value })
                            }}
                        />
                    </div>

                    <div className="container text-center mt-2">
                        <button className="btn btn-info px-3">Add</button>
                        <button className="btn btn-warning ms-2" type="reset">Clear</button>
                    </div>
                </form >
            </div>
        </div>
    )
}

export default AddTodo;