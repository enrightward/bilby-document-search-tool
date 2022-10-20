import React, { useState } from "react"
// import "./result-card-styles.css"
// import BiToggle from "../BiToggle/BiToggle.jsx"
// import TriToggle from "../TriToggle/TriToggle.jsx"
import RTriToggle from "../TriToggle/RTriToggle.jsx"


import {
    ResultCardWrapper,
    ResultCardHeader,
    ResultCardBody,
    ResultCardBodyColumnEnglish,
    ResultCardBodyColumnChinese,
} from "./result-card-styles.js"

export default function ResultCard( props ) {
    // const [language, setLanguage] = useState("EN")
    const [language, setLanguage] = useState("\u00BD")

    const handleChange = (val) => {
        setLanguage(val)
    }

    // const getCardStyle = (cardLanguage, selectedLanguage) => {
    //     let lambda
    //     console.log("selectedLanguage = ", selectedLanguage)
    //     console.log("cardLanguage = ", cardLanguage)

    //     if (selectedLanguage === "EN") {
    //         lambda = 1.0
    //     } else if (selectedLanguage === "\u00BD") {
    //         lambda = 0.5
    //     } else {
    //         lambda = 0.0
    //     }

    //     return {
    //         "--lambda": lambda
    //     }
    // }

    return (
        <ResultCardWrapper>
            <ResultCardHeader>
                {/* <h5 className="result-card-url">https://people.cn</h5> */}
                <h5>https://people.cn</h5>
                {/* <BiToggle className="bitoggle" key={props.listId}/> */}
                {/* <TriToggle className="tritoggle" key={props.listId}/> */}
                <RTriToggle key={props.listId} handleChange={handleChange} values={["EN", "\u00BD", "中文"]} selectedLanguage={language} />
            </ResultCardHeader>
            <ResultCardBody>
                {/* <div className="result-card-body-en" style={getCardStyle("中文", language)}> */}
                <ResultCardBodyColumnEnglish selectedLanguage={language}>
                    <h3 className="result-card-title">{props.searchTerm} {props.listId} English title here</h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem quaerat atque aperiam molestias, ex error voluptatibus ut repellat, delectus vero quas, sed rerum? Eius in hic qui? Doloremque voluptates enim itaque incidunt non nemo ullam natus consectetur quod! Aspernatur?
                </ResultCardBodyColumnEnglish>
                {/* <div className="result-card-body-zh" style={getCardStyle("中文", language)}> */}
                <ResultCardBodyColumnChinese selectedLanguage={language}>
                    <h3 className="result-card-title">凝聚党心民心  永葆生机活力</h3>
                    這樣由於，印象說法，真實性世界盃詢問軍事明顯看不到沒有民族戰鬥彷彿發表網站，失去明星為您故意事項軟體，提高友情連結服務沉默他還深深否則國有，屏幕創造事實有關感受彷彿我真千萬留學領域得分無限一時，一起。
                </ResultCardBodyColumnChinese>
            </ResultCardBody>
        </ResultCardWrapper>
    )
}

