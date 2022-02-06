// react basics
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";

// icons
import { BsInfoCircle, BsListUl, BsArrowLeftSquare, BsCodeSlash } from "react-icons/bs"

// styling
import styling from "./Navigation.module.scss"

function Navigation(props) {

  const [icon, setIcon] = useState(new BsListUl());

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      setIcon(new BsListUl());
    } else {
      setIcon(new BsArrowLeftSquare());
    }
  }, [location]);

  return (
    <Navbar sticky="top" className={styling.navbar + " top"}>
      <Link to="/">
        <div className={styling.nav_element}>
          {icon}
        </div>
      </Link>
      <div className={styling.nav_text + " overflow-y"}>{props.title}</div>
      {props.dev === "true" &&
        <Link to="/dev">
          <div className={styling.nav_element}><BsCodeSlash /></div>
        </Link>
      }
      <Link to="/about">
        <div className={styling.nav_element}><BsInfoCircle /></div>
      </Link>
    </Navbar>
  );
}

export default Navigation;