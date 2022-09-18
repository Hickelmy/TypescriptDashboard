import React from "react";
import { AppRoutes } from "./router";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import { Layout } from "./components/Layout";
import dark from "./themes/dark";
import light from "./themes/light";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Layout />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
