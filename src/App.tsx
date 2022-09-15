import React from "react";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import { Layout } from "./components/Layout";
const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
