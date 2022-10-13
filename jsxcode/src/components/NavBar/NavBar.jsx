import React from "react"
import "./navbar-styles.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    const myState = { name: "Dinosaur" }

    return (
        <nav className="nav nav-top">
            <Link to="/" className="nav-logo top-layer">
                Bilby AI
            </Link>
            <ul className="nav-list">
                <CustomLink to="/about" state={myState}>About</CustomLink>
                <CustomLink to="/signup">Sign Up</CustomLink>
                <CustomLink to="/datasets">Datasets</CustomLink>
                <CustomLink to="/models">Models</CustomLink>
                <CustomLink to="/newsletters">Newsletters</CustomLink>
            </ul>
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
