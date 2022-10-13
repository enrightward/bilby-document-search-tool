import React from "react"
import { useLocation } from "react-router-dom"
import ResultCard from "../components/ResultCard/ResultCard.jsx"

export default function Results() {
    const location = useLocation()
    const searchTerm = location.state.searchTerm
    const numrows = 10
    const cards = []

    for (let i = 0; i < numrows; i++) {
        cards.push(<ResultCard searchTerm={searchTerm} key={i} />)
    }
    
    return <>{cards}</>
}