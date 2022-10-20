import styled from "styled-components"

export const SearchBarWrapper = styled.div`
    & {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

export const SearchButton = styled.button`
    & {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${(props) => props.height};
        width: calc(${(props) => props.height} * 1.25);
        background-color: black;
        border: solid 1px ${(props) => props.borderColor};
        margin: 0;
        padding: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.hoverColor};
    }
`

export const LeftSearchButton = styled(SearchButton)`
    margin: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const RightSearchButton = styled(SearchButton)`
    margin: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`

export const SearchButtonSpan = styled.span`
    & {
        background-size: 60%;
        background-image: url(${(props) => props.searchIcon});
        display: inline-block;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
`

export const SearchInput = styled.input`
    & {
        color: white;
        padding: 0.5rem;
        font-weight: 400;
        font-size: ${(props) => props.fontSize};
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        border: solid 1px ${(props) => props.borderColor};
        background-color: ${(props) => props.searchBackgroundColor};
    }
    &:hover,
    &:focus {
        outline: none;
    }
`

// .main-search-dropdown {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     border: 1px solid var(--main-search-border-color);
//     width: var(--main-total-search-width);
//     font-size: var(--large-font-size);
//     font-weight: 400;
//     padding: 0.75rem 1.5rem;
//     margin: 0;
//     background-color: var(--main-search-background-color);
// }

// .main-search-dropdown:empty {
//     border: none;
//     padding: 0;
// }
