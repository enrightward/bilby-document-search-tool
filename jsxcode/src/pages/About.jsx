import React from "react"
import { useLocation } from "react-router-dom"

export default function About() {
    const location = useLocation()

    return (
        <div className="nav-page about-page top-layer">
            <h1>About</h1>
            <p>
                Bilby AI is a platform for creating and sharing machine learning
                models. It is a work in progress. 
            </p>
            <p>
                THE STATE IS: {location.state.name}
            </p>
            <p>
                Bilby AI is a project of{" "}
                <a href="https://www.bilby.ai">Bilby AI Pty Ltd</a>.
            </p>
        </div>
    )
}
