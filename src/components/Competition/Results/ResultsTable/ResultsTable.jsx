// react basics
import React from "react";
import { Table } from "react-bootstrap";

// styling
import styling from "./ResultsTable.module.scss";

function ResultsTable(props) {

    var rows = [];

    if (props.competitors !== undefined) {
        props.competitors.forEach((Competitor, i) => {
            rows.push(
                <tr key={Competitor.id}>
                    <td className={styling.col + " " + styling.num}>{Competitor.no}</td>
                    <td >{Competitor.name}</td>
                    <td className={styling.col + " " + styling.club}>{Competitor.club}</td>
                    <td className={styling.col + " " + styling.score + " " + styling.score_submitted}>{Competitor.score_submitted}</td>
                    <td className={styling.col + " " + styling.score}>{Competitor.score_accomplished}</td>
                </tr>
            );
        })
    }

    return (
        <div className={styling.catCtr}>
            <Table className={styling.table} hover>
                <thead>
                    <tr>
                        <th className={styling.th + " " + styling.center + " " + styling.col + " " + styling.num} styling={{ width: "100px !important" }}>#</th>
                        <th className={styling.th}>Name</th>
                        <th className={styling.th + " " + styling.col + " " + styling.club}>Club</th>
                        <th className={styling.th + " " + styling.center + " " + styling.col + " " + styling.score + " " + styling.score_submitted}>Subm.</th>
                        <th className={styling.th + " " + styling.center + " " + styling.col + " " + styling.score}>Acp.</th>
                    </tr>
                </thead>
                <tbody className={styling.table_body}>
                    {rows}
                </tbody>
            </Table>
        </div>
    );
}

export default ResultsTable