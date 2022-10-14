// import { useState } from "react";
import { MainRoutes } from "./Routes/Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./contexts/UserContext";
import { TechsProvider } from "./contexts/TechsContext";

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" />
      <UserProvider>
        <TechsProvider>
          <MainRoutes />
        </TechsProvider>
      </UserProvider>
    </>
  );
};
