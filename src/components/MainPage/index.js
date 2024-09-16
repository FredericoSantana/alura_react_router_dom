import React from 'react';
import Banner from "../Banner";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <main>
      <Banner/>
      <Outlet/>
    </main>
  );
};

export default MainPage;