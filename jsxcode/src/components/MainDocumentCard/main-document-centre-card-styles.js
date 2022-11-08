import styled from "styled-components"

const darkColour = "#111"
const lightColour = "#aaa"
const borderRadius = "3px"

export const MainDocumentCentreCardHeader = styled.div`
    & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        width: 100%;
        background-color: ${darkColour};
        border-bottom: 1px solid ${lightColour};
        padding: ${(props) => props.headerPadding};
        margin: 0rem;
    }
`

export const MainDocumentCentreCardExpandButton = styled.button`
    & {
        height: 25px;
        width: 50px;
        background-color: #555;
        border: none;
        border-radius: ${borderRadius};
        color: white;
        font-size: 0.8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        background-color: #777;
    }

    &:active {
        background-color: #333;
    }
`
