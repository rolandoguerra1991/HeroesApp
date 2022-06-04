import React, { Fragment, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm";
import queryString from "query-string";
import getHeroByName from "../../selectors/getHeroByName";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;
  const heroesFiltered = useMemo(() => getHeroByName(searchText), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <Fragment>
      <h1>Buscar</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busqueda</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar heroe"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          <div className="row">
            {heroesFiltered.map((hero) => (
              <div key={hero.id} className="col-12 mb-3">
                <HeroCard {...hero} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchScreen;
