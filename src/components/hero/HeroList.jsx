import React, { Fragment, useMemo } from "react";
import getHeroByPublisher from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <Fragment>
      <div className="row animate__animated animate__lightSpeedInLeft">
        {heroes.map((hero) => (
          <div key={hero.id} className="col-md-4 mb-3">
            <HeroCard {...hero} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HeroList;
