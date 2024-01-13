// MainLayout.jsx
import React from 'react';
import { Header } from "../Components/Header/header";
import Navigation from '../Components/Navigation/nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
      <Header />
      <Navigation />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
