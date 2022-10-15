import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
var searchData = require("../../data/MOCK_DATA.json")
const searchLimit = 15

export default function SearchBar( { classNamePrefix } ) {
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onBasicSearch = (searchTerm) => {
        console.log("searchTerm", searchTerm)
        setValue(searchTerm)
        navigate("/results", { state: { searchTerm: searchTerm } })
    }

    // const prepend = (className) => {
    //     return `${classNamePrefix}${className}`
    // }

    const prepend = function(classNames) {
        const result = classNames.split(" ").map((item) => {
            return classNamePrefix + item
        }).join(" ")
        return result
    }

    return (
        <>
            <div className={prepend("search-bar")}>
                <button
                    className={prepend("search-btn basic-search-btn")}
                    onClick={() => onBasicSearch(value)}
                >
                    <span className={prepend("search-icon basic-search-icon")}></span>
                </button>
                <input
                    className={prepend("search-input")}
                    type="text"
                    name="name"
                    id="name"
                    value={value}
                    onChange={onChange}
                />
                <button className={prepend("search-btn adv-search-btn")}>
                    <span className={prepend("search-icon adv-search-icon")}></span>
                </button>
            </div>
            <div className={prepend("search-dropdown")}>
                {searchData.filter(item => {
                    const searchTerm = value.toLowerCase()
                    const fullName = item.full_name.toLowerCase()
                    return searchTerm && fullName.includes(searchTerm) && fullName !== searchTerm
                })
                .slice(0, searchLimit)
                .map((item) => (
                    <div 
                        className={prepend("search-dropdown-row")}
                        onClick={() => {setValue(item.full_name)}}
                        key={item.full_name}
                    >
                        {item.full_name}
                    </div>
                ))}
            </div>
        </>
    )
}