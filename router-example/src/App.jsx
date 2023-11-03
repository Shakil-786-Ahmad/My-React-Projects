import React from "react";
import MyNav from "./components/MyNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./components/Courses"
import AddCourse from "./components/AddCourse"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import Options from "./components/Options"
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Router>
        <MyNav></MyNav>
        <div className="container d-flex">
          <div className="col-md-3">
            <Options></Options>
          </div>
          <div className="col-md-8 px-3">
            <Routes>
              <Route path="/courses" element={<Courses />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App;