import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../layout/AppLayout";

function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
