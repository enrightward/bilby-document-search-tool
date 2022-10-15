import React from "react"
// import "./navbar-styles.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    const myState = { name: "Dinosaur" }

    return (
        <nav className="nav top-layer">   
            <Link to="/" className="nav-logo">
                Bilby AI
            </Link>
            <div className="nav-links-div">
                <ul className="nav-links-ul">
                    <CustomLink to="/about" state={myState}>About</CustomLink>
                    <CustomLink to="/signup">Sign Up</CustomLink>
                    <CustomLink to="/datasets">Datasets</CustomLink>
                    <CustomLink to="/models">Models</CustomLink>
                    <CustomLink to="/newsletters">Newsletters</CustomLink>
                </ul>
            </div>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className = {isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
