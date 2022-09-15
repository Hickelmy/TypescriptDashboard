import React from "react";
import "../../Styles/styles.css";

export const List: React.FC = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>List.</h1>
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
      </div>{" "}
    </>
  );
};
