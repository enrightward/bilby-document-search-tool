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
    searchFieldName,
    autoCompleteLimit,
    searchData,
} from "../styleSettings.js"

import {
    findMatches,
} from "../../utils/utils.js"

export default function SearchBar( { searchQuery, setSearchQuery, setMatches, width, height } ) {
    const navigate = useNavigate()

    const onChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const onBasicSearchClick = (searchQuery, setMatches) => {
        console.log("searchQuery", searchQuery)
        let theseMatches = findMatches(
            searchQuery,
            searchFieldName,
            searchData,
            autoCompleteLimit,
        )
        setSearchQuery(searchQuery)
        setMatches(theseMatches)
        console.log("theseMatches", theseMatches)
        navigate("/results", { state: { searchQuery: searchQuery } })
    }

    return (
        <SearchBarWrapper>
            <LeftSearchButton 
                borderColor={darkBorderColor}
                hoverColor={searchButtonHoverColor}
                height={height}
                onClick={() => onBasicSearchClick(searchQuery, setMatches)}
            >
                <SearchButtonSpan searchIcon={basicSearchIcon}/>
            </LeftSearchButton>
            <SearchInput 
                type="text" 
                value={searchQuery}
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