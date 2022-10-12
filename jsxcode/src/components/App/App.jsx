import React from "react"
import "./App.css"

import NavBar from "../NavBar/NavBar.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"
import About from "../../pages/About.jsx"
import SignUp from "../../pages/SignUp.jsx"
import Datasets from "../../pages/Datasets.jsx"
import Models from "../../pages/Models.jsx"
import Newsletters from "../../pages/Newsletters.jsx"
import Results from "../../pages/Results.jsx"
import { Route, Routes } from "react-router-dom"

export default function App() {
    return (
        <>
            <NavBar />
            <div className="container top-layer">
                <Routes>
                    <Route path="/" element={<SearchBar/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/datasets" element={<Datasets/>}/>
                    <Route path="/models" element={<Models/>}/>
                    <Route path="/newsletters" element={<Newsletters/>}/>
                    <Route path="/results" element={<Results />}/>
                </Routes>
            </div>
        </>
    )
}
