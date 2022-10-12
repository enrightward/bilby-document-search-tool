import React from "react"
import { useLocation } from "react-router-dom"

export default function Results() {
    const location = useLocation()

    return (
        <div>
            <h1>Search Results</h1>
            <p>
                This page will display search results.
            </p>
            <p>
                THE STATE IS: {location.state.searchTerm}
            </p>
            <p>
                Bilby AI is a project of{" "}
                <a href="https://www.bilby.ai">Bilby AI Pty Ltd</a>.
            </p>
        </div>
    )
}