import { Routes, Route, Link } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/blue" element={<h1>Blue</h1>} />
        <Link to="/red" element={<h1>Red</h1>} />
      </div>
      <div id="main-section">{/* routes here */}
        <Routes>
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
