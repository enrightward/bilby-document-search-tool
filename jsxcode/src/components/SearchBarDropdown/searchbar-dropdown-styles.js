import styled from "styled-components"

import { oddColour, evenColour } from "../styleSettings.js"

export const SearchDropdownWrapper = styled.div`
    & {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 1px solid ${(props) => props.borderColor};
        width: ${(props) => props.width};
        font-size: ${(props) => props.fontSize};
        font-weight: 400;
        padding: 0;
        margin: 0;
        background-color: ${(props) => props.backgroundColor};
    }
    &:empty {
        border: none;
        padding: 0;
    }
`

const getRowColour = (counter) => {
    const colour = counter % 2 === 0 ? evenColour : oddColour
    return colour
}

export const MatchWrapper = styled.div`
    & {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0.4rem 0.75rem;
        background-color: ${(props) => getRowColour(props.counter)};
    }

    &:hover {
        cursor: pointer;
        background-color: #222;
    }
`
