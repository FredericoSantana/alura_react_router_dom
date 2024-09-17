import React from 'react';
import Banner from "../Banner";
import { Outlet } from "react-router-dom";

const MainPage = ({ children }) => {
  return (
    <main>
      <Banner/>
      <Outlet/>
      { children }
    </main>
  );
};

export default MainPage;