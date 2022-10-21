import styled from "styled-components"

const triToggleHeight = "26px"
const triToggleWidth = "135px"

export const Switch = styled.div`
    font-family: "Lucida Grande", Tahoma, Verdana, sans-serif;
    position: relative;
    // height: 26px;
    height: ${triToggleHeight};
    width: ${triToggleWidth};
    background-color: #555;
    border-radius: 3px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3),
        0 1px rgba(255, 255, 255, 0.1);
`

export const SwitchRadio = styled.input`
    display: none;
`

export const SwitchSelection = styled.span`
    display: block;
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 45px;
    height: 26px;
    background: blue;
    border-radius: 3px;
    transition: left 0.1s ease-out;
`

export const SwitchLabel = styled.label`
    position: relative;
    z-index: 2;
    float: left;
    width: 45px;
    line-height: 26px;
    font-size: 11px;
    color: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    cursor: pointer;

    ${SwitchRadio}:checked + & {
        transition: 0.15s ease-out;
        color: #fff;
    }
`
