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

export const AddSelectedButton = styled.button`
    & {
        display: flex;
        width: 80px;
        height: 25px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: hsla(217, 68%, 48%, 1);
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 0.7rem;
    }

    &:hover {
        background-color: hsla(217, 68%, 63%, 1);
    }

    &:active {
        background-color: hsla(217, 68%, 29%, 1);
    }
`

export const RemoveSelectedButton = styled.button`
    & {
        display: flex;
        width: 80px;
        height: 25px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: hsla(360, 68%, 41%, 1);
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 0.7rem;
    }

    &:hover {
        background-color: hsla(360, 68%, 56%, 1);
    }

    &:active {
        background-color: hsla(360, 68%, 25%, 1);
    }
`
