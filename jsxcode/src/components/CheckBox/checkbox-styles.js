import styled from "styled-components"

const checkBoxSize = "1.0rem"

export const ResultCardCheckBoxStyle = styled.input`
    & {
        width: ${checkBoxSize};
        height: ${checkBoxSize};
    }
`

export const ResultCardCheckBoxStyleCustom = styled.input`
    & {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        /* create custom checkbox appearance */
        display: inline-block;
        width: ${checkBoxSize};
        height: ${checkBoxSize};
        padding: 3px;
        /* background-color only for content */
        background-clip: content-box;
        border: 1.5px solid #bbbbbb;
        border-radius: 6px;
        background-color: #e7e6e7;
    }

    &:hover {
        cursor: pointer;
    }

    &:checked {
        background-color: #ff0000;
    }

    &:focus {
        outline: none !important;
    }
`
