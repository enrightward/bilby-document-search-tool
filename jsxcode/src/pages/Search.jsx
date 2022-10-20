import React, { useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar.jsx"
import SearchBarDropdown from "../components/SearchBarDropdown/SearchBarDropdown.jsx"
import { SearchArea, SearchLabel } from "./search-page-styles.js"

import { 
    regularFontSize, 
    veryLargeFontSize,
    searchBarHeight,
    searchBarWidth,
    darkBorderColor,
    textDarkBackgroundColor,
} from "../components/styleSettings.js"

export default function SearchPage() {
    const [query, setQuery] = useState("")

    return (
        <SearchArea>
            <SearchLabel fontSize={veryLargeFontSize}>
                Bilby AI Search
            </SearchLabel>
            <SearchBar 
                width={searchBarWidth}
                height={searchBarHeight}
                query={query}
                setQuery={setQuery}
            />
            <SearchBarDropdown
                query={query} 
                setQuery={setQuery}
                width={searchBarWidth}
                fontSize={regularFontSize}
                borderColor={darkBorderColor}
                backgroundColor={textDarkBackgroundColor}
            />
        </SearchArea>
    ) 
}