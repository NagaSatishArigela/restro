import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Contacts from "./Pages/contacts";
import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
import Reports from "./Pages/reports";
import Reservations from "./Pages/reservations";
import Settings from "./Pages/settings";

function PageRoutes() {
  return (
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reservations" element={<Reservations/>}></Route>
        {/* <Route component={NotFound}/> */}
      </Routes>
  );
}

export default PageRoutes;
