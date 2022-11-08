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
