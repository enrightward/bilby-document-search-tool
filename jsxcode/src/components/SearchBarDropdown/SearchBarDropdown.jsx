import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
var searchData = require("../../data/MOCK_DATA.json")
const searchLimit = 15

export default function SearchBarDropdown() {
    const [value, setValue] = useState("")
    // const navigate = useNavigate()

    return (
        <div className="search-dropdown">
            {searchData.filter(item => {
                const searchTerm = value.toLowerCase()
                console.log("searchTerm", searchTerm)
                console.log("len(searchData)", searchData.length)
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
    )
}