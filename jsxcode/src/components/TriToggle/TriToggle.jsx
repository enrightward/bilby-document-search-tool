import React from "react"
import { 
    SwitchWrapperStyle, 
    SwitchButtonStyle, 
    SwitchLabelStyle,
} from "./tritoggle-styles.js"

export default function TriToggle({ index, selectedLanguage, languageOptions, onTriToggleClick }) {
    return (
        <SwitchWrapperStyle key={`switchWrapper_${index}`}>
            {languageOptions.map((language, subIndex) => {
                return (
                    <SwitchButtonStyle key={`switchButton_${index}_${subIndex}`}
                        language={language}
                        onMouseDown={() => onTriToggleClick(language)}>
                        {language}
                    </SwitchButtonStyle>
                )
            })}
            <SwitchLabelStyle key={`switchLabel${index}`} selectedLanguage={selectedLanguage}>
                {selectedLanguage}
            </SwitchLabelStyle>
        </SwitchWrapperStyle>
    )
}