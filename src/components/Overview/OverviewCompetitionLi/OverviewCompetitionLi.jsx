// react basic
import React from "react";

// react components
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

// styling
import styles from "./OverviewCompetitionLi.module.scss"

function OverviewCompetitionLi(props) {
    return (
        <ListGroupItem>
            <Link to={props.link} className={styles.container}>
                <div className={styles.overflow}>
                    <div className={styles.name + " overflow-y text-body"}>{props.name}</div>
                    <div className={styles.date_location_container + " text-muted"}>
                        <div className="overflow-y">{props.location}</div>
                        <div className={styles.date} style={{ marginLeft: (props.location !== "") ? "20px" : "0px" }}>{props.date}</div>
                        {props.isLive &&
                            <Badge bg="primary" className={styles.LiveBadge + " " + styles.isMin} style={{ marginLeft: (props.date !== "") ? "20px" : "0px" }}>LIVE</Badge>
                        }
                    </div>
                </div>
                {props.isLive &&
                    <Badge bg="primary" className={styles.LiveBadge + " " + styles.isMax}>LIVE</Badge>
                }
            </Link>
        </ListGroupItem >
    );
}

export default OverviewCompetitionLi