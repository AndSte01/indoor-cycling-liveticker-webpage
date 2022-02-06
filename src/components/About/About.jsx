import React from "react";
import { useEffect } from "react";

function About(props) {
    useEffect(() => {
        props.navbarHandler("About");
    }, [null]);

    return (
        <div>
            About
        </div>
    );
}

export default About