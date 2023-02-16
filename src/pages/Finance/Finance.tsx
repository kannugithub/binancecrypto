import { BubbleChart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import {
  Storefront,
  VolunteerActivism,
  LockPerson,
  AccountBalance,
  CreditCard,
  Wallet,
} from "@mui/icons-material";
import bgHome from "../../assets/bg-home-cards.png";
import Cashback from "../../assets/bg-landing-bnb-cashback-light.png";
import lowestFee from "../../assets/bg-landing-lowest-fee-light.png";
import Mobile from "../../assets/bg-landing-device-light.png";
import React from "react";
import "./Finance.css";

const Finance = () => {
  return (
    <>
      <div className="finance-main">
        <Container fixed>
          <div className="finance-banner">
            <div className="finance-txt-sec">
              <h1>Welcome to the Binance Card</h1>
              <p>
                Earn up to 8% BNB cashback every time you make an eligible
                purchase.
              </p>
              <Button variant="contained" className="btn">
                Register Interest
              </Button>
            </div>
            <div className="finance-img-sec">
              <img src={bgHome} alt="" className="finance-img" />
            </div>
          </div>
          <div className="finance-icon-sec2">
            <div className="finc-icon-items">
              <Storefront sx={{ color: "primary.main", fontSize: "60px" }} />
              <p>Spend at 90+ million Mastercard merchants worldwide</p>
            </div>
            <div className="finc-icon-items">
              <VolunteerActivism
                sx={{ color: "primary.main", fontSize: "60px" }}
              />
              <p>Hold and Exchange Crypto only when you are making payments</p>
            </div>
            <div className="finc-icon-items">
              <LockPerson sx={{ color: "primary.main", fontSize: "60px" }} />
              <p>
                Spend with your Virtual Card immediately after successful
                application
              </p>
            </div>
          </div>
          <div className="cashB-sec">
            <div className="cashB-txt-sec">
              <h2>
                Earn up to 8%{" "}
                <span style={{ color: "#f0b90b" }}>BNB Cashback</span> everytime
                you spend
              </h2>
              <p>
                All your cashback from eligible purchases are automatically
                deposited in your Funding Wallet so you only need to worry about
                spending your crypto.
              </p>
              <Button variant="text" sx={{ marginTop: "15px" }}>
                Learn More
              </Button>
            </div>
            <div className="cashB-img-sec">
              <img src={Cashback} alt="" className="cashB-img" />
            </div>
          </div>
          <div className="lowest-sec">
            <div className="lowest-img-sec">
              <img src={lowestFee} alt="" className="lowest-img" />
            </div>
            <div className="lowest-txt-sec">
              <h2>
                <span style={{ color: "#f0b90b" }}>Lowest Fees</span> in the
                Market
              </h2>
              <p>
                Free ATM withdrawal. No foreign exchange fees and annual fees.
                *Third-party fees may still be applicable
              </p>
              <Button variant="text" sx={{ marginTop: "15px" }}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="spend-sec">
            <div className="spend-txt-sec">
              <h2>Spend Anywhere, Anytime</h2>
              <p>
                Use your Binance Card in over 60+ million merchants worldwide
              </p>
              <Button variant="contained" className="btn">
                Register interest
              </Button>
            </div>
            <div className="spend-img-sec">
              <img src={Mobile} alt="" className="spend-img" />
            </div>
          </div>
          <div className="cards-work-sec">
            <h2>How your card works</h2>
            <div className="cards-work">
              <div className="cards-items card-1">
                <AccountBalance
                  sx={{ color: "primary.main", fontSize: "60px" }}
                />
                <p>Top-up crypto to your Funding Wallet</p>
              </div>
              <div className="cards-items card-2">
                <CreditCard sx={{ color: "primary.main", fontSize: "60px" }} />
                <p>Spend anywhere you see the Mastercard logo</p>
              </div>
              <div className="cards-items card-3">
                <Wallet sx={{ color: "primary.main", fontSize: "60px" }} />
                <p>Earn BNB cashback</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Finance;
