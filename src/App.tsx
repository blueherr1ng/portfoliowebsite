import React from "react";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "@tanstack/react-router"; // 1. Import Outlet

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-24 pb-20 bg-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
