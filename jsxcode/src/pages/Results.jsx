import React, { useState, useEffect } from "react"
import ResultCard from "../components/ResultCard/ResultCard.jsx"
import BilbyCheckBox from "../components/CheckBox/CheckBox.jsx"
import SearchBar from "../components/SearchBar/SearchBar.jsx"
import MainDocumentCard from "../components/MainDocumentCard/MainDocumentCard.jsx"
import MainDocumentModal from "../components/MainDocumentModal/MainDocumentModal.jsx"

import {
    ResultsColumnWrapper,
    ResultsUnderPanel,
    AddSelectedButton,
    RemoveSelectedButton,
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
    const [showDocumentModal, setShowDocumentModal] = useState(false)
    const [allResultsBoxChecked, setAllResultsBoxChecked] = useState(false)
    const [noneResultsBoxChecked, setNoneResultsBoxChecked] = useState(false)
    const [allDatasetBoxChecked, setAllDatasetBoxChecked] = useState(false)
    const [noneDatasetBoxChecked, setNoneDatasetBoxChecked] = useState(false)
    const [resultCardCheckList, setResultCardChecklist] = useState([])
    const [datasetCardCheckList, setDatasetCardChecklist] = useState([])
    const [datasetIds, setDatasetIds] = useState([])

    const updateAllNoneCardCheckStates = (matches, allChecked) => {

        const result = matches.map((match, index) => {
            return { id: computeResultCardId(index), checked: allChecked }
        })

        return result
    }

    useEffect(() => {
        setResultCardChecklist(updateAllNoneCardCheckStates(matches, allResultsBoxChecked))
        setDatasetCardChecklist(updateAllNoneCardCheckStates(matches, allDatasetBoxChecked))
    }, [matches, allResultsBoxChecked, noneResultsBoxChecked, allDatasetBoxChecked, noneDatasetBoxChecked])

    const onCardFaceClick = (clickedCardId) => {

        if (clickedCardId === highlightedCardId) {
            setHighlightedCardId("")
        } else {
            setHighlightedCardId(clickedCardId)
        }
    }

    const onCardCheckboxChange = (clickedCardId) => {
        const isDatasetCard = datasetIds.includes(clickedCardId)
        const cardCheckList = isDatasetCard ? datasetCardCheckList : resultCardCheckList
        const setCardCheckList = isDatasetCard ? setDatasetCardChecklist : setResultCardChecklist

        const newCardCheckList = cardCheckList.map((datum) => {
            let entry

            if (datum.id === clickedCardId) {
                entry = {id: datum.id, checked: !datum.checked}
            } else {
                entry = {id: datum.id, checked: datum.checked}
            }

            return entry
        })
        setCardCheckList(prevCardCheckList => newCardCheckList)
    }

    function cardFromMatch(match, index) {
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
                onCardFaceClick={onCardFaceClick}
                onCardShift={onCardAddRemove}
                datasetIds={datasetIds}
                onCardCheckboxChange={onCardCheckboxChange}
                resultCardCheckList={resultCardCheckList}
                datasetCardCheckList={datasetCardCheckList}
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
        const newProps = {...card.props}
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

    const resetAllNone = () => {
        setAllResultsBoxChecked(false)
        setNoneResultsBoxChecked(false)
        setAllDatasetBoxChecked(false)
        setNoneDatasetBoxChecked(false)
    }

    function onCardAddRemove(clickedCardId) {

        if (datasetIds.includes(clickedCardId)) {
            setDatasetCardChecklist(datasetCardCheckList => datasetCardCheckList.filter(datum => datum.id !== clickedCardId))
            setDatasetIds(datasetIds => datasetIds.filter(id => id !== clickedCardId))
        } else {
            setResultCardChecklist(resultCardCheckList => resultCardCheckList.filter(datum => datum.id !== clickedCardId))
            setDatasetIds(datasetIds => [...datasetIds, clickedCardId])
        }
    }

    const onAddSelectedClick = () => {
        const checkedResultCardIds = resultCardCheckList.filter((datum) => {
            return datum.checked
        }).map((datum) => {
            return datum.id
        })
        // uncheck all the result cards
        setResultCardChecklist(updateAllNoneCardCheckStates(matches, false))
        // append the ids of the newly added cards to the datasetIds
        setDatasetIds(datasetIds => [...datasetIds, ...checkedResultCardIds])
        // reset all the all/none checkboxes
        resetAllNone()
    }

    const onRemoveSelectedClick = () => {
        const checkedDatasetCardIds = datasetCardCheckList.filter((datum) => {
            return datum.checked
        }).map((datum) => {
            return datum.id
        })
        // uncheck all the dataset cards
        setDatasetCardChecklist(updateAllNoneCardCheckStates(matches, false))        
        // delete the ids of the newly removed cards from the datasetIds
        setDatasetIds(datasetIds => datasetIds.filter(id => !checkedDatasetCardIds.includes(id)))
        // reset all the all/none checkboxes
        resetAllNone()
    }

    const onAllResultsBoxChange = () => {
        setAllResultsBoxChecked(!allResultsBoxChecked)

        if (noneResultsBoxChecked) {
            setNoneResultsBoxChecked(false)
        }
    }

    const onAllDatasetBoxChange = () => {
        setAllDatasetBoxChecked(!allDatasetBoxChecked)

        if (noneDatasetBoxChecked) {
            setNoneDatasetBoxChecked(false)
        }
    }

    const onNoneResultsBoxChange = () => {
        setNoneResultsBoxChecked(!noneResultsBoxChecked)

        if (allResultsBoxChecked) {
            setAllResultsBoxChecked(false)
        }
    }

    const onNoneDatasetBoxChange = () => {
        setNoneDatasetBoxChecked(!noneDatasetBoxChecked)

        if (allDatasetBoxChecked) {
            setAllDatasetBoxChecked(false)
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
                <label htmlFor="allResultsCheckbox">all</label>
                <BilbyCheckBox 
                    name="allResultsCheckbox"
                    onCheckBoxChange={onAllResultsBoxChange}
                    checked={allResultsBoxChecked}
                />
                <label htmlFor="noneResultsCheckbox">none</label>
                <BilbyCheckBox 
                    name="noneResultsCheckbox"
                    onCheckBoxChange={onNoneResultsBoxChange}
                    checked={noneResultsBoxChecked}
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
            <MainDocumentCard {...getCurrentCardData()} setShowDocumentModal={setShowDocumentModal}/>
            </ResultsColumnWrapper>
            <ResultsColumnWrapper
                minWidth={minTriptychColumnWidth}
                borderColor={lightBorderColor}
                borderRadius={cardBorderRadius}
                backgroundColor={triptychColumnBackgroundColour}
            >
                Dataset column
                <ResultsUnderPanel>
                <label htmlFor="allDatasetCheckbox">all</label>
                <BilbyCheckBox 
                    name="allDatasetCheckbox"
                    onCheckBoxChange={onAllDatasetBoxChange}
                    checked={allDatasetBoxChecked}
                />
                <label htmlFor="noneDatasetCheckbox">none</label>
                <BilbyCheckBox 
                    name="noneDatasetCheckbox"
                    onCheckBoxChange={onNoneDatasetBoxChange}
                    checked={noneDatasetBoxChecked}
                />
                <RemoveSelectedButton
                    onClick={onRemoveSelectedClick}>
                    Remove Selected
                </RemoveSelectedButton>
                </ResultsUnderPanel>
                {datasetCards}
            </ResultsColumnWrapper>
            
            <MainDocumentModal {...getCurrentCardData()} show={showDocumentModal} setShow={setShowDocumentModal} />
        </>
    )
}