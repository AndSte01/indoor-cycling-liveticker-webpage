// react basics
import React from "react";
import { Card, Nav } from "react-bootstrap";

// components
import Tab from 'react-bootstrap/Tab'
import { ResultsTable } from "..";

// styling
import styling from "./ResultsMax.module.scss";

// icons
import { BsFillCircleFill, BsCheck2 } from "react-icons/bs"

/**
 * Component displaying the results passed in props.
 * 
 * @param {*} props 
 * array of Category  elements (as seen in Api.js)
 * @returns React Component displaying the results
 */

function ResultsMax(props) {


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

    var TabNavChildren = [];
    var TabResultsChildren = [];

    if (props.results instanceof Array) {
        props.results.forEach((Res, i) => {
            TabNavChildren.push(
                <Nav.Item key={i} className={styling.temp}>
                    <Nav.Link eventKey={i} className={styling.nav_element} >
                        <div className={styling.nav_name + " overflow-y"}>
                            {Res.name}
                        </div>
                        <div className={styling.nav_icon}>
                            {setIcon(Res.status)}
                        </div>
                    </Nav.Link>
                </Nav.Item>
            );
            TabResultsChildren.push(
                <Tab.Pane eventKey={i} key={i}>
                    <ResultsTable competitors={Res.competitors} />
                </Tab.Pane>
            );
        })
    }

    return (
        <Tab.Container defaultActiveKey={0}>
            <Card className={styling.nav_card + " custom-shadow"}>
                <Nav variant="pills" className={styling.nav_list + " flex-column"}>
                    {TabNavChildren}
                </Nav>
            </Card>
            <Tab.Content className={styling.tab_content}>
                {TabResultsChildren}
            </Tab.Content>
        </Tab.Container>
    );
}

export default ResultsMax