import React, { useState } from "react"
import NewTriToggle from "../TriToggle/TriToggle.jsx"
import ResultCardCheckBox from "../CheckBox/CheckBox.jsx"
import MetaDataButton from "../MetaDataButton/MetaDataButton.jsx"

import {
    ResultCardOuter,
    ResultCardInner,
    ResultCardFront,
    ResultCardBack,
    ResultCardHeader,
    ResultCardTitle,
    ResultCardBody,
    ResultCardBodyInner,
    ResultCardBodyColumnEnglish,
    ResultCardBodyColumnChinese,
    WebLink,
} from "./super-new-result-card-styles.js"
// } from "./result-card-styles.js"


export default function ResultCard( props ) {
    const languageOptions = ["EN", "\u00BD", "中文"]
    const [language, setLanguage] = useState("\u00BD")
    
    const handleChange = (val) => {
        setLanguage(val)
    }

    return (
        <ResultCardOuter className="outer">
            <ResultCardInner className="inner">
                <ResultCardFront>
                    <ResultCardHeader className="header">
                        <MetaDataButton/>
                            <WebLink href="https://people.cn">https://people.cn</WebLink>
                            <NewTriToggle key={props.listId} handleChange={handleChange} languageOptions={languageOptions} selectedLanguage={language} />
                        <ResultCardCheckBox/>
                    </ResultCardHeader>
                    <ResultCardBody className="body">
                        <ResultCardBodyInner selectedLanguage={language} className="inner">
                            <ResultCardBodyColumnEnglish selectedLanguage={language}>
                                <ResultCardTitle>
                                    {props.searchTerm} {props.listId} English title here
                                </ResultCardTitle>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem quaerat atque aperiam molestias, ex error voluptatibus ut repellat, delectus vero quas, sed rerum? Eius in hic qui? Doloremque voluptates enim itaque incidunt non nemo ullam natus consectetur quod! Aspernatur?
                            </ResultCardBodyColumnEnglish>
                            <ResultCardBodyColumnChinese selectedLanguage={language}>
                                <ResultCardTitle>
                                    {props.searchTerm} {props.listId} 凝聚党心民心 永葆生机活力
                                </ResultCardTitle>
                                這樣由於，印象說法，真實性世界盃詢問軍事明顯看不到沒有民族戰鬥彷彿發表網站，失去明星為您故意事項軟體，提高友情連結服務沉默他還深深否則國有，屏幕創造事實有關感受彷彿我真千萬留學領域得分無限一時，一起。
                            </ResultCardBodyColumnChinese>
                        </ResultCardBodyInner>
                    </ResultCardBody>
                </ResultCardFront>
                <ResultCardBack>
                    Hello backside
                </ResultCardBack>
            </ResultCardInner>
        </ResultCardOuter>
    )
}


// return (
//     <ResultCardOuter className="wrapper">
//         <ResultCardInner>
//             <ResultCardFront className="front">
//                 <ResultCardHeader className="header">
                //     <MetaDataButton/>
                //     <WebLink href="https://people.cn">https://people.cn</WebLink>
                //     <NewTriToggle key={props.listId} handleChange={handleChange} languageOptions={languageOptions} selectedLanguage={language} />
                //     <ResultCardCheckBox/>
                // </ResultCardHeader>
                // <ResultCardBody className="body">
                //     <ResultCardBodyInner selectedLanguage={language} className="inner">
                //         <ResultCardBodyColumnEnglish selectedLanguage={language}>
                //             <ResultCardTitle>
                //                 {props.searchTerm} {props.listId} English title here
                //             </ResultCardTitle>
                //             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem quaerat atque aperiam molestias, ex error voluptatibus ut repellat, delectus vero quas, sed rerum? Eius in hic qui? Doloremque voluptates enim itaque incidunt non nemo ullam natus consectetur quod! Aspernatur?
                //         </ResultCardBodyColumnEnglish>
                //         <ResultCardBodyColumnChinese selectedLanguage={language}>
                //             <ResultCardTitle>
                //                 {props.searchTerm} {props.listId} 凝聚党心民心 永葆生机活力
                //             </ResultCardTitle>
                //             這樣由於，印象說法，真實性世界盃詢問軍事明顯看不到沒有民族戰鬥彷彿發表網站，失去明星為您故意事項軟體，提高友情連結服務沉默他還深深否則國有，屏幕創造事實有關感受彷彿我真千萬留學領域得分無限一時，一起。
                //         </ResultCardBodyColumnChinese>
                //     </ResultCardBodyInner>
                // </ResultCardBody>
//             </ResultCardFront>
//             <ResultCardBack>
//                 Hello backside
//             </ResultCardBack>
//         </ResultCardInner>
//     </ResultCardOuter>
// )