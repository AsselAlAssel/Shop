import React from "react";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <React.Fragment>
  
        <marquee behavior="" >
          <span> CHECK OUT OUR OFFICIAL PEANUTS COLLABORATION!</span>
        </marquee>
        <ul className={classes.header}>
            <li></li>
            <li><img src={require('./pics/logo.png')} alt="" /></li>

        </ul>
     
    </React.Fragment>
  );
};
export default Header;