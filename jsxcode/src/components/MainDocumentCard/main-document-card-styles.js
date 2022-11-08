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
        height: ${(props) => props.height};
        width: ${(props) => props.width};
        padding: 0;
        border-radius: ${borderRadius};
        border: 1px solid ${lightColour};
    }
`

export const MainDocumentCardBody = styled.div`
    & {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        background-color: ${darkColour};
        width: 100%;
        height: 100%;
        padding: ${(props) => props.bodyPadding};
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
        gap: ${(props) => props.columnGap};
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
