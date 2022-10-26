import React from "react"
import ResultCard from "../components/ResultCard/ResultCard.jsx"
import BlueButton from "../components/BlueButton/BlueButton.jsx"
import DatasetPanel from "../components/DatasetPanel/DatasetPanel.jsx"
import SearchBar from "../components/SearchBar/SearchBar.jsx"
import MainDocumentCard from "../components/MainDocumentCard/MainDocumentCard.jsx"

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
} from "../components/styleSettings.js"


export default function Results( {searchQuery, setSearchQuery, matches} ) {

    const cards = matches.map( (match, index) => {
        return (
            <ResultCard
                key={index}
                listId={index}
                enTitle={match["en_title"]}
                zhTitle={match["title"]}
                enText={match["en_text"]}
                zhText={match["text"]}
            />
        )
    })

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
                    query={searchQuery}
                    setQuery={setSearchQuery}
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