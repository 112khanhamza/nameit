import React from "react";
import "./ResultsContainer.css";
import NameCard from "../NameCard/NameCard";

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJSX = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    })

    return (
        <div className="results-container">
            {suggestedNameJSX}
        </div>
    )
}

export default ResultsContainer;