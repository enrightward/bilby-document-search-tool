import React from "react"

export default function BiToggle() {

    return (
        <label class="language-toggle">
            <input type="checkbox" className="language-switch"/>
            <span class="bitoggle-switch">
                <div class="bitoggle-left-bg"></div>
                <div class="bitoggle-right-bg"></div>
            </span>
        </label>
    )
}