import React from "react"
import { 
    SearchDropdownWrapper, 
    MatchWrapper 
} from "./searchbar-dropdown-styles.js"

import { 
    regularFontSize, 
    searchBarWidth,
    darkBorderColor,
    textDarkBackgroundColor,
    autoCompleteLimit,
    searchData,
    searchFieldName,
} from "../styleSettings.js"

import {
    findMatches,
} from "../../utils/utils.js"

export default function SearchBarDropdown( { searchQuery, setSearchQuery }) {
    
    return (
        <SearchDropdownWrapper
            borderColor={darkBorderColor}
            width={searchBarWidth}
            fontSize={regularFontSize}
            backgroundColor={textDarkBackgroundColor}
        >
        {findMatches(
            searchQuery,
            searchFieldName,
            searchData,
            autoCompleteLimit
        ).map((item, counter) => (
            <MatchWrapper 
                key={counter}
                counter={counter}
                onClick={() => {setSearchQuery(item[searchFieldName])}}
            >
                {item[searchFieldName]}
            </MatchWrapper>
        ))}
        {/* {findMatches(searchQuery, searchData).map((item, counter) => (
                <MatchWrapper 
                    key={counter}
                    counter={counter}
                    onClick={() => {setSearchQuery(item[searchFieldName])}}
                >
                    {item[searchFieldName]}
                </MatchWrapper>
        ))} */}
        </SearchDropdownWrapper>
    )
}