// react basics
import React from "react";
import { Accordion } from "react-bootstrap";

// components
import { ResultsTable } from "..";

// styling
import styling from "./ResultsMin.module.scss";

// icons
import { BsFillCircleFill, BsCheck2 } from "react-icons/bs"

/**
 * Component displaying the results passed in props.
 * 
 * @param {*} props 
 * array of Category  elements (as seen in Api.js)
 * @returns React Component displaying the results
 */

function ResultsMin(props) {


    function setIcon(status) {
        switch (status) {
            /*case "upcoming":
                return (<BsClock />)*/

            case "ongoing":
                return (<BsFillCircleFill className={styling.icon_ongoing} />)

            case "done":
                return (<BsCheck2 />);

            default:
                return (null);
        }
    }

    var AccordionChildren = [];

    if (props.results instanceof Array) {
        props.results.forEach((Res, i) => {
            AccordionChildren.push(
                <Accordion.Item eventKey={i} key={i}>
                    <Accordion.Header className={styling.accordion_header}>
                        <div className={styling.icon}>{setIcon(Res.status)}</div>
                        <div className={styling.name}>{Res.name}</div>
                    </Accordion.Header>
                    <Accordion.Body className={styling.accordion_body}>
                        <ResultsTable competitors={Res.competitors} />
                    </Accordion.Body>
                </Accordion.Item>
            );
        })
    }

    return (
        <Accordion className={styling.accordion} flush alwaysOpen>
            {AccordionChildren}
        </Accordion>
    );
}

export default ResultsMin