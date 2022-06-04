import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const image = `../../../assets/img/${id}.jpg`;

  const Characters = () => {
    return (alter_ego !== characters) && <p className="text-muted">{characters}</p>
  }

  return (
    <Fragment>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={image} className="img-fluid rounded-start" alt={superhero} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <Characters />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`} className="card-link">Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroCard;
