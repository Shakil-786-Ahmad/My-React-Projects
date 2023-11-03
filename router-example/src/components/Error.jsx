import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="" style={{ textAlign: "center", marginTop: "20%" }}>
            <h1 style={{ color: "red", fontWeight: "lighter" }}>Opps! Something went wrong!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
export default Error;