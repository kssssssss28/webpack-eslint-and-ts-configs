import React from "react";
import ReactDOM from "react-dom";
import "../css/style.less";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <h1> Webpack V5 + React </h1>
      </header>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
