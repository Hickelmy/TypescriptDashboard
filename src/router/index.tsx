import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { NotFound } from '../pages/NotFound'
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { List } from "../pages/List";
import { SignIn } from "../pages/SignIn";

export function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<NotFound  />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/list" element={<List />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
