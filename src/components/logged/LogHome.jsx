import { React, useEffect, useState } from "react";
import LogNavbar from "./LogNavbar";
import userService from "../../services/UserService";
import Dashboard from "../dashboard/Dashboard";

export default function LogHome(props) {
  return (
    <>
      <div>
        <LogNavbar />
        <div className="Dashboard">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
