import React, { StrictMode } from "react";
import App from "./App.js"
import { render } from "@testing-library/react";
import "./index.css";

document.getElementById("root");
render(
  <StrictMode>
    <App />
  </StrictMode>
)