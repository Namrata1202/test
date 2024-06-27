import React from "react";
import {Routes as RouterRoutes,Route,Navigate} from 'react-router'
import User from "../pages/User";
const Routes = () => {
  return (
    <div>
      <RouterRoutes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user" element={<User />} />
      </RouterRoutes>
    </div>
  );
};