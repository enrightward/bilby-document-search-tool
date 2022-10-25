import React from "react"
import { 
    SwitchWrapperStyle, 
    SwitchButtonStyle, 
    SwitchLabelStyle,
} from "./tritoggle-styles.js"

export default function TriToggle({ selectedLanguage, languageOptions, handleChange }) {
    return (
        <SwitchWrapperStyle>
            {languageOptions.map((language) => {
                return (
                    <SwitchButtonStyle 
                        language={language} 
                        onClick={() => handleChange(language)}>
                        {language}
                    </SwitchButtonStyle>
                )
            })}
            <SwitchLabelStyle selectedLanguage={selectedLanguage}>
                {selectedLanguage}
            </SwitchLabelStyle>
        </SwitchWrapperStyle>
    )
}