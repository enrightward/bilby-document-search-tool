import React, { useState, useEffect } from "react"
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

const computeResultCardId = ( index ) => {
    return `resultCard_${index}`
}

export default function Results( { 
    searchQuery, 
    setSearchQuery, 
    matches, 
    setMatches }) {
    const [highlightedCardId, setHighlightedCardId] = useState("")
    const [datasetIds, setDatasetIds] = useState([])
    const [allBoxChecked, setAllBoxChecked] = useState(false)
    const [noneBoxChecked, setNoneBoxChecked] = useState(false)
    const [resultCardCheckList, setResultCardChecklist] = useState([])

    const updateCardCheckStates = (matches, isChecked) => {

        const result = matches.map((match, index) => {
            return { id: computeResultCardId(index), checked: isChecked }
        })

        return result
    }

    useEffect(() => {
        setResultCardChecklist(updateCardCheckStates(matches, allBoxChecked))
    }, [matches, allBoxChecked])

    const onCardClick = (clickedCardId) => {

        if (clickedCardId === highlightedCardId) {
            setHighlightedCardId("")
        } else {
            setHighlightedCardId(clickedCardId)
        }
    }

    const onCardShift = (clickedCardId) => {

        if (datasetIds.includes(clickedCardId)) {
            setDatasetIds(datasetIds => datasetIds.filter(id => id !== clickedCardId))
        } else {
            setDatasetIds(datasetIds => [...datasetIds, clickedCardId])
        }
    }

    const onCardCheckboxChange = (clickedCardId) => {
        const newResultCardCheckList = resultCardCheckList.map((datum) => {
            let entry

            if (datum.id === clickedCardId) {
                entry = {id: datum.id, checked: !datum.checked}
            } else {
                entry = {id: datum.id, checked: datum.checked}
            }

            return entry
        })
        setResultCardChecklist(prevResultCardCheckList => newResultCardCheckList)
    }

    const cardFromMatch = (match, index, inDataset) => {
        return (            
            <ResultCard
                key={computeResultCardId(index)}
                id={computeResultCardId(index)}
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
                onCardCheckboxChange={onCardCheckboxChange}
                resultCardCheckList={resultCardCheckList}
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

    const onAddSelectedClick = () => {
        const checkedCardIds = resultCardCheckList.filter((datum) => {
            return datum.checked
        }).map((datum) => {
            return datum.id
        })
        setDatasetIds(datasetIds => [...datasetIds, ...checkedCardIds])
    }

    const onAllBoxChange = () => {
        setAllBoxChecked(!allBoxChecked)

        if (noneBoxChecked) {
            setNoneBoxChecked(false)
        }
    }

    const onNoneBoxChange = () => {
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
                    onCheckBoxChange={onAllBoxChange}
                    checked={allBoxChecked}
                />
                <label htmlFor="noneCheckbox">none</label>
                <BilbyCheckBox 
                    name="noneCheckbox"
                    onCheckBoxChange={onNoneBoxChange}
                    checked={noneBoxChecked}
                />
                <AddSelectedButton
                    onClick={onAddSelectedClick}>
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