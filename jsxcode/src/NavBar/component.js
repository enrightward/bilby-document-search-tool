import React, { Component } from "react"
import "./styles.css"

export class NavBar extends Component {
    render() {
        return (
            <nav className="nav nav-top top-layer">
                <div className="nav-logo top-layer">Bilby AI</div>
                <ul className="nav-list">
                    <li>
                        <a href="/#">About</a>
                    </li>
                    <li>
                        <a href="/#">Sign Up</a>
                    </li>
                    <li>
                        <a href="/#">Datasets</a>
                    </li>
                    <li>
                        <a href="/#">Models</a>
                    </li>
                    <li>
                        <a href="/#">Newsletters</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
