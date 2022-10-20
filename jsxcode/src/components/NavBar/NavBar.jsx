import React from "react"
import "./navbar-styles.js"
import { useMatch, useResolvedPath } from "react-router-dom"

import { 
    NavWrapper, 
    NavLogo, 
    NavLinksDiv, 
    NavLinksList, 
    NavLinksListLink, 
    NavLinksListItem,
} from './navbar-styles.js'

export default function NavBar() {
    const myState = { name: "Dinosaur" }

    return (
        <NavWrapper>
            <NavLogo to="/">
                Bilby AI
            </NavLogo>
            <NavLinksDiv>
                <NavLinksList>
                    <CustomLink to="/about" state={myState}>About</CustomLink>
                    <CustomLink to="/signup">Sign Up</CustomLink>
                    <CustomLink to="/datasets">Datasets</CustomLink>
                    <CustomLink to="/models">Models</CustomLink>
                    <CustomLink to="/newsletters">Newsletters</CustomLink>
                </NavLinksList>
            </NavLinksDiv>
        </NavWrapper>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <NavLinksListItem className = {isActive ? "active" : ""}>
            <NavLinksListLink to={to} {...props}>
                {children}
            </NavLinksListLink>
        </NavLinksListItem>
    )
}