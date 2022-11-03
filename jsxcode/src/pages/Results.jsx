import React, { useState } from "react"
import ResultCard from "../components/ResultCard/ResultCard.jsx"
import BilbyCheckBox from "../components/CheckBox/CheckBox.jsx"
import SearchBar from "../components/SearchBar/SearchBar.jsx"
import MainDocumentCard from "../components/MainDocumentCard/MainDocumentCard.jsx"

import {
    ResultsColumnWrapper,
    ResultsUnderPanel,
    AddSelectedButton,
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
    const [allBoxChecked, setAllBoxChecked] = useState(false)
    const [noneBoxChecked, setNoneBoxChecked] = useState(false)

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

    const onCardCheckboxChange = (clickedCardId, checked) => {
        console.log("checkbox clicked: ")
        console.log(clickedCardId)
        setResultCardChecklist(resultCardCheckList.map(datum => { 
            let entry

            if (datum.id === clickedCardId) {
                entry = {id: datum.id, checked: checked}
            } else {
                entry = {id: datum.id, checked: datum.checked}
            }

            return entry
        }))

        console.log("resultCardChecklist")
        console.log(resultCardCheckList)
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
                checkedCards={undefined}
                onCardCheckboxChange={onCardCheckboxChange}
            />
        )
    }

    const matchCards = matches.map((match, index) => {
        return (
            cardFromMatch(match, index, false)
        )
    })

    const [resultCardCheckList, setResultCardChecklist] = useState(matchCards.map((card) => {
        return { id: card.props.id, checked: false }
    }))

    const resultCards = matchCards.filter((card) => {
        return !datasetIds.includes(card.props.id)
    })
    
    // .map((card) => {
    //     const newProps = {...card.props, checkedCards: resultCardCheckList}
    //     return <ResultCard {...newProps}/>
    // })

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

    const onAllBoxChecked = () => {
        console.log("all box checked")
        setAllBoxChecked(!allBoxChecked)

        if (noneBoxChecked) {
            setNoneBoxChecked(false)
        }
    }

    const onNoneBoxChecked = () => {
        setNoneBoxChecked(!noneBoxChecked)

        if (allBoxChecked) {
            setAllBoxChecked(false)
        }
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
                <label htmlFor="allCheckbox">all</label>
                <BilbyCheckBox 
                    name="allCheckbox"
                    onCheckBoxChange={onAllBoxChecked}
                    checked={allBoxChecked}
                />
                <label htmlFor="noneCheckbox">none</label>
                <BilbyCheckBox 
                    name="noneCheckbox"
                    onCheckBoxChange={onNoneBoxChecked}
                    checked={noneBoxChecked}
                />
                <AddSelectedButton>
                    Add Selected
                </AddSelectedButton>
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