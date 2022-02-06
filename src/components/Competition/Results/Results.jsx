// react basics
import React from "react";
import { useState } from "react";

// components
import { ResultsMax, ResultsMin } from "./";

// styling
import styling from "./Results.module.scss"

function Results(props) {
    function reportWindowSize() {
        if (window.innerWidth >= 992 && Size !== "max") {
            setSize("max");
        } else if (window.innerWidth <= 992 && Size !== "min") {
            setSize("min");
        }
    }

    window.onresize = reportWindowSize;

    const [Size, setSize] = useState(window.innerWidth >= 992 ? "max" : "min");

    return (
        <div className={styling.results_container} >
            {Size === "max"
                ? <ResultsMax results={props.results} />
                : <ResultsMin results={props.results} />}
        </div>
    );
}

export default Results