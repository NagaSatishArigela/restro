import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Sidebar from "./components/sidebar/sidebar";
import Contacts from "./pages/contacts";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/inbox";
// import NotFound from "./pages/NotFound";
import Reports from "./pages/reports";
import Reservations from "./pages/reservations";
import Settings from "./pages/settings";

function PageRoutes() {
  return (
    <>
    <Layout/>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/messages" exact element={<Inbox />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reservations" element={<Reservations />}></Route>
        {/* <Route component={NotFound}/> */}
      </Routes>
    </>
  );
}

export default PageRoutes;
