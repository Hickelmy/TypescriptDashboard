import React from "react";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
