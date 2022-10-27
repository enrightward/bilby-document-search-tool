import React from "react"
import "./blue-dropdown-styles.css"

export default function BlueDropdown() {

    return (
        <>
            <select className="blue-button-dropdown" defaultValue={""}>
                <option value="" disabled hidden>select...</option>
                <option value="apple">Apple supply chains</option>
                <option value="xi">Xi Jinping</option>
                <option value="rare-earths">rare earths</option>
                <option value="green-energy">green energy</option>
            </select>
        </>
    )
}