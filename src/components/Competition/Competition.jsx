// react basics
import React, { useState } from "react";
import { useEffect } from "react";

// components
import { Scoreboard } from "./";
import { ScoreboardList } from "./";
import { Results } from "./";
import { BsChevronUp, BsChevronDown } from "react-icons/bs"

import { LiveTickerCompetitor, LiveTickerCategory } from "../../api/LiveTickerApi";

// redux
import { useDispatch } from 'react-redux'

// slices
import { setTitle } from "../../features/navbarSlice";

// styling
import styling from "./Competition.module.scss";

function Competition(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTitle("Competition"));
    })

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

    var cats = [new LiveTickerCategory(
        1,
        "2er Kunstfahren Juniorinnen U19",
        "upcoming",
        [new LiveTickerCompetitor(
            104,
            104,
            "Carla Mayr / Sarah Schottky",
            "RSV Pullach",
            20.06,
            (20.06 * 0.75).toFixed(2)
        ),
        new LiveTickerCompetitor(
            105,
            105,
            "Melanie Denise Kühnel / Magdalena Seidl",
            "RKB Solidarität Bruckmühl e.V",
            35.10,
            (35.10 * 0.75).toFixed(2)
        ),
        new LiveTickerCompetitor(
            106,
            106,
            "Klara Gebhardt / Marlene Kieser",
            "RKB Soli Hausham",
            67.60,
            (67.60 * 0.75).toFixed(2)
        ),
        new LiveTickerCompetitor(
            107,
            107,
            "Katharina Hemme / Lilliane Krüger",
            "RKV Dachau",
            71.60,
            (71.60 * 0.75).toFixed(2)
        ),
        new LiveTickerCompetitor(
            108,
            108,
            "Lea Steger / Emily Brenner",
            "RSV Schleißheim",
            113.90,
            (113.90 * 0.75).toFixed(2)
        )]
    ),
    new LiveTickerCategory(
        2,
        "2er Kunstfahren Junioren U19 (offen)",
        "ongoing",
        [new LiveTickerCompetitor(
            109,
            109,
            "Benedikt Demmeler / Maritu Mäder",
            "RSV Pullach",
            40.80,
            (40.80 * 0.75).toFixed(2)
        ),
        new LiveTickerCompetitor(
            110,
            110,
            "Markus Wechner / Alexander Stadler",
            "RSV Schleissheim",
            109.90,
            (109.90 * 0.75).toFixed(2)
        )]
    ),
    new LiveTickerCategory(
        3,
        "6er Kunstfahren Elite (offen)",
        "done",
        [new LiveTickerCompetitor(
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
            <Results results={cats} />
        </div>
    );
}

export default Competition