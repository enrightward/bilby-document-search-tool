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
} from "../styleSettings.js"


const findMatches = (query, searchData) => {
    const matches = searchData.filter(item => {
        const searchTerm = query.toLowerCase()
        const fullName = item.full_name.toLowerCase()
        return searchTerm && fullName.includes(searchTerm) && fullName !== searchTerm
    })
    .slice(0, autoCompleteLimit)
    return matches   
}


export default function SearchBarDropdown( { query, setQuery } ) {

    return (
        <SearchDropdownWrapper
            borderColor={darkBorderColor}
            width={searchBarWidth}
            fontSize={regularFontSize}
            backgroundColor={textDarkBackgroundColor}
        >
        {findMatches(query, searchData).map((item, counter) => (
                <MatchWrapper 
                    key={counter}
                    counter={counter}
                    onClick={() => {setQuery(item.full_name)}}
                >
                    {item.full_name}
                </MatchWrapper>
        ))}
        </SearchDropdownWrapper>
    )
}