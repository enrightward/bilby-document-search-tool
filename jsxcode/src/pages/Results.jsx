import React from "react"
import { useLocation } from "react-router-dom"
import ResultCard from "../components/ResultCard/ResultCard.jsx"

export default function Results() {
    const location = useLocation()
    const searchTerm = location.state.searchTerm

    return (
        <>
            <ResultCard searchTerm={searchTerm} />
            <ResultCard searchTerm={searchTerm} />
            <ResultCard searchTerm={searchTerm} />
            <ResultCard searchTerm={searchTerm} />
        </>
    )
}