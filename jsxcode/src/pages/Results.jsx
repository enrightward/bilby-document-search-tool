import React, { useState } from "react"
import ResultCard from "../components/ResultCard/ResultCard.jsx"
import BlueButton from "../components/BlueButton/BlueButton.jsx"
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

export default function Results( { 
    searchQuery, 
    setSearchQuery, 
    matches, 
    setMatches }) {
    const [highlightedCardId, setHighlightedCardId] = useState("")
    const [datasetIds, setDatasetIds] = useState([])

    const onCardClick = (clickedCardId) => {
        if (clickedCardId === highlightedCardId) {
            setHighlightedCardId("")
        } else {
            setHighlightedCardId(clickedCardId)
        }
        console.log("clicked card index: ", clickedCardId)
    }

    const onCardShift = (clickedCardId) => {

        if (datasetIds.includes(clickedCardId)) {
            setDatasetIds(datasetIds => datasetIds.filter(id => id !== clickedCardId))
        } else {
            setDatasetIds(datasetIds => [...datasetIds, clickedCardId])
        }
    }

    const cardFromMatch = (match, index, inDataset) => {
        return (            
            <ResultCard
                key={`resultCard_${index}`}
                id={`resultCard_${index}`}
                index={index}
                enTitle={match["en_title"]}
                zhTitle={match["title"]}
                enText={match["en_text"]}
                zhText={match["text"]}
                url={match["url"]}
                highlightedCardId={highlightedCardId}
                onCardClick={onCardClick}
                onCardShift={onCardShift}
                inDataset={inDataset}
            />
        )
    }

    const matchCards = matches.map((match, index) => {
        return (
            cardFromMatch(match, index, false)
        )
    })

    const resultCards = matchCards.filter((card) => {
        return !datasetIds.includes(card.props.id)
    })

    const datasetCards = matchCards.filter((card) => { 
        return datasetIds.includes(card.props.id)
    }).map((card) => {
        const newProps = {...card.props, inDataset: true}
        return <ResultCard {...newProps}/>
    })

    const getCurrentCardData = () => {
        const currentCard = resultCards.filter((card) => {
            return card.props.id === highlightedCardId
        })[0]
        const enTitle = currentCard?.props?.enTitle ?? "This card has no title"
        const enText = currentCard?.props?.enText ?? "This card has no text"
        const zhTitle = currentCard?.props?.zhTitle ?? "此卡没有标题"
        const zhText = currentCard?.props?.zhText ?? "这张卡没有文字"
        const result = {enTitle, enText, zhTitle, zhText}
        return result
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
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setMatches={setMatches}
                />
                <ResultsUnderPanel>
                    <BlueButton text="sort by..."/>
                    <BlueButton text="+ data"/>
                </ResultsUnderPanel>
                {resultCards}
            </ResultsColumnWrapper>
            <ResultsColumnWrapper
                minWidth={minTriptychColumnWidth}
                borderColor={lightBorderColor}
                borderRadius={cardBorderRadius}
                backgroundColor={triptychColumnBackgroundColour}
            >
                doc-reader-col
                <MainDocumentCard props={getCurrentCardData()} />
                
            </ResultsColumnWrapper>
            <ResultsColumnWrapper
                minWidth={minTriptychColumnWidth}
                borderColor={lightBorderColor}
                borderRadius={cardBorderRadius}
                backgroundColor={triptychColumnBackgroundColour}
            >
                Dataset column
                {datasetCards}
            </ResultsColumnWrapper>
        </>
    )
}