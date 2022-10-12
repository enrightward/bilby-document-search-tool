import "./searchbar-styles.css"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

var searchData = require("./MOCK_DATA.json")
const searchLimit = 15

export default function SearchBar() {
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onBasicSearch = (searchTerm) => {
        console.log("searchTerm", searchTerm)
        setValue(searchTerm)
        navigate("/results", { state: { searchTerm: searchTerm }})
    }

    return (
        <div className="search-area top-layer">
            <label className="search-bar-label" htmlFor="name">
                Bilby AI Search
            </label>
            <div className="search-bar">
                <button
                    className="search-btn basic-search-btn"
                    onClick={() => onBasicSearch(value)}
                >
                    <span className="icon basic-icon"></span>
                </button>
                <input
                    className="search-input"
                    type="text"
                    name="name"
                    id="name"
                    value={value}
                    onChange={onChange}
                />
                <button className="search-btn adv-search-btn">
                    <span className="icon adv-icon"></span>
                </button>
            </div>
            <div className="dropdown">
                {searchData.filter(item => {
                    const searchTerm = value.toLowerCase()
                    const fullName = item.full_name.toLowerCase()
                    return searchTerm && fullName.includes(searchTerm) && fullName !== searchTerm
                })
                .slice(0, searchLimit)
                .map((item) => (
                    <div 
                        className="dropdown-row"
                        onClick={() => {setValue(item.full_name)}}
                        key={item.full_name}
                    >
                        {item.full_name}
                    </div>
                ))}
            </div>
        </div>
    )
}
