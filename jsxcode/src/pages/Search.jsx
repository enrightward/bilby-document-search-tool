import React from "react"
import SearchBar from "../components/SearchBar/SearchBar.jsx"
import SearchBarDropdown from "../components/SearchBarDropdown/SearchBarDropdown.jsx"
import { 
    SearchArea, 
    SearchLabel, 
} from "./search-page-styles.js"

import { 
    regularFontSize, 
    veryLargeFontSize,
    searchBarHeight,
    searchBarWidth,
    darkBorderColor,
    textDarkBackgroundColor,
} from "../components/styleSettings.js"

export default function SearchPage( {searchQuery, setSearchQuery, setMatches} ) {

    return (
        <SearchArea>
            <SearchLabel fontSize={veryLargeFontSize}>
                Bilby AI Search
            </SearchLabel>
            <SearchBar 
                width={searchBarWidth}
                height={searchBarHeight}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setMatches={setMatches}
            />
            <SearchBarDropdown
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                width={searchBarWidth}
                fontSize={regularFontSize}
                borderColor={darkBorderColor}
                backgroundColor={textDarkBackgroundColor}
            />
        </SearchArea>
    ) 
}