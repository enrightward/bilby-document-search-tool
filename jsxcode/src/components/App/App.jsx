import React from "react"
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

export default function App() {
    return (
        <>
            <NavBar/>
            <MainPanel>
                <Routes>
                    <Route path="/" element={<Search/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/datasets" element={<Datasets/>}/>
                    <Route path="/models" element={<Models/>}/>
                    <Route path="/newsletters" element={<Newsletters/>}/>
                    <Route path="/results" element={<Results />}/>
                </Routes>
            </MainPanel>
            {/* <div className="main-panel top-layer">
                <Routes>
                    <Route path="/" element={<MainSearchBar/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/datasets" element={<Datasets/>}/>
                    <Route path="/models" element={<Models/>}/>
                    <Route path="/newsletters" element={<Newsletters/>}/>
                    <Route path="/results" element={<Results />}/>
                </Routes>
            </div> */}
        </>
    )
}



