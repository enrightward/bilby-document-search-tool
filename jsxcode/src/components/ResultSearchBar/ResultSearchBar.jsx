import React from "react"
import AbstractSearchBar from "../AbstractSearchBar/AbstractSearchBar.jsx"
// import "./result-searchbar-styles.css"

export default function ResultSearchBar() {
    return (
        <div className="results-search-area top-layer">
            <AbstractSearchBar classNamePrefix="results-"/>
        </div>
    )
}