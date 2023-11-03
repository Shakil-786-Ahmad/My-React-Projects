import React, { useEffect, useState } from "react";
import axios from "axios";

const SidsApi = () => {

    const [rssFeed, setRssFeed] = useState([]);

    const getApiData = async () => {
        try {
            const res = await axios.get("http://103.62.239.76:8089/sidsapi/main/getTicker")
            console.log(res.data)
            setRssFeed(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getApiData();
    }, [])

    return (
        <div>
            <h1>RSS Feed</h1>
            <h1>Id : {rssFeed.id}</h1>

            <div style={{ color: "orange", backgroundColor: "black", margin: "0" }}>
                <marquee><h4>{rssFeed.text}</h4></marquee>
            </div>
        </div>
    )
}
export default SidsApi;