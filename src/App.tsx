import React from "react";
import "./assets/css/bootstrap.min.css";
import "./App.css";
import AuthCard from "./components/AuthCard/AuthCard";
import Routes from "./Routes";

function App() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-4 mt-4">
          <AuthCard />
        </div>
        <div className="col-sm-12 col-lg-12 mt-4">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
