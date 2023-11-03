import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AllChannels.css";

const AllChannels = () => {

    const [channels, setChannels] = useState([]);

    const getApiData = async () => {
        try {
            const res = await axios.get("http://103.62.239.76:8089/sidsapi/main/getallChannels")
            console.log(res.data);
            setChannels(res.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getApiData();
    }, [])

    return (
        <div className="">
            <h1>List of All Channels</h1><hr />
            {/* {channels.map((item) => {
                const { id, channelName, channelType, channelTypeobj, typeId } = item
                return (
                    <table className="" id={id}>
                        <thead>
                            <th>Id</th>
                            <th>Channel Name</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{id}</td>
                                <td>{channelName}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })} */}
            <table className="channelTable">
                <thead>
                    <th>Id</th>
                    <th>Channel Name</th>
                </thead>

                {
                    channels.slice(0, 10).map((item) => {
                        const { id, channelName } = item
                        return <tbody key={id}>
                            <tr>
                                <td>{id}</td>
                                <td>{channelName}</td>
                            </tr>
                        </tbody>
                    })
                }

            </table>
        </div>
    )
}
export default AllChannels;