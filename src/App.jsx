import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Blue from "./Blue"
import Red from "./Red"
import Home from "./home"

function App() {

  return (
    <>
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/blue" element={<h1>Blue</h1>} />
        <Link to="/red" element={<h1>Red</h1>} />
        <Link to="/" element={<h1>Home</h1>} />
      </div>
      <div id="main-section">{
        <Routes>
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      }            
      </div>
    </div>
    </>
  )
}

export default App
