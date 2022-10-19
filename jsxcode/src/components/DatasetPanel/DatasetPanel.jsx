import React from "react"
import "./dataset-panel-styles.css"
import BlueButton from "../BlueButton/BlueButton.jsx"
import BlueDropdown from "../BlueDropdown/BlueDropdown.jsx"

export default function DatasetColumn({ text }) {

    return (
        <div className="dataset-panel">
            <div className="choose-dataset-div">
                <BlueButton text={"+new"}/>
                <BlueDropdown text={"existing..."}/>
            </div>
        </div>
    )
}