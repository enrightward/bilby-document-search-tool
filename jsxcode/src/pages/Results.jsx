import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import ResultCard from "../components/ResultCard/ResultCard.jsx"
import BlueButton from "../components/BlueButton/BlueButton.jsx"
import DatasetPanel from "../components/DatasetPanel/DatasetPanel.jsx"
import SearchBar from "../components/SearchBar/SearchBar.jsx"

import MainDocumentCard from "../components/MainDocumentCard/MainDocumentCard.jsx"
// import "./results-page-styles.css"

import {
    ResultsColumnWrapper,
    ResultsUnderPanel,
} from "./results-page-styles.js"

import {
    searchBarHeight,
    resultSearchBarWidth,
    minTriptychColumnWidth,
    lightBorderColor,
    cardBorderRadius,
    triptychColumnBackgroundColour,
    numResults,
} from "../components/styleSettings.js"

export default function Results() {
    const [query, setQuery] = useState("")
    const location = useLocation()
    const searchTerm = location.state.searchTerm
    const cards = []

    for (let i = 0; i < numResults; i++) {
        cards.push(<ResultCard searchTerm={searchTerm} key={i} listId={i} />)
    }

    return (
        <>
            <ResultsColumnWrapper
                minWidth={minTriptychColumnWidth}
                borderColor={lightBorderColor}
                borderRadius={cardBorderRadius}
                backgroundColor={triptychColumnBackgroundColour}
            >
                <SearchBar 
                    width={resultSearchBarWidth}
                    height={searchBarHeight}
                    query={query}
                    setQuery={setQuery}
                />
                <ResultsUnderPanel>
                    <BlueButton text="sort by..."/>
                    <BlueButton text="+ data"/>
                </ResultsUnderPanel>
                {cards}
            </ResultsColumnWrapper>
            <ResultsColumnWrapper
                minWidth={minTriptychColumnWidth}
                borderColor={lightBorderColor}
                borderRadius={cardBorderRadius}
                backgroundColor={triptychColumnBackgroundColour}
            >
                doc-reader-col
                <MainDocumentCard/>
            </ResultsColumnWrapper>
            <ResultsColumnWrapper
                minWidth={minTriptychColumnWidth}
                borderColor={lightBorderColor}
                borderRadius={cardBorderRadius}
                backgroundColor={triptychColumnBackgroundColour}
            >
                statistics-col
                <DatasetPanel text="dataset-panel"/>
            </ResultsColumnWrapper>
        </>
    )
}