import axios from "axios";
import base_url from "../api/base_url";
import { Link } from "react-router-dom";

const Todo = ({ props, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/delete/${id}`).then(
            (response) => {
                // alert("Course deleted " + id);
                update(id);
            },
            (error) => {
                alert(error.message)
            }
        )
    }

    return (
        <div className="card p-2 mb-2">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="container text-center">
                <button className="btn btn-warning" onClick={<Link to="/update">Update</Link>}>Update</button>
                <button className="btn btn-danger ms-2" onClick={() => {
                    deleteCourse(props.id);
                }}>Delete</button>
            </div>
        </div>
    )
}
export default Todo;