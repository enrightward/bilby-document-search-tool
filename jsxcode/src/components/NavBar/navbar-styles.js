import styled from "styled-components"
import { Link } from "react-router-dom"

import {
    navBarHeight,
    mediumFontSize,
    navBarBackgroundColor,
    largeFontSize,
    navListGap,
    navListItemBackgroundColor,
    navLogoColor,
    navListColor,
    navListPadding,
    navLogoPadding,
} from "../styleSettings.js"

export const NavWrapper = styled.nav`
    & {
        position: relative;
        background-color: ${navBarBackgroundColor};
        padding: 0;
        min-height: ${navBarHeight};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: ${mediumFontSize};
    }
`

export const NavLogo = styled(Link)`
    & {
        margin: 0 ${navLogoPadding};
        color: ${navLogoColor};
        font-size: ${largeFontSize};
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
        gap: ${navListGap};
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
        background-color: ${navListItemBackgroundColor};
    }
`

export const NavLinksListLink = styled(Link)`
    & {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        white-space: nowrap;
        text-decoration: none;
        color: ${navListColor};
        padding: 0 ${navListPadding};
    }
`
