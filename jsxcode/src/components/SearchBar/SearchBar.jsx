import React from "react"
import { useNavigate } from "react-router-dom"

import { 
    SearchBarWrapper, 
    LeftSearchButton, 
    SearchButtonSpan, 
    RightSearchButton,
    SearchInput,
} from "./searchbar-styles.js"

import {
    regularFontSize,
    darkBorderColor, 
    searchButtonHoverColor,
    searchBackgroundColor,
    basicSearchIcon,
    advancedSearchIcon,
} from "../styleSettings.js"

export default function SearchBar( { query, setQuery, width, height } ) {
    const navigate = useNavigate()

    const onChange = (event) => {
        setQuery(event.target.value)
    }

    const onBasicSearch = (searchTerm) => {
        console.log("searchTerm", searchTerm)
        setQuery(searchTerm)
        navigate("/results", { state: { searchTerm: searchTerm } })
    }

    return (
        <SearchBarWrapper>
            <LeftSearchButton 
                borderColor={darkBorderColor}
                hoverColor={searchButtonHoverColor}
                height={height}
                onClick={() => onBasicSearch(query)}
            >
                <SearchButtonSpan searchIcon={basicSearchIcon}/>
            </LeftSearchButton>
            <SearchInput 
                type="text" 
                value={query}
                height={height}
                width={width}
                fontSize={regularFontSize}
                onChange={onChange}
                borderColor={darkBorderColor}
                searchBackgroundColor={searchBackgroundColor} 
            />
            <RightSearchButton 
                borderColor={darkBorderColor}
                hoverColor={searchButtonHoverColor}
                height={height} 
            >
                <SearchButtonSpan searchIcon={advancedSearchIcon}/>
            </RightSearchButton>
        </SearchBarWrapper>
    )
}