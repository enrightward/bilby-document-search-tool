import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"

import NavBar from "../NavBar/NavBar.jsx"

import Search from "../../pages/Search.jsx"
import About from "../../pages/About.jsx"
import SignUp from "../../pages/SignUp.jsx"
import Datasets from "../../pages/Datasets.jsx"
import Models from "../../pages/Models.jsx"
import Newsletters from "../../pages/Newsletters.jsx"
import Results from "../../pages/Results.jsx"

import { 
    MainPanel
} from './app-styles.js'

import {
    defaultSearchQuery,
} from '../styleSettings.js'


export default function App() {
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery)
    const [matches, setMatches] = useState([])

    return (
        <>
            <NavBar/>
            <MainPanel>
                <Routes>
                    <Route path="/" element={<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} setMatches={setMatches}/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/datasets" element={<Datasets/>}/>
                    <Route path="/models" element={<Models/>}/>
                    <Route path="/newsletters" element={<Newsletters/>}/>
                    <Route path="/results" element={<Results searchQuery={searchQuery} setSearchQuery={setSearchQuery} matches={matches} setMatches={setMatches} />}/>
                </Routes>
            </MainPanel>
        </>
    )
}



