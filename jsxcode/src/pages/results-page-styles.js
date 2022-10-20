import styled from "styled-components"

export const ResultsColumnWrapper = styled.div`
    & {
        flex: 1;
        position: relative;
        height: 100%;
        display: flex;
        min-width: ${(props) => props.minWidth};
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid ${(props) => props.borderColor};
        border-radius: ${(props) => props.borderRadius};
        background-color: ${(props) => props.backgroundColor};
        overflow-y: scroll;
        padding: 0.75rem 0;
    }
`

export const ResultsUnderPanel = styled.div`
    & {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem;
        padding: 0 0.7rem;
    }
`
