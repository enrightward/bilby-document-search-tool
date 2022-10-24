import React, { useState } from "react"

import {
    MetaDataButtonStyle,
} from "./metadata-button-styles.js"

const metaDataIcon = "</>"

export default function MetaDataButton( props ) {

    return (
        <MetaDataButtonStyle>
        {metaDataIcon}
        </MetaDataButtonStyle>
    )
}

