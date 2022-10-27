import React, { useState } from "react"
import TriToggle from "../TriToggle/TriToggle.jsx"
import ResultCardCheckBox from "../CheckBox/CheckBox.jsx"
import MetaDataButton from "../MetaDataButton/MetaDataButton.jsx"

import {
    ResultCardOuter,
    ResultCardFlipper,
    ResultCardFlipperInner,
    ResultCardFront,
    ResultCardFrontInner,
    ResultCardBack,
    ResultCardHeader,
    ResultCardTitle,
    ResultCardBodyColumn,
    WebLink,
} from "./result-card-styles.js"

import {
    resultCardURLLength,
} from "../styleSettings.js"

export default function ResultCard( { 
    id,
    index,
    enTitle, 
    enText, 
    zhTitle, 
    zhText, 
    url, 
    highlightedCardId,
    onCardClick, }) {
    const languageOptions = ["EN", "\u00BD", "中文"]
    const [language, setLanguage] = useState("\u00BD")
    const [flipState, setFlipState] = useState("front")
    
    const onTriToggleClick = (val) => {
        setLanguage(val)
    }

    const onFlipClick = (flipState) => {
        if (flipState === "front") {
            setFlipState("back")
        } else if (flipState === "back") {
            setFlipState("front")
        }
        console.log("flip card")
    }

    const displayURL = url.substring(0, resultCardURLLength) + "..."
    const highlighted = (id === highlightedCardId)

    return (
        <ResultCardOuter highlighted={highlighted} className="outer">
            <ResultCardHeader className="header">
                <MetaDataButton onFlipClick={() => onFlipClick(flipState)}/>
                <WebLink href={url} target="_blank">{displayURL}</WebLink>
                <TriToggle
                    key={`triToggle_${index}`}
                    index={index}
                    onTriToggleClick={onTriToggleClick}
                    languageOptions={languageOptions}
                    selectedLanguage={language} />
                <ResultCardCheckBox/>
            </ResultCardHeader>
            <ResultCardFlipper
                onMouseDown={() => onCardClick(id)}
                className="card-flipper">
                <ResultCardFlipperInner
                    flipState={flipState}
                    className="card-flipper-inner">
                    <ResultCardFront>
                        <ResultCardFrontInner selectedLanguage={language}>
                            <ResultCardBodyColumn selectedLanguage={language} columnLanguage={"EN"}>
                                <ResultCardTitle>
                                    {index} {enTitle}
                                </ResultCardTitle>
                                {enText}
                            </ResultCardBodyColumn>
                            <ResultCardBodyColumn selectedLanguage={language} columnLanguage={"中文"}>
                                <ResultCardTitle>
                                    {index} {zhTitle}
                                </ResultCardTitle>
                                {zhText}
                            </ResultCardBodyColumn>
                        </ResultCardFrontInner>
                    </ResultCardFront>
                    <ResultCardBack>
                        Hello backside
                    </ResultCardBack>
                </ResultCardFlipperInner>
            </ResultCardFlipper>
        </ResultCardOuter>
    )
}