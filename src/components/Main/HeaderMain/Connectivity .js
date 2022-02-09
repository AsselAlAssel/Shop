import React from "react";
import { imgs } from "../../pics/Imgs";
import Button from "../../UI/Button";
import classes from "./Connectivity.module.scss";
const Connectivity = () => {
  return (
    <div className={classes["Connectivity"]}>
      <img src={imgs.svg} alt="" width="150px" />
      <h3>Establishing Connectivity In A Digital World</h3>
      <p>
        Our designs reflect a vibrant and colorful world of technology,
        <br /> communication and constant growth to always be changing with the
        world.
      </p>
      <Button>LEARN MORE</Button>
    </div>
  );
};
export default Connectivity;
