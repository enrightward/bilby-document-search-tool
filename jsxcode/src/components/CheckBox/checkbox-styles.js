import styled from "styled-components"

const checkBoxSize = "1.0rem"

export const ResultCardCheckBoxStyle = styled.input`
    & {
        width: ${checkBoxSize};
        height: ${checkBoxSize};
    }

    &:hover {
        cursor: pointer;
    }
`
