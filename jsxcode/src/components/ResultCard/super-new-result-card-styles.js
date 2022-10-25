import styled from "styled-components"

import {
    resultCardPadding,
    resultCardFontSize,
    resultCardFontWeight,
    resultCardBackgrounColor,
    resultCardBorderColor,
    resultCardTitleColor,
    resultCardBorderRadius,
    resultCardWidth,
    resultCardColumnGap,
    resultCardTopGap,
    resultCardBottomGap,
    resultCardTitleBuffer,
    resultCardHeaderPadding,
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
        width: 95%;
        margin: 0.2rem 0;
        min-height: 220px;
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
        border: 1px solid orange;
        border-radius: 3px;
        background-color: rgb(52, 140, 61);

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
        border-radius: 3px;

        z-index: 2;
        background-color: rgb(167, 109, 34);
        backface-visibility: hidden;
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
        background-color: rgb(252, 59, 91);
        border-radius: 3px 3px 0 0;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        padding: 0 0.5rem 0.5rem 0.5rem;
        flex: 1;
        background-color: rgb(99, 141, 48);
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
        background-color: rgb(164, 70, 175);
        gap: 0.5rem;
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
        background-color: rgb(182, 155, 21);
        overflow-y: hidden;
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
