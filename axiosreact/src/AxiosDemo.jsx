import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosDemo = () => {

    const [data, setData] = useState([]);
    const [isError, setError] = useState("");

    const getApiData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/post")
            setData(res.data)
        } catch (error) {
            setError(error.message)
        }
    }



    useEffect(() => {
        getApiData();
    }, [])

    return (
        <div>
            <h1>Axios Practice</h1>
            {isError != "" && <h2>{isError}</h2>}
            <div className="grid">
                {data.map((post) => {
                    const { id, title, body } = post
                    return <div className="card" key={id}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                })}

            </div>
        </div >
    )
}

export default AxiosDemo;