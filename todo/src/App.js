import React from "react";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import AllTodos from "./components/AllTodos";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="row bg-warning text-center py-3">
        <Header />
      </div>
      <div className="row mt-1">
        <Router>
          <div className="col-md-4">
            <Menu />
          </div>
          <div className="col-md-8 bg-light p-2">
            <Routes>
              <Route path="/" element={<Home />} ></Route>
              <Route path="/view-todos" element={<AllTodos />} ></Route>
              <Route path="/add-todo" element={<AddTodo />} ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App;