// react basics
import React, { useEffect } from "react";

// react components
import { ListGroup } from "react-bootstrap";
import { OverviewCompetitionLi } from "./";

function Overview(props) {
    useEffect(() => {
        props.navbarHandler("");
    }, [null]);

    return (
        <div>
            <h1 className="display-1 mb-5 mt-2">Aktuelle Wettkämpfe</h1>
            <ListGroup className="custom-shadow">
                <OverviewCompetitionLi link="/competition" name="Oberbayerische Meisterschaft Junioren und Elite" location="Schmedeswurtherwesterdeich" date="25.11.2022" isLive="1" />
                <OverviewCompetitionLi link="/competition" name="Oberbayerische Meisterschaft Junioren und Elite" location="" date="25.11.2022" />
                <OverviewCompetitionLi link="/competition" name="Kreismeisterschaft JuniorInnen und Elite Schönbuch-Würmtal" location="Nufringen" date="" isLive="1" />
                <OverviewCompetitionLi link="/competition" name="1. Durchgang Müller-Reisen Cup 2022 + Bezirksmeisterschaft Junioren Schwarzwald-Zollern" location="Empfingen" date="13.02.2022" isLive="1" />
                <OverviewCompetitionLi link="/competition" name="RSBS Bezirksmeisterschaft Junioren" location="Wendlingen" date="20.02.2022" isLive="1" />
            </ListGroup>
        </div>
    );
}

export default Overview;