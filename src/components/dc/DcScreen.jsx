import React, { Fragment } from "react";
import HeroList from "../hero/HeroList";

const DcScreen = () => {
  return (
    <Fragment>
      <h1>Dc Screen</h1>
      <hr />
      <HeroList publisher={"DC Comics"} />
    </Fragment>
  );
};

export default DcScreen;
