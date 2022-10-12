import "./App.css"
import { NavBar } from "../NavBar"
import { SearchBar } from "../SearchBar"
// import { Component } from "react"

import About from "../pages/About.js"
import SignUp from "../pages/SignUp.js"
import Datasets from "../pages/Datasets.js"
import Models from "../pages/Models.js"
import Newsletters from "../pages/Newsletters.js"

export function App() {
    console.log(window.location)
    let Component

    switch (window.location.pathname) {
        case "/":
            Component = SearchBar
            break

        case "/about":
            Component = About
            break

        case "/signup":
            Component = SignUp
            break

        case "/datasets":
            Component = Datasets
            break

        case "/models":
            Component = Models
            break

        case "/newsletters":
            Component = Newsletters
            break

        default:
            Component = SearchBar
    }

    return (
        <>
            <NavBar />
            <div className="container top-layer">
                <Component />
            </div>
        </>
    )
}
