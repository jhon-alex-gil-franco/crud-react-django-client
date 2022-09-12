import React from "react";
import { Routes, Route } from "react-router-dom";

//importacion de componentes principales para renderizado de las vistas.
import { RegisterCompanyScreen } from "../pages/companies/FormCompanyScreen";
import { CompanyScreen } from "../pages/companies/CompanyScreen";
import { NavbarComponent as Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<RegisterCompanyScreen />} />
          <Route path="/companies" element={<CompanyScreen />} />
          <Route path="/update:id" element={<RegisterCompanyScreen />} />
        </Routes>
      </div>
    </>
  );
};
