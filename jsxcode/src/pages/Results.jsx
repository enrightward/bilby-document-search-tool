import React from "react"
import { useLocation } from "react-router-dom"
import ResultCard from "../components/ResultCard/ResultCard.jsx"
import ResultSearchBar from "../components/ResultSearchBar/ResultSearchBar.jsx"
import "./results-page-styles.css"


export default function Results() {
    const location = useLocation()
    const searchTerm = location.state.searchTerm
    const numrows = 10
    const cards = []

    for (let i = 0; i < numrows; i++) {
        cards.push(<ResultCard searchTerm={searchTerm} key={i} />)
    }

    return (
        <>  
            <div className="triplecol">
                <div className="results-col">
                    <ResultSearchBar className="results-search"/>
                    {cards}
                </div>
                <div className="doc-reader-col">
                    doc-reader-col
                </div>
                <div className="statistics-col">
                    statistics-col
                </div>
            </div>
        </>)
}