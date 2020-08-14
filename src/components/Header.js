import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "./../images/Logo_Wache_grün.svg"
import React, {useEeffect, useState, useEffect} from "react"

import "./header.css";

const Header = ({siteTitle }) => {
  const [hasDeltaY, setHasDeltaY] = useState(false);
  const checkForDeltaY = (e) => {
    console.log(hasDeltaY, window.scrollY)
    if(!hasDeltaY && window.scrollY > 0 ){
      setHasDeltaY(true);
    }
    else if(hasDeltaY && window.scrollY === 0){
      setHasDeltaY(false)
    }
  }
  useEffect(() =>{
    window.addEventListener("scroll", checkForDeltaY);
    return (() => window.removeEventListener("scroll", checkForDeltaY));
  }, [hasDeltaY])
  return(
    <header style={hasDeltaY ? {boxShadow: "rgb(215 215 215) 0px 2px 3px 0px"} : {}}className="component_header">
      <div className="header_half">
        <div className="header_logoWrapper"></div>
        <Link
          to="/"
          className="header_a"
        >
          <div className="header_logoTitleWrapper">
            <img className="header_logo" src={Logo}></img>
            <h1 className="header_title">{siteTitle}</h1>
          </div>
        </Link>
      </div>
      <div className="header_half second">
        <Link to="/" className="header_menu">
          <div className="header_menuItemWrapper">
            <span className="header_menuItem">Unsere Leistungen</span>
          </div>
        </Link>
        <Link to="/" className="header_menu">
          <div className="header_menuItemWrapper">
            <span className="header_menuItem">Über Uns</span>
          </div>
        </Link>
        <Link to="/" className="header_menu">
          <div className="header_menuItemWrapper">
            <span className="header_menuItem">Kontakt</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
