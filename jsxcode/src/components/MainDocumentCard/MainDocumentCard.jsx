import React from "react"
import "./main-document-card-styles.css"

export default function MainDocumentCard( {props} ) {
    return (
        <div className="card">
            <div className="card-contents">
                <div className="card-header">
                    <h3 className="card-title">{props.enTitle}</h3>
                </div>
                <div className="card-body">
                    <div className="card-body-en">
                        {props.enText}
                    </div>
                    <div className="card-body-zh">
                    {props.zhText}
                    </div>
                </div>
            </div>
        </div>
    )
}


