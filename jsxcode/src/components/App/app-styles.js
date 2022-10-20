import styled from "styled-components"
import backgroundImage from "../../img/hong-kong-5.jpg"

export const MainPanel = styled.div`
    & {
        position: relative;
        flex-grow: 1;
        color: white;
        background-color: black;
        display: flex;
        flex-direction: row;
        gap: var(--triptych-gap);
        justify-content: flex-start;
        align-items: flex-start;
        min-width: auto;
        margin: 0;
        padding: 2px;
        overflow-y: hidden;
    }

    &:before {
        content: "";
        background-image: url(${backgroundImage});
        background-position: center;
        background-size: cover;
        background-repeat: repeat;
        background-attachment: fixed;
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        opacity: 0.5;
        -webkit-filter: blur(5px);
    }
`
