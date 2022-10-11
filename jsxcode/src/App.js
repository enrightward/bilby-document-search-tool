import "./App.css"
import React from "react"
import NavBar from "./NavBar"

function App() {
    return (
        <>
            {/* <nav class="nav nav-top top-layer">
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
            </nav> */}
            <NavBar />
            <form class="search-form top-layer">
                <label class="search-bar-label" for="name">
                    Bilby AI Search
                </label>
                <div class="search-bar">
                    <button class="search-btn basic-search-btn">
                        <span class="icon basic-icon"></span>
                    </button>
                    <input
                        class="search-input"
                        type="text"
                        name="name"
                        id="name"
                    />
                    <button class="search-btn adv-search-btn">
                        <span class="icon adv-icon"></span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default App
