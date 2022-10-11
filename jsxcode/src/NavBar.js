import React, { Component } from "react"

export default class NavBar extends Component {
    render() {
        return (
            <nav class="nav nav-top top-layer">
                <div class="top-layer logo">Bilby AI</div>
                <ul class="nav-list">
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
