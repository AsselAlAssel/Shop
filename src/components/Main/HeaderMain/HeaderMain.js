import React from "react";
import classes from "./HeaderMain.module.scss";
import { imgs } from "../../pics/Imgs";
import Connectivity from "./Connectivity ";
import Button from "../../UI/Button";
const HeaderMain = () => {
  const temp = [imgs.bag1, imgs.pants, imgs.tshirt8, imgs.sock1];

  let i = 0;
  setInterval(() => {
    document.getElementById("img-cahnge").src = temp[i++];
    i = i % temp.length;
  }, 1000);
  return (
    <React.Fragment>
    <div className={classes["header-main"]}>
      <div className={classes.img}>
        <img src={imgs.pants} alt="" id="img-cahnge" />
      </div>

      <div className={classes.text}>
        <p>Everything you need to complete the outfit.</p>
        <Button>SHOP ACCESSORIES</Button>
      </div>
      
    </div>
    <Connectivity/>
    </React.Fragment>
  );
};
export default HeaderMain;
