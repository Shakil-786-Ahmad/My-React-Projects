import { Component, useEffect } from "react";
import React, { useState } from "react";
import base_url from "./base_url";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router";



const UpdateCourse = () => {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        axios.get(`${base_url}/course/${id}`)
            .then((res) => {
                // console.log(res.data);
                // setTitle(res.data.title);
                // setTitle(res.data.price);
                // setTitle(res.data.description);

                const { id, title, price, description } = res.data;

                setTitle(title);
                setPrice(price);
                setDescription(description);
            })
            .catch((error) => {
                // console.log(error.message);
                toast.error("Something went wrong!")
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(id, title, price, description);
        const formData = { id, title, price, description };

        axios.post(`${base_url}/save`, formData)
            .then((res) => {
                toast.success("Course updated.", {
                    position: "top-right"
                });

                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch((error) => {
                toast.error("Something went wrong!", {
                    position: "top-center"
                })
            })
    }

    return (
        <div>
            <h1 className="text-primary " style={{ letterSpacing: "4px" }}>UPDATE COURSE DETAILS</h1>
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
export default UpdateCourse;
