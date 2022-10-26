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

const findMatches = (query, searchData) => {
    let result = searchData.filter(item => {
        const searchTerm = query.toLowerCase()
        const fieldEntry = item[searchFieldName].toLowerCase()
        const boolFilter = searchTerm && fieldEntry.includes(searchTerm) && fieldEntry !== searchTerm
        return boolFilter
    })
    console.log("len(matches): ", result.length)
    result = result.slice(0, autoCompleteLimit)
    return result
}

export default function SearchBarDropdown( { searchQuery, setSearchQuery }) {
    
    return (
        <SearchDropdownWrapper
            borderColor={darkBorderColor}
            width={searchBarWidth}
            fontSize={regularFontSize}
            backgroundColor={textDarkBackgroundColor}
        >
        {findMatches(searchQuery, searchData).map((item, counter) => (
                <MatchWrapper 
                    key={counter}
                    counter={counter}
                    onClick={() => {setSearchQuery(item[searchFieldName])}}
                >
                    {item[searchFieldName]}
                </MatchWrapper>
        ))}
        </SearchDropdownWrapper>
    )
}