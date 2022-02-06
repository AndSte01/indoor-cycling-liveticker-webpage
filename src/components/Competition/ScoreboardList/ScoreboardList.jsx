// react basics
import React from "react";

// styling
import styling from "./ScoreboardList.module.scss"

function ScoreboardList(props) {
    return (
        <div className={styling.scoreboard_list}>
            {props.children}
        </div>
    );
}

export default ScoreboardList