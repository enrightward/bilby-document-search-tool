import React from "react"
import "./tritoggle-styles.css"

export default function TriToggle() {

    return (
        <div className="tritoggle-switch">
            <input id="en" name="state-d" type="radio" defaultChecked/>
            <label className="en" htmlFor="en" onClick={enClicked()}></label>
            <input id="both" name="state-d" type="radio"/>
            <label className="both" htmlFor="both" onClick={bothClicked()}></label>
            <input id="zh" name="state-d" type="radio" />
            <label className="zh" htmlFor="zh" onClick={zhClicked()}></label>
        </div>
    )
}

function enClicked() {
    console.log("EN clicked")
}

function bothClicked() {
    console.log("EN clicked")
}

function zhClicked() {
    console.log("EN clicked")
}