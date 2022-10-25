import styled from "styled-components"

import {
    metaDataFontSize,
    metaDataPadding,
    metaDataFontWeight,
    metaDataBackgrounColor,
    metaDataBorderColor,
    metaDataBorderRadius,
    metaDataWidth,
    metaDataHeight,
} from "../styleSettings.js"

export const MetaDataButtonStyle = styled.button`
    & {
        margin: 0.2rem 0;
        padding: ${metaDataPadding};
        font-size: ${metaDataFontSize};
        font-weight: ${metaDataFontWeight};
        background-color: ${metaDataBackgrounColor};
        border: 1px solid ${metaDataBorderColor};
        border-radius: ${metaDataBorderRadius};
        width: ${metaDataWidth};
        height: ${metaDataHeight};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        cursor: pointer;
    }

    &:active {
        border: 1px solid red;
    }
`
