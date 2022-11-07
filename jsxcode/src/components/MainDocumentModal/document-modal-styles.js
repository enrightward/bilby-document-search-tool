import styled from "styled-components"

const borderRadius = "3px"
const darkColour = "#111"
const lightColour = "#aaa"

export const MainDocumentModalContainer = styled.div`
    & {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const MainDocumentModalDiv = styled.div`
    & {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: min(80%, 900px);
        height: 80%;
        // background-color: ${darkColour};
        padding: 0;
        border-radius: ${borderRadius};
        border: 1px solid ${lightColour};
    }
`

export const MainDocumentModalHeader = styled.div`
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

export const MainDocumentModalBody = styled.div`
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

export const MainDocumentModalCentre = styled.div`
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

export const MainDocumentModalTitle = styled.div`
    & {
        padding: 0 0 1.3rem 0;
        font-size: 1.1rem;
        font-weight: bold;
        color: hsla(230, 85%, 73%, 1);
    }
`

export const MainDocumentModalColumn = styled.div`
    & {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: justify;
    }
`

export const MainDocumentModalCancelButton = styled.button`
    & {
        height: 25px;
        width: 50px;
        background-color: #555;
        border: none;
        border-radius: ${borderRadius};
        color: white;
        font-size: 0.8rem;
    }

    &:hover {
        background-color: #777;
    }

    &:active {
        background-color: #333;
    }
`
