import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/hero/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import Navbar from "../components/ui/Navbar";

const DashboardRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid py-3">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroID" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default DashboardRoutes;
