import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Metrics } from "./Metrics";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Metrics />
  </StrictMode>
);