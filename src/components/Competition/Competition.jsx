// react basics
import React, { useState } from "react";
import { useEffect } from "react";

// components
import { Scoreboard } from "./";
import { ScoreboardList } from "./";
import { Results } from "./";
import { BsChevronUp, BsChevronDown } from "react-icons/bs"

// styling
import styling from "./Competition.module.scss";

function Competition(props) {
    useEffect(() => {
        props.navbarHandler("Competition");
    }, [null]);

    const [ScoreboardSize, setScoreboardSize] = useState(window.innerWidth >= 992 ? "reg" : "min");
    const [ButtonIcon, setButtonIcon] = useState(window.innerWidth >= 992 ? new BsChevronUp() : new BsChevronDown());


    function changeScoreboardSize() {
        if (ScoreboardSize === "reg") {
            setScoreboardSize("min");
            setButtonIcon(new BsChevronDown());
        } else {
            setScoreboardSize("reg");
            setButtonIcon(new BsChevronUp());
        }
    };

    // TODO Stuff that belongs to api

    function Category(id, name, status, competitors) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.competitors = competitors;
    }

    function Competitor(id, no, name, club, score_submitted, score_accomplished) {
        this.id = id;
        this.no = no;
        this.name = name;
        this.club = club;
        this.score_submitted = score_submitted;
        this.score_accomplished = score_accomplished;
    }

    var cats = [new Category(
        1,
        "2er Kunstfahren Juniorinnen U19",
        "upcoming",
        [new Competitor(
            104,
            104,
            "Carla Mayr / Sarah Schottky",
            "RSV Pullach",
            20.06,
            (20.06 * 0.75).toFixed(2)
        ),
        new Competitor(
            105,
            105,
            "Melanie Denise Kühnel / Magdalena Seidl",
            "RKB Solidarität Bruckmühl e.V",
            35.10,
            (35.10 * 0.75).toFixed(2)
        ),
        new Competitor(
            106,
            106,
            "Klara Gebhardt / Marlene Kieser",
            "RKB Soli Hausham",
            67.60,
            (67.60 * 0.75).toFixed(2)
        ),
        new Competitor(
            107,
            107,
            "Katharina Hemme / Lilliane Krüger",
            "RKV Dachau",
            71.60,
            (71.60 * 0.75).toFixed(2)
        ),
        new Competitor(
            108,
            108,
            "Lea Steger / Emily Brenner",
            "RSV Schleißheim",
            113.90,
            (113.90 * 0.75).toFixed(2)
        )]
    ),
    new Category(
        2,
        "2er Kunstfahren Junioren U19 (offen)",
        "ongoing",
        [new Competitor(
            109,
            109,
            "Benedikt Demmeler / Maritu Mäder",
            "RSV Pullach",
            40.80,
            (40.80 * 0.75).toFixed(2)
        ),
        new Competitor(
            110,
            110,
            "Markus Wechner / Alexander Stadler",
            "RSV Schleissheim",
            109.90,
            (109.90 * 0.75).toFixed(2)
        )]
    ),
    new Category(
        3,
        "6er Kunstfahren Elite (offen)",
        "done",
        [new Competitor(
            111,
            111,
            "RSV Steinhöring",
            "RSV Steinhöring",
            181.00,
            (181.00 * 0.75).toFixed(2)
        )]
    )];


    return (
        <div>
            <ScoreboardList>
                <Scoreboard size={ScoreboardSize} num="120" cat="2er offene Klasse" time="15:42" name="Alexander Scherer / Kirstin Wannemaker" score_submitted="153,00" score_current="120,56" />
                <Scoreboard size={ScoreboardSize} num="120" cat="2er offene Klasse" time="15:42" name="Alexander Scherer" score_submitted="153,00" score_current="120,56" />
            </ScoreboardList>
            <div className={styling.up_button_container}>
                <div onClick={changeScoreboardSize} className={styling.up_button}>
                    {ButtonIcon}
                </div>
            </div>
            <Results results={cats}>

            </Results>
        </div>
    );
}

export default Competition