import styled from "styled-components"

import {
    resultCardSeparation,
    resultCardFontSize,
    resultCardFontWeight,
    resultCardBackgroundColor,
    resultCardHeaderBackgroundColor,
    resultCardBorderColor,
    resultCardTitleColor,
    resultCardBorderRadius,
    resultCardWidth,
    resultCardColumnGap,
    resultCardTopTextIndent,
    resultCardBottomTextIndent,
    resultCardSideTextIndent,
    resultCardTitleBuffer,
    webLinkColor,
    webLinkFontSize,
    webLinkFontWeight,
    minResultCardHeight,
    maxResultCardHeight,
} from "../styleSettings.js"

export const ResultCardOuter = styled.div`
    & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: ${resultCardWidth};
        margin: ${resultCardSeparation} 0;
        min-height: ${minResultCardHeight};
        max-height: ${maxResultCardHeight};
        background-color: none;
        perspective: 10000px;
    }

    &:hover .inner {
        transform: rotateY(180deg);
    }
`

export const ResultCardInner = styled.div`
    & {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: ${resultCardBackgroundColor};
        transition: all 0.2s linear;
        transform-style: preserve-3d;
    }
`

export const ResultCardFront = styled.div`
    & {
        position: absolute;
        display: flex;
        flex-direction: column;
        /* header starts up top of page */
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: ${resultCardBorderRadius};
        border: 1px solid ${resultCardBorderColor};
        backface-visibility: hidden;
        z-index: 2;
    }
`

export const ResultCardBack = styled(ResultCardFront)`
    & {
        z-index: 1;
        background-color: rgb(34, 92, 167);
        backface-visibility: visible;
        transform: rotateY(180deg);
    }
`

export const ResultCardHeader = styled.div`
    & {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 20%;
        padding: 0 10px;
        background-color: ${resultCardHeaderBackgroundColor};
        border-radius: ${resultCardBorderRadius} ${resultCardBorderRadius} 0 0;
        border-bottom: 1px solid black;
    }
`

export const ResultCardTitle = styled.h3`
    & {
        margin: 0;
        padding: 0 0 ${resultCardTitleBuffer} 0;
        width 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${resultCardTitleColor};
    }
`

export const WebLink = styled.a`
    & {
        color: ${webLinkColor};
        font-size: ${webLinkFontSize};
        font-weight: ${webLinkFontWeight};
        text-decoration: underline;
    }
`

export const ResultCardBody = styled.div`
    & {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        padding: ${resultCardTopTextIndent} ${resultCardSideTextIndent}
            ${resultCardBottomTextIndent} ${resultCardSideTextIndent};
        border-radius: 0 0 ${resultCardBorderRadius} ${resultCardBorderRadius};
        overflow-y: scroll;
    }
`

export const ResultCardBodyInner = styled.div`
    & {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: ${resultCardColumnGap};
        font-size: ${resultCardFontSize};
        font-weight: ${resultCardFontWeight};
    }
`

export const ResultCardBodyColumn = styled.div`
    & {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        text-align: justify;
    }
`

const computeWidth = (selectedLanguage, columnLanguage) => {
    let width

    if (selectedLanguage === columnLanguage) {
        width = "100%"
    } else if (selectedLanguage === "\u00BD") {
        width = "50%"
    } else {
        width = "0%"
    }
    return width
}

export const ResultCardBodyColumnEnglish = styled(ResultCardBodyColumn)`
    width: ${(props) => computeWidth(props.selectedLanguage, "EN")};
`

export const ResultCardBodyColumnChinese = styled(ResultCardBodyColumn)`
    width: ${(props) => computeWidth(props.selectedLanguage, "中文")};
`
