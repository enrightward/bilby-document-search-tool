import React from "react"
import AbstractSearchBar from "../AbstractSearchBar/AbstractSearchBar.jsx"
import "./main-searchbar-styles.css"

export default function MainSearchBar() {
    return (
        <div className="search-area top-layer">
            <label className="search-bar-label" htmlFor="name">
            Bilby AI Search
            </label>
            <AbstractSearchBar/>
        </div>
    )
}
