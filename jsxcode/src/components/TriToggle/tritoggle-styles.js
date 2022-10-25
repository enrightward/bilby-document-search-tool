import styled from "styled-components"

import {
    TriSwitchButtonWidth,
    TriSwitchHeight,
    TriSwitchborderRadiusProportion,
    TriSwitchButtonBackgroundColor,
    TriSwitchBorderColor,
    TriSwitchTextColor,
    TriSwitchFontSize,
    TriSwitchSelectedTextColor,
    TriSwitchSelectedButtonColor,
    TriSwitchSelectedBorderColor,
    TriSwitchMoveDuration,
} from "../styleSettings.js"

const computeLabelOffset = (selectedLanguage) => {
    let offset

    switch (selectedLanguage) {
        case "EN":
            offset = "0%"
            break

        case "\u00BD":
            offset = "33.3333%"
            break

        case "中文":
            offset = "66.6666%"
            break

        default:
            offset = "0%"
            break
    }

    return offset
}

const computeBorderRadii = (selectedLanguage) => {
    let topLeft, topRight, bottomLeft, bottomRight
    const square = "0px"
    const round = `calc(${TriSwitchHeight} / ${TriSwitchborderRadiusProportion})`

    if (selectedLanguage === "EN") {
        topLeft = round
        bottomLeft = round
        topRight = square
        bottomRight = square
    } else if (selectedLanguage === "\u00BD") {
        topLeft = square
        bottomLeft = square
        topRight = square
        bottomRight = square
    } else {
        topLeft = square
        bottomLeft = square
        topRight = round
        bottomRight = round
    }

    const borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`
    return borderRadius
}

export const SwitchWrapperStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SwitchButtonStyle = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${TriSwitchButtonWidth};
    height: ${TriSwitchHeight};
    background-color: ${TriSwitchButtonBackgroundColor};
    border-radius: ${(props) => computeBorderRadii(props.language)};
    border: 1px solid ${TriSwitchBorderColor};
    color: ${TriSwitchTextColor};
    font-size: ${TriSwitchFontSize};

    &:hover {
        cursor: pointer;
    }
`

export const SwitchLabelStyle = styled.span`
    position: absolute;
    left: ${(props) => computeLabelOffset(props.selectedLanguage)};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${TriSwitchButtonWidth};
    height: ${TriSwitchHeight};
    color: ${TriSwitchSelectedTextColor};
    border-radius: ${(props) => computeBorderRadii(props.selectedLanguage)};
    border: 1px solid ${TriSwitchSelectedBorderColor};
    background: ${TriSwitchSelectedButtonColor};
    font-size: ${TriSwitchFontSize};
    transition: left ${TriSwitchMoveDuration} ease-out;
`
