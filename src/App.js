//app.js


import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import { PublicRoutes } from "./Routes/PublicRoutes";
import { UserRoutes } from "./Routes/UserRoutes";
import UserDashboard from "./Components/UserDashboard/UserDashboard";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {PublicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Route>

      {/* User Routes */}
      <Route path="/user-dashboard" element={<RootLayout />}>
        <Route index element={<UserDashboard />} />
        {UserRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
