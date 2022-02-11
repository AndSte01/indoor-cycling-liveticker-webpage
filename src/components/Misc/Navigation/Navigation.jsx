// react basics
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";

// icons
import { BsInfoCircle, BsListUl, BsArrowLeftSquare, BsCodeSlash } from "react-icons/bs"

// styling
import styling from "./Navigation.module.scss"

// redux
import { useSelector } from 'react-redux'

function Navigation(props) {

  const [icon, setIcon] = useState(new BsListUl());

  const title = useSelector((state) => state.navbar.title)

  useEffect(() => {
    if (title === "") {
      setIcon(new BsListUl());
    } else {
      setIcon(new BsArrowLeftSquare());
    }
  }, [title]);

  return (
    <Navbar sticky="top" className={styling.navbar + " top"}>
      <Link aria-label="Home" to="/">
        <div className={styling.nav_element}>
          {icon}
        </div>
      </Link>
      <div className={styling.nav_text + " overflow-y"}>{title}</div>
      {props.dev === "true" &&
        <Link aria-label="Developer tools" to="/dev">
          <div className={styling.nav_element}><BsCodeSlash /></div>
        </Link>
      }
      <Link aria-label="About" to="/about">
        <div className={styling.nav_element}><BsInfoCircle /></div>
      </Link>
    </Navbar>
  );
}

export default Navigation;