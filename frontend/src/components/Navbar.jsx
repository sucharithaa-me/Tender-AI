import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Tender AI</h1>

      <div className="nav-buttons">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar