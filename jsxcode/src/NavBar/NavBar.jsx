// import React, { useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from "react"
import "./navbar-styles.css"

export default function NavBar() {
    return (
        // <nav className="nav nav-top top-layer">
        <nav className="nav top-layer">
            <Link to="/" className="nav-logo top-layer">
                Bilby AI
            </Link>
            <ul className="nav-list">
                <CustomLink to="/about">About</CustomLink>
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
