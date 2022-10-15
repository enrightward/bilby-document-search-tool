import React from "react"
import AbstractSearchBar from "../AbstractSearchBar/AbstractSearchBar.jsx"
// import "./main-searchbar-styles.css"

export default function MainSearchBar() {
    return (
        <div className="main-search-area top-layer">
            <label className="main-search-bar-label" htmlFor="name">
                Bilby AI Search
            </label>
            <AbstractSearchBar classNamePrefix="main-"/>
        </div>
    )
}
