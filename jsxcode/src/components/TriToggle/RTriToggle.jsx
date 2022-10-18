import React from 'react'
import { 
    Switch, 
    SwitchLabel, 
    SwitchRadio, 
    SwitchSelection 
} from './rtritoggle-styles.js'

const ClickableLabel = ({ title, onChange, id }) => {
    return (
        <SwitchLabel onClick={() => onChange(title)} className={id}>
            {title}
        </SwitchLabel>
    )
}

const ConcealedRadio = ({ value, selected }) => {
    return <SwitchRadio type="radio" name="switch" checked={selected === value} />
}

export default function RTriToggle({ selectedLanguage, values, handleChange }) {

    const selectionStyle = () => {
        const left = `${values.indexOf(selectedLanguage) / 3 * 100}%`
        return {
            left: left,
        }
    }

    return (
        <Switch >
            {values.map(val => {
                return (
                    <span>
                        <ClickableLabel title={val} onChange={
                            () => {
                                selectedLanguage = val
                                handleChange(val)
                            }
                        }/>
                        <ConcealedRadio value={val} />
                    </span>
                )
            })}
            <SwitchSelection style={selectionStyle()} />
        </Switch>
    )
}