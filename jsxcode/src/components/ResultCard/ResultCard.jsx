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

export default function ResultCard( { 
    listId, 
    enTitle, 
    enText, 
    zhTitle, 
    zhText } 
    ) {
    const languageOptions = ["EN", "\u00BD", "中文"]
    const [language, setLanguage] = useState("\u00BD")
    const [flipState, setFlipState] = useState("front")
    
    const handleChange = (val) => {
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

    return (
        <ResultCardOuter className="outer">
            <ResultCardHeader className="header">
                <MetaDataButton onFlipClick={() => onFlipClick(flipState)}/>
                <WebLink href="https://people.cn">https://people.cn</WebLink>
                <TriToggle key={listId} handleChange={handleChange} languageOptions={languageOptions} selectedLanguage={language} />
                <ResultCardCheckBox/>
            </ResultCardHeader>
            <ResultCardFlipper className="card-flipper">
                <ResultCardFlipperInner flipState={flipState} className="card-flipper-inner">
                    <ResultCardFront>
                        <ResultCardFrontInner selectedLanguage={language}>
                            <ResultCardBodyColumn selectedLanguage={language} columnLanguage={"EN"}>
                                <ResultCardTitle>
                                    {listId} {enTitle}
                                </ResultCardTitle>
                                {enText}
                                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem quaerat atque aperiam molestias, ex error voluptatibus ut repellat, delectus vero quas, sed rerum? Eius in hic qui? Doloremque voluptates enim itaque incidunt non nemo ullam natus consectetur quod! Aspernatur? */}
                            </ResultCardBodyColumn>
                            <ResultCardBodyColumn selectedLanguage={language} columnLanguage={"中文"}>
                                <ResultCardTitle>
                                    {listId} {zhTitle}
                                </ResultCardTitle>
                                {zhText}
                                {/* 這樣由於，印象說法，真實性世界盃詢問軍事明顯看不到沒有民族戰鬥彷彿發表網站，失去明星為您故意事項軟體，提高友情連結服務沉默他還深深否則國有，屏幕創造事實有關感受彷彿我真千萬留學領域得分無限一時，一起。 */}
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