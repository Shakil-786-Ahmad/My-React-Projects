import { Component } from "react";
import React, { useState } from "react";
import base_url from "./base_url";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourse = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { title, price, description }

        // console.log(data)

        // const sendData = async () => {
        //     try {
        //         const res = await axios.post(`${base_url}/save`, JSON.stringify(data))
        //         console.log(res.data);
        //     } catch (error) {
        //         console.log(error.message);
        //     }
        // }

        fetch(`${base_url}/save`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(() => {

            setTitle("");
            setPrice("");
            setDescription("");
            // console.log("Course added successfully.");
            toast.success("Course added successfully.", {
                // position: "top-right",
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })

    }

    return (
        <div>
            <h1 className="text-primary" style={{ letterSpacing: "10px" }}>ADD NEW COURSE</h1>
            <div className="border border-1 p-3 rounded-2" style={{ backgroundColor: "#8585ad" }}>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label className="form-label fs-5">Enter Course Titile</label>
                        <input
                            className="form-control"
                            type="text"
                            id="title"
                            value={title}
                            placeholder="Enter title here"
                            onChange={(e) => { setTitle(e.target.value) }} />
                    </div>

                    <div className="form-group mb-4">
                        <label className="form-label fs-5">Enter Course Price</label>
                        <input
                            className="form-control"
                            type="text"
                            id="price"
                            value={price}
                            placeholder="Enter price here"
                            onChange={(e) => { setPrice(e.target.value) }} />
                    </div>

                    <div className="form-group mb-4">
                        <label className="form-label fs-5">Enter Course Description</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            type="text"
                            id="description"
                            value={description}
                            placeholder="Enter description here"
                            onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-info">Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
export default AddCourse;