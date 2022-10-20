import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavWrapper = styled.nav`
    & {
        position: relative;
        background-color: #333;
        padding: 0;
        min-height: var(--nav-height);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: var(--medium-font-size);
    }
`

export const NavLogo = styled(Link)`
    & {
        margin: 0 1rem;
        color: white;
        font-size: var(--large-font-size);
        text-decoration: none;
        font-weight: bold;
        white-space: nowrap;
    }
`

export const NavLinksDiv = styled.div`
    & {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        height: 100%;
    }
`

export const NavLinksList = styled.ul`
    & {
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: var(--nav-list-gap);
    }
`

export const NavLinksListItem = styled.li`
    & {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &:active {
        background-color: black;
    }
`

export const NavLinksListLink = styled(Link)`
    & {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        color: white;
        padding: 0 2rem;
    }
`
