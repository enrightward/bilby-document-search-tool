// import React, { useState } from "react"
import React from "react"
import "./navbar-styles.css"

export function NavBar() {
    return (
        <nav className="nav nav-top top-layer">
            {/* <div className="nav-logo top-layer">Bilby AI</div> */}
            <a href="/" className="nav-logo top-layer">
                Bilby AI
            </a>
            <ul className="nav-list">
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/signup">Sign Up</a>
                </li>
                <li>
                    <a href="/datasets">Datasets</a>
                </li>
                <li>
                    <a href="/models">Models</a>
                </li>
                <li>
                    <a href="/newsletters">Newsletters</a>
                </li>
            </ul>
        </nav>
    )
}
