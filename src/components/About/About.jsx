import React from "react";
import { useEffect } from "react";

// redux
import { useDispatch } from 'react-redux'

// slices
import { setTitle } from "../../features/navbarSlice";

function About(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTitle("About"));
    })

    return (
        <div>
            About
        </div>
    );
}

export default About