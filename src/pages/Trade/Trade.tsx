import { Button, Container } from "@mui/material";
import Tradeimg from "../../assets/strategy-trade-futures-header.png";
import CarousalComp from "../../layouts/CarousalComp/CarousalComp";
import Accordian from "../../layouts/Accordian/Accordian";
import { AutoGraph, LocationCity, FactCheck } from "@mui/icons-material";
import "./Trade.css";
import React from "react";

const Trade = () => {
  return (
    <>
      <div className="main-trade">
        <Container>
          <div className="trade-banner-sec">
            <div className="banner-text">
              <h1>Futures Grid</h1>
              <p>
                Amplify your purchasing power with Grid Trading applied to
                COIN-M and USD-M contracts. Deploy long/short strategies and
                benefit from sideways markets.
              </p>
              <Button className="btn" variant="contained">
                Trade Now
              </Button>
            </div>
            <div className="banner-img">
              <img src={Tradeimg} alt="" className="trade-img" />
            </div>
          </div>
        </Container>
        <div className="strategy-sec">
          <CarousalComp />
        </div>
        <Container>
          <div className="feature-sec">
            <div className="feat-items">
              <AutoGraph
                sx={{ color: "primary.main", fontSize: "60px", mb: 1 }}
              />
              <h2>Intuitive Automation</h2>
              <p>
                Set up your algorithmic bot and automate your orders in a few
                clicks with TWAP, VP algos, and Grid trading.
              </p>
            </div>
            <div className="feat-items">
              <LocationCity
                sx={{ color: "primary.main", fontSize: "60px", mb: 1 }}
              />
              <h2>Trending strategies</h2>
              <p>
                Replicate and customize the most profitable trading strategies
                on Spot and Futures Grid.
              </p>
            </div>
            <div className="feat-items">
              <FactCheck
                sx={{ color: "primary.main", fontSize: "60px", mb: 1 }}
              />
              <h2>Deep Liquidity</h2>
              <p>
                Optimize order executions and reduce slippage while capturing
                market trends on the largest exchange.
              </p>
            </div>
          </div>
        </Container>
        <div className="faq-sec">
          <Container>
            <div className="faq-txt">
              <h2>FAQ</h2>
            </div>
            <Accordian />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Trade;
