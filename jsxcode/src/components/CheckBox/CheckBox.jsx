import React from "react"

import {
    ResultCardCheckBoxStyle,
} from "./checkbox-styles.js"

export default function BilbyCheckBox({ onCheckBoxChange, checked }) {

    return (
        <ResultCardCheckBoxStyle onChange={onCheckBoxChange} checked={checked} type="checkbox"/>
    )
}