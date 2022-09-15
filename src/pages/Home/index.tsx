import React from "react";
import logo from "../../assets/SVG/faceB.svg";
import "../../Styles/styles.css";

export const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bem Vindo ao meu Projeto.</p>
        <a className="App-link" href="/">
          Home
        </a>
        <a className="App-link" href="/dashboard">
          Ir ao Dashboard
        </a>
        <a className="App-link" href="/list">
          Ir ao List
        </a>
        <a className="App-link" href="/signin">
          Ir ao SignIn
        </a>
      </header>
    </div>
  );
};
