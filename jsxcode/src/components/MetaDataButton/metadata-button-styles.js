import styled from "styled-components"

import { resultCardBorderColor } from "../styleSettings.js"

const metaDataFontSize = "0.8rem"
const metaDataPadding = "0.2rem 0.5rem"
const metaDataFontWeight = 800
// const metaDataCardBackgrounColor = "#333"
const metaDataBackgrounColor = "#eee"
const metaDataBorderColor = "#aaa"
const metaDataBorderRadius = "3px"
const metaDataWidth = "35px"
const metaDataHeight = "20px"
// const metaDataIcon =
// "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-bracket-coding-tanah-basah-basic-outline-tanah-basah.png"
// const metaDataIcon = "https://img.icons8.com/ios/50/FFFFFF/tag-window.png"
const metaDataIcon = "https://img.icons8.com/fluency/48/000000/tag.png"

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
        // background-image: url(${metaDataIcon});
        // background-size: 60%;
        // background-position: center;
        // background-repeat: no-repeat;
    }

    &:active {
        border: 1px solid red;
    }
`

// background-size: 60%;
// background-image: url(${(props) => props.searchIcon});
// display: inline-block;
// width: 100%;
// height: 100%;
// background-position: center;
// background-repeat: no-repeat;
