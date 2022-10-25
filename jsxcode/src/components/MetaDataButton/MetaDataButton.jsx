import React from "react"

import {
    MetaDataButtonStyle,
} from "./metadata-button-styles.js"

const metaDataIcon = "</>"

export default function MetaDataButton( { onFlipClick } ) {

    return (
        <MetaDataButtonStyle onMouseDown={() => onFlipClick()}>
        {metaDataIcon}
        </MetaDataButtonStyle>
    )
}

