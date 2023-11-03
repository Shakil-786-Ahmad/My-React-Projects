import React from 'react';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/Menu';
import Home from './components/Home';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import About from './components/About';
import UpdateCourse from './components/UpdateCourse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    <>
      <Router>
        <Header />
        <div className='container mt-2'>
          {/* <h1 className='text-primary fw-bold' style={{ letterSpacing: "13px" }}>ADMIN PANEL</h1> */}
          <div className='row d-flex'>

            <div className='col-md-4'>
              <Menu />{/* This must be inside Router! else the it won't display on webpage */}
            </div>

            <div className='col-md-8 '>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-course' element={<AddCourse />} />
                <Route path='/view-courses' element={<Courses />} />
                <Route path='/update/:id' element={<UpdateCourse />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </div>

          </div>
        </div>
      </Router >

    </>
  )
}

export default App
