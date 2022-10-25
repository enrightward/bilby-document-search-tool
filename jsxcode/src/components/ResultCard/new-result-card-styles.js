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
        position: relative;
        overflow: hidden;
        margin: 0.2rem 0;
        padding: 0;
        font-size: ${resultCardFontSize};
        font-weight: ${resultCardFontWeight};
        border-radius: ${resultCardBorderRadius};
        width: ${resultCardWidth};
        min-height: ${minResultCardHeight};
        max-height: ${maxResultCardHeight};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        perspective: 10000px;
    }

    &:hover .inner {
        transform: rotateY(180deg);
    }
`

export const ResultCardInner = styled.div`
    & {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;

        background-color: ${resultCardBackgrounColor};
        background-color: none;
        border: 1px solid ${resultCardBorderColor};
        border-radius: ${resultCardBorderRadius};

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;

        transition: all 0.2s linear;
        transform-style: preserve-3d;
    }
`

export const ResultCardFront = styled(ResultCardOuter)`
    & {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        // background-color: blue;
        border: none;
        border-radius: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        backface-visibility: hidden;
        z-index: 2;
    }
`

export const ResultCardBack = styled(ResultCardFront)`
    & {
        z-index: 1;
        background-color: green;
        transform: rotateY(180deg);
    }
`

export const ResultCardHeader = styled.div`
    & {
        margin: 0;
        padding: ${resultCardHeaderPadding};
        width 100%;
        border-bottom: 1px solid #aaa;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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

export const ResultCardBody = styled.div`
    & {
        display: flex;
        // flex: 1;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: flex-start;
        padding: 0 0.2rem 0rem 0.2rem;
        // background-color: ${resultCardBackgrounColor};
        background-color: purple;
        overflow-y: hidden;
    }

    &:active {
        border: 1px solid red;
    }
`

const computeGap = (selectedLanguage) => {
    const gap = selectedLanguage === "\u00BD" ? resultCardColumnGap : "0rem"
    return gap
}

export const ResultCardBodyInner = styled.div`
    & {
        width: 100%;
        height: 95%;
        display: flex;
        flex-direction: row;
        gap: ${(props) => computeGap(props.selectedLanguage)};
        justify-content: center;
        align-items: flex-start;
        padding: ${resultCardTopGap} 0 ${resultCardBottomGap} 0;
        // background-color: ${resultCardBackgrounColor};
        background-color: pink;
        overflow-y: hidden;
    }
`

export const ResultCardBodyColumn = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: justify;
        margin: 0;
        padding: 0;
        overflow-y: hidden;
        background-color: ${resultCardBackgrounColor};
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
