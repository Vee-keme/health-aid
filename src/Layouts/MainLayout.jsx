import React, { Children } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* {children} */}
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
