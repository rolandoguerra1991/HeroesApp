import React, { Fragment, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import getHeroByID from "../../selectors/getHeroByID";

const HeroScreen = () => {
  const { heroID } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroByID(heroID), [heroID]);

  if (!hero) return <Navigate to="/" />;

  const image = `../../../assets/img/${hero.id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-4">
          <img
            src={image}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__lightSpeedInLeft"
          />
        </div>
        <div className="col-8">
          <h1 className="display-1">{hero.superhero}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First Appearance</b> {hero.first_appearance}
            </li>
          </ul>
          <h5 className="display-5">Characters</h5>
          <p>{hero.characters}</p>

          <button className="btn btn-outline-primary" onClick={handleReturn}>
            Back to list
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroScreen;
