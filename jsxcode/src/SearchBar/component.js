import React, { Component } from "react"
import "./styles.css"

export class SearchBar extends Component {
    render() {
        return (
            <form className="search-form top-layer">
                <label className="search-bar-label" for="name">
                    Bilby AI Search
                </label>
                <div className="search-bar">
                    <button className="search-btn basic-search-btn">
                        <span className="icon basic-icon"></span>
                    </button>
                    <input
                        className="search-input"
                        type="text"
                        name="name"
                        id="name"
                    />
                    <button className="search-btn adv-search-btn">
                        <span className="icon adv-icon"></span>
                    </button>
                </div>
            </form>
        )
    }
}
