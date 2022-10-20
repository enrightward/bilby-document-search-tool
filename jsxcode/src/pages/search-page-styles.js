import styled from "styled-components"

export const SearchArea = styled.div`
    & {
        position: relative;
        width: 100%;
        margin-top: 25vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`

export const SearchLabel = styled.div`
    & {
        font-size: ${(props) => props.fontSize};
        font-weight: 400;
        margin-bottom: 0.5rem;
    }
`
