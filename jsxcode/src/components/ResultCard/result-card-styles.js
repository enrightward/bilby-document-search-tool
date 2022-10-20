import styled from "styled-components"

import {
    resultCardPadding,
    resultCardColumnPadding,
    resultCardFontSize,
    resultCardBackgrounColor,
    resultCardBorderColor,
    resultCardBorderRadius,
    resultCardWidth,
} from "../styleSettings.js"

export const ResultCardWrapper = styled.div`
    & {
        margin: 0.2rem 0;
        padding: ${resultCardPadding};
        font-size: ${resultCardFontSize};
        background-color: ${resultCardBackgrounColor};
        border: 1px solid ${resultCardBorderColor};
        border-radius: ${resultCardBorderRadius};
        width: ${resultCardWidth};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`
export const ResultCardHeader = styled.div`
    & {
        margin: 0;
        padding: 0;
        width 100%;
        border-bottom: 1px solid #aaa;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const ResultCardBody = styled.div`
    & {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0rem;
    }
`

export const ResultCardBodyColumn = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        max-height: 180px;
        font-size: 0.8rem;
        font-weight: 400;
        margin: 0;
        padding: 0.6rem;
        text-align: justify;
        overflow: hidden;
    }
`

const computePadding = (selectedLanguage, columnLanguage) => {
    let paddingLeft
    let paddingRight
    let paddingTop = resultCardColumnPadding / 2
    let paddingBottom = resultCardColumnPadding / 2

    if (selectedLanguage === columnLanguage) {
        paddingLeft = resultCardColumnPadding
        paddingRight = resultCardColumnPadding
    } else if (selectedLanguage === "\u00BD") {
        if (columnLanguage === "EN") {
            paddingLeft = resultCardColumnPadding
            paddingRight = resultCardColumnPadding / 2
        } else {
            paddingLeft = resultCardColumnPadding / 2
            paddingRight = resultCardColumnPadding
        }
    } else {
        paddingLeft = 0
        paddingRight = 0
        paddingTop = 0
        paddingBottom = 0
    }

    const padding = `${paddingTop}rem ${paddingRight}rem ${paddingBottom}rem ${paddingLeft}rem`
    console.log("PADDING")
    console.log("selectedLanguage", selectedLanguage)
    console.log("columnLanguage", columnLanguage)
    console.log("padding", padding)
    console.log("")
    return padding
}

const computeWidth = (selectedLanguage, columnLanguage) => {
    let width

    if (selectedLanguage === columnLanguage) {
        width = "100%"
    } else if (selectedLanguage === "\u00BD") {
        width = "50%"
    } else {
        width = "0%"
    }

    console.log("PADDING")
    console.log("selectedLanguage", selectedLanguage)
    console.log("columnLanguage", columnLanguage)
    console.log("width", width)
    console.log("")
    return width
}

export const ResultCardBodyColumnEnglish = styled(ResultCardBodyColumn)`
    padding: ${(props) => computePadding(props.selectedLanguage, "EN")};
    width: ${(props) => computeWidth(props.selectedLanguage, "EN")};
`

export const ResultCardBodyColumnChinese = styled(ResultCardBodyColumn)`
    padding: ${(props) => computePadding(props.selectedLanguage, "中文")};
    width: ${(props) => computeWidth(props.selectedLanguage, "中文")};
`
