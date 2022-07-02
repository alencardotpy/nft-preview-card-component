import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

const container = document.getElementById("root");
root = createRoot(container);

root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
