import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Presidents from "../pages/About/Presidents";
import SherwoodProfessionals from "../pages/About/SherwoodProfessionals";
import SherwoodBoardMembers from "../pages/About/SherwoodBoardMembers";
import BoardMembers from "../pages/About/BoardMembers";
import Services from "../pages/Services/Services";
import BusinessAdvisoryServices from "../pages/Services/BusinessAdvisoryServices";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Presidents" element={<Presidents />} />
        <Route
          path="SherwoodProfessionals"
          element={<SherwoodProfessionals />}
        />
        <Route path="SherwoodBoardMembers" element={<SherwoodBoardMembers />} />
        <Route path="BoardMembers" element={<BoardMembers />} />
        <Route path="Services" element={<Services />} />
        <Route path="BusinessAdvisoryServices" element={<BusinessAdvisoryServices />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
