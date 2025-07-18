import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  // Valores para mover luces (top y left pueden ser % o px)
  const lightLeftTop = { top: "50%", left: "25%" };
  const lightCenterTop = { top: "50%", left: "50%" };

  return (
    <div
      className="min-h-screen w-full text-white overflow-x-hidden flex flex-col bg-gradient-to-b from-[#0a0f14] to-[#121519]"
    >
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Luz grande en la esquina izquierda */}
        <div
          className="absolute w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(0,255,201,0.5)_0%,_rgba(0,0,0,0)_70%)] opacity-70 blur-[80px]"
          style={{ top: lightLeftTop.top, left: lightLeftTop.left }}
        ></div>

        {/* Luz más pequeña y menos intensa en el centro */}
        <div
          className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(0,255,201,0.4)_0%,_rgba(0,0,0,0)_70%)] opacity-60 blur-[60px]"
          style={{ top: lightCenterTop.top, left: lightCenterTop.left }}
        ></div>
      </div>

      <Navbar />
      <main className="flex-grow w-full bg-transparent">{children}</main>

      {/* Footer transparente para no cortar fondo */}
    </div>
  );
}