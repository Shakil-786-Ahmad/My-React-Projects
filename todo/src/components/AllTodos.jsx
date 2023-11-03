import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import base_url from "../api/base_url";
import Todo from "./Todo";

const AllTodos = () => {

    const [todo, setTodo] = useState([]);
    const [error, setError] = useState("");

    const getApiData = () => {
        axios.get(`${base_url}/courses`).then(
            (reponse) => {
                // console.log(reponse.data);
                setTodo(reponse.data)
            },
            (error) => {
                console.log(error.message);
                setError(error.message);
            }
        )
    };

    const updateTodosList = (id) => {
        setTodo(todo.filter((t) => t.id !== id));
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            {

                todo.length > 0 ? todo.map((item) => <Todo key={item.id} props={item} update={updateTodosList} />) :
                    <h3 className="fw-lighter text-center text-danger">{error}</h3>
            }
        </div >
    )
}
export default AllTodos;