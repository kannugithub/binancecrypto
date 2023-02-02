import React from "react";
import "./Home.css";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="main-home">
          <div className="col1">
            <h1>Fund your account</h1>
            <p>
              Add cash or crypto funds to your wallet and start trading right
              away
            </p>
            <button className="btn">Fund account</button>
          </div>
          <div className="col2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
