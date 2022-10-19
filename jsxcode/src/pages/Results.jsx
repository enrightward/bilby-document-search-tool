import React from "react"
import { useLocation } from "react-router-dom"
import ResultCard from "../components/ResultCard/ResultCard.jsx"
import ResultSearchBar from "../components/ResultSearchBar/ResultSearchBar.jsx"
import BlueButton from "../components/BlueButton/BlueButton.jsx"
import DatasetPanel from "../components/DatasetPanel/DatasetPanel.jsx"
import MainDocumentCard from "../components/MainDocumentCard/MainDocumentCard.jsx"
import "./results-page-styles.css"

export default function Results() {
    const location = useLocation()
    const searchTerm = location.state.searchTerm
    const numrows = 20
    const cards = []

    for (let i = 0; i < numrows; i++) {
        cards.push(<ResultCard searchTerm={searchTerm} key={i} listId={i} />)
    }

    return (
        <>
            <div className="results-col top-layer">
                <ResultSearchBar className="results-search"/>
                <div className="results-under-panel">
                    <BlueButton text="sort by..."/>
                    <BlueButton text="+ data"/>
                </div>
                {cards}
            </div>
            <div className="doc-reader-col top-layer">
                doc-reader-col
                <MainDocumentCard/>
            </div>
            <div className="statistics-col top-layer">
                statistics-col
                <DatasetPanel text="dataset-panel"/>
            </div>
        </>
    )
}