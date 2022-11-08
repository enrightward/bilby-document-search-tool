import styled from "styled-components"

const borderRadius = "3px"
const darkColour = "#111"
const lightColour = "#aaa"

export const MainDocumentCardDiv = styled.div`
    & {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 95%;
        width: 95%;
        // max-width: min(80%, 900px);
        // height: 80%;
        // background-color: ${darkColour};
        padding: 0;
        border-radius: ${borderRadius};
        border: 1px solid ${lightColour};
    }
`

export const MainDocumentCardHeader = styled.div`
    & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        width: 100%;
        background-color: ${darkColour};
        border-bottom: 1px solid ${lightColour};
        padding: 1.15rem;
        margin: 0rem;
    }
`

export const MainDocumentCardBody = styled.div`
    & {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        background-color: ${darkColour};
        // background-color: green;
        width: 100%;
        height: 100%;
        padding: 0.5rem 1.5rem 1.5rem 1.5rem;
        overflow-y: scroll;
        gap: 1.5rem;
    }
`

export const MainDocumentCardCentre = styled.div`
    & {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        // background-color: magenta;
        gap: 1.5rem;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
`

export const MainDocumentCardTitle = styled.div`
    & {
        padding: 0 0 1.3rem 0;
        font-size: 1.1rem;
        font-weight: bold;
        color: hsla(230, 85%, 73%, 1);
    }
`

export const MainDocumentCardColumn = styled.div`
    & {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: justify;
    }
`

export const MainDocumentCardExpandButton = styled.button`
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
