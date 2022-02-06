// react basics
import React from "react";
import { Card } from "react-bootstrap";

// styling
import styling from "./Scoreboard.module.scss"

/**
 * Scoreboard component for Artistic Cycling competitors
 * 
 * @param {{num: sting, cat: string, time: string, name: string, score_current: string, score_submitted: string}} props
 * @arg num Start number of competitor
 * @arg cat Category in which the athlete competes 
 * @arg time Current time of the Programm
 * @arg name Name of the competitor
 * @arg score_current Current score of the competitor
 * @arg score_submitted Submitted score of the competitor
 * @returns Component
 */

function Scoreboard(props) {
    var sizeKey = " " + styling.isReg;

    switch (props.size) {
        case "min":
            sizeKey = " " + styling.isMin;
            break;

        case "reg":
            sizeKey = " " + styling.isReg;
            break;

        default:
            sizeKey = "";
            break;
    }

    return (
        <Card className={styling.card + sizeKey + " custom-shadow"} >
            <Card.Body>
                <div className={styling.header_container + sizeKey}>
                    <p className={styling.head_num}>{props.num}</p>
                    <p className={styling.head_cat}>{props.cat}</p>
                    <p className={styling.head_time}>{props.time}</p>
                </div>
                <div className={styling.body_container + sizeKey}>
                    <p className={styling.bdy_contestant + sizeKey}>{props.name}</p>
                    <p className={styling.bdy_score + sizeKey}>{props.score_current}</p>
                    <p className={styling.bdy_score_total + sizeKey}>{props.score_submitted}</p>
                </div>
            </Card.Body >
        </Card>
    );
}

export default Scoreboard