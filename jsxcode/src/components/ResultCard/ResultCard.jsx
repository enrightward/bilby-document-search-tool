import React, { useState } from "react"
// import "./result-card-styles.css"
// import BiToggle from "../BiToggle/BiToggle.jsx"
// import TriToggle from "../TriToggle/TriToggle.jsx"
import RTriToggle from "../TriToggle/RTriToggle.jsx"

// export default function ResultCard({ searchTerm }) {
export default function ResultCard( props ) {
    const [language, setLanguage] = useState("EN")

    const handleChange = (val) => {
        setLanguage(val)
    }

    // background: `rgb(${this.state.r},${this.state.g},${this.state.b})`

    // const resultCardBodyStyle = {
    //     "--lambda": language === "中文" ? 1.0 : 0.0
    // }

    const getCardStyle = (cardLanguage, selectedLanguage) => {
        let lambda
        console.log("selectedLanguage = ", selectedLanguage)
        console.log("cardLanguage = ", cardLanguage)

        if (selectedLanguage === "EN") {
            lambda = 1.0
        } else if (selectedLanguage === "\u00BD") {
            lambda = 0.5
        } else {
            lambda = 0.0
        }

        return {
            "--lambda": lambda
        }
    }

    return (
        <div className="result-card top-layer">
            <div className="result-card-header">
                <h5 className="result-card-url">https://people.cn</h5>
                {/* <BiToggle className="bitoggle" key={props.listId}/> */}
                {/* <TriToggle className="tritoggle" key={props.listId}/> */}
                <RTriToggle key={props.listId} handleChange={handleChange} values={["EN", "\u00BD", "中文"]} selectedLanguage={language} />

            </div>
            <div className="result-card-body" >
                <div className="result-card-body-en" style={getCardStyle("中文", language)}>
                    <h3 className="result-card-title">{props.searchTerm} {props.listId} English title here</h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem quaerat atque aperiam molestias, ex error voluptatibus ut repellat, delectus vero quas, sed rerum? Eius in hic qui? Doloremque voluptates enim itaque incidunt non nemo ullam natus consectetur quod! Aspernatur?
                </div>
                <div className="result-card-body-zh" style={getCardStyle("中文", language)}>
                    <h3 className="result-card-title">凝聚党心民心  永葆生机活力</h3>    
                    這樣由於，印象說法，真實性世界盃詢問軍事明顯看不到沒有民族戰鬥彷彿發表網站，失去明星為您故意事項軟體，提高友情連結服務沉默他還深深否則國有，屏幕創造事實有關感受彷彿我真千萬留學領域得分無限一時，一起。
                </div>
            </div>
        </div>
    )
}

