"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("SW registrado:", reg.scope))
          .catch((err) => console.error("Erro no SW:", err));
      });
    }
  }, []);

  return null; // Este componente não renderiza nada visualmente
}