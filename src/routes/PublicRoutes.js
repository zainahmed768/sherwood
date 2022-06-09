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
import Ourexperince from "../pages/Experince/Ourexperience";
import Sales from "../pages/Sales/Sales";
import Purchase from "../pages/Purchase/Purchase";
import Manage from "../pages/Services/Management";
import Special from "../pages/Services/Special";
import Family from "../pages/Services/Family";
import Liquid from "../pages/Services/Liquid";
import Benefit from "../pages/Services/Benefit";
import Manageliquid from "../pages/Services/Manageliquid";
import Fedral from "../pages/Services/Fedral";
import Debtor from "../pages/Services/Debtor";
import Monitization from "../pages/Services/Monitization";
import Affilations from "../pages/Services/Affilations";
import Corporate from "../pages/Services/Corporate";
import Agency from "../pages/Services/Agencyip";
import Strategy from "../pages/Services/Strategy";
import Debt from "../pages/Services/Debt";
import Wellness from "../pages/Services/Wellness";
import Lta from "../pages/Services/Lta";
import Financial from "../pages/Services/Financial";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
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
        <Route path="ourexperince" element={<Ourexperince />} />
        <Route path="Sales" element={<Sales />} />
        <Route path="Purchase" element={<Purchase />} />
        <Route path="Management" element={<Manage />} />
        <Route path="Special" element={<Special />} />
        <Route path="Family" element={<Family />} />
        <Route path="Liquid" element={<Liquid />} />
        <Route path="Benefit" element={<Benefit />} />
        <Route path="Manageliquid" element={<Manageliquid />} />
        <Route path="Fedral" element={<Fedral />} />
        <Route path="Debtor" element={<Debtor />} />
        <Route path="Monitization" element={<Monitization />} />
        <Route path="Affilations" element={<Affilations />} />
        <Route path="Corporate" element={<Corporate />} />
        <Route path="Agencyip" element={<Agency />} />
        <Route path="Strategy" element={<Strategy />} />
        <Route path="Debt" element={<Debt />} />
        <Route path="wellness" element={<Wellness />} />
        <Route path="Lta" element={<Lta />} />
        <Route path="Financial" element={<Financial />} />
      
     
        




        
      </Routes>
    </BrowserRouter>
  );
};



export default PublicRoutes;
