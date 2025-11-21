import React from "react";
import { createRoot } from "react-dom/client";
import NightVisionSite from "./NightVisionSite.jsx";
import "./site.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NightVisionSite />
  </React.StrictMode>
);
