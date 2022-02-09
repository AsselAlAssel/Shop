import React from "react";
import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.menu}></div>
        <div className={classes.logo}>
          <NavLink to="/">
            <img src={require("../pics/logo.png")} alt="logo" />
          </NavLink>
        </div>
        <div className={classes.cart}>
          <img src={require("../pics/cart.png")} alt="" />
        </div>
      </div>
      <marquee>
        <span> CHECK OUT OUR OFFICIAL PEANUTS COLLABORATION!</span>
      </marquee>
    </React.Fragment>
  );
};
export default Header;
