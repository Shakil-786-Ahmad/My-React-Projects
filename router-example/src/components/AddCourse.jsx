import React from "react";

const AddCourse = () => {
    return (
        <>
            <form>
                <div className="form-group">
                    <label className="form-label" for="Title">Title</label>
                    <input className="form-control" type="text" id="title" placeholder="Enter title" />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" for="Title">Description</label>
                    <textarea className="form-control" rows={4} ></textarea>
                </div>

                <div className="container mt-2 text-center">
                    <button className="btn btn-outline-success">Add</button>
                </div>
            </form>

        </>
    )
}
export default AddCourse;