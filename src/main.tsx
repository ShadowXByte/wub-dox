import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <div className="min-h-screen w-full bg-white dark:bg-zinc-950 selection:bg-indigo-500/30">
        <App />
        <Analytics />
      </div>
    </React.StrictMode>
  );
}