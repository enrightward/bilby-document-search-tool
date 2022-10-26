import styled from "styled-components"

import {
    resultCardSeparation,
    resultCardFontSize,
    resultCardFontWeight,
    resultCardBackgroundColor,
    resultCardHeaderBackgroundColor,
    resultCardHeaderHeight,
    resultCardHeaderPadding,
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
    resultCardFlipDuration,
} from "../styleSettings.js"

export const ResultCardOuter = styled.div`
    & {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: ${resultCardWidth};
        margin: ${resultCardSeparation} 0;
        min-height: ${minResultCardHeight};
        max-height: ${maxResultCardHeight};
        border: 1px solid ${resultCardBorderColor};
        border-radius: ${resultCardBorderRadius};
        background-color: none;
        perspective: 10000px;
    }
`

export const ResultCardHeader = styled.div`
    & {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: ${resultCardHeaderHeight};
        padding: 0 ${resultCardHeaderPadding};
        background-color: ${resultCardHeaderBackgroundColor};
        border-radius: ${resultCardBorderRadius} ${resultCardBorderRadius} 0 0;
        border-bottom: 1px solid ${resultCardBorderColor};
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

export const ResultCardFlipper = styled.div`
    & {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: none;
    }
`

const computeRotation = (flipState) => {
    let rotation

    if (flipState === "front") {
        rotation = "0deg"
    } else if (flipState === "back") {
        rotation = "180deg"
    }
    return rotation
}

export const ResultCardFlipperInner = styled.div`
    & {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: none;
        transition: all ${resultCardFlipDuration} linear;
        transform-style: preserve-3d;
        transform: rotateY(${(props) => computeRotation(props.flipState)});
    }
`

export const ResultCardFront = styled.div`
    & {
        padding: ${resultCardTopTextIndent} ${resultCardSideTextIndent}
            ${resultCardBottomTextIndent} ${resultCardSideTextIndent};
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 0 0 ${resultCardBorderRadius} ${resultCardBorderRadius};
        backface-visibility: hidden;
        background-color: ${resultCardBackgroundColor};
        z-index: 2;
    }
`

export const ResultCardBack = styled(ResultCardFront)`
    & {
        transform: rotateY(180deg);
        background-color: ${resultCardBackgroundColor};
        backface-visibility: visible;
        z-index: 1;
    }
`

const computeGap = (selectedLanguage) => {
    const gap = selectedLanguage === "\u00BD" ? resultCardColumnGap : "0rem"
    return gap
}

export const ResultCardFrontInner = styled.div`
    & {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: ${resultCardBackgroundColor};
        gap: ${(props) => computeGap(props.selectedLanguage)};
        overflow-y: hidden;
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

const computeWidth = (selectedLanguage, columnLanguage) => {
    let width

    if (selectedLanguage === columnLanguage) {
        width = "100%"
    } else if (selectedLanguage === "\u00BD") {
        width = "50%"
    } else {
        width = "0"
    }
    return width
}

export const ResultCardBodyColumn = styled.div`
    & {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0;
        margin: 0;
        width: 100%;
        width: ${(props) =>
            computeWidth(props.selectedLanguage, props.columnLanguage)};
        height: 100%;
        text-align: justify;
        font-size: ${resultCardFontSize};
        font-weight: ${resultCardFontWeight};
        background-color: ${resultCardBackgroundColor};
        overflow: hidden;
    }
`
