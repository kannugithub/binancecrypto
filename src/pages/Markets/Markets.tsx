import React from "react";
import { Container } from "@mui/system";
import currency from "../../../assets/seo-currency.svg";
import group from "../../assets/seo-group.svg";
import id from "../../assets/seo-id.svg";
import frame from "../../assets/seo-frame3.svg";
import p2pMobile from "../../assets/p2p-advantage-sample-app.png";
import Accordian from "../../layouts/Accordian/Accordian";
import "./Markets.css";

import "../../index.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  Addchart,
  CurrencyExchange,
  Email,
  FileCopy,
  PeopleAlt,
  PercentRounded,
  SecurityRounded,
} from "@mui/icons-material";

const Markets = () => {
  return (
    <>
      <div className="main-sec">
        <Container>
          <h2>How P2P Works</h2>
          <div className="icon-sec-p2p">
            <div className="p2p-item">
              <FileCopy
                sx={{
                  color: "primary.main",
                  fontSize: "50px",
                  paddingBottom: "15px",
                }}
              />
              <h3>Place an Order</h3>
              <p>
                Once you place a P2P order, the crypto asset will be escrowed by
                Binance P2P.
              </p>
            </div>
            <div className="p2p-item">
              {" "}
              <CurrencyExchange
                sx={{
                  color: "primary.main",
                  fontSize: "50px",
                  paddingBottom: "15px",
                }}
              />
              <h3>Pay the Seller</h3>
              <p>
                Send money to the seller via the suggested payment methods.
                Complete the fiat transaction and click "Transferred, notify
                seller" on Binance P2P.
              </p>
            </div>
            <div className="p2p-item">
              <Email
                sx={{
                  color: "primary.main",
                  fontSize: "50px",
                  paddingBottom: "15px",
                }}
              />
              <h3>Get your Crypto</h3>
              <p>
                Once the seller confirms receipt of money, the escrowed crypto
                will be released to you.
              </p>
            </div>
          </div>
          <div className="adv-p2p">
            <div className="adv-txt-sec">
              <h2>Advantages of P2P Exchange</h2>
              <div className="icon-sec-p2p2">
                <div className="icon-img">
                  <PercentRounded
                    sx={{ fontSize: "70px", color: "primary.main" }}
                  />
                </div>
                <div className="icon-txt">
                  <h3>Low Transaction Fees</h3>
                  <p>
                    On Binance P2P, takers are charged zero trading fees. We
                    pledge to apply the lowest P2P transaction fees for all
                    markets.
                  </p>
                </div>
              </div>
              <div className="icon-sec-p2p2">
                <div className="icon-img">
                  <PeopleAlt sx={{ fontSize: "70px", color: "primary.main" }} />
                </div>
                <div className="icon-txt">
                  <h3>Flexible Payment Methods</h3>
                  <p>
                    Peer-to-peer (P2P) exchanges allow sellers the freedom to
                    define how they want to be paid. Buy and sell crypto with
                    over 700 payment methods, including bank transfer, cash,
                    M-Pesa, and multiple e-wallets.
                  </p>
                </div>
              </div>
              <div className="icon-sec-p2p2">
                <div className="icon-img">
                  <Addchart sx={{ fontSize: "70px", color: "primary.main" }} />
                </div>
                <div className="icon-txt">
                  <h3>Trade at Your Preferred Prices</h3>
                  <p>
                    Trade crypto with the freedom to buy and sell at your
                    preferred prices. Buy or sell from the existing offers, or
                    create trade advertisements to set your own prices.
                  </p>
                </div>
              </div>
              <div className="icon-sec-p2p2">
                <div className="icon-img">
                  <SecurityRounded
                    sx={{ fontSize: "70px", color: "primary.main" }}
                  />
                </div>
                <div className="icon-txt">
                  <h3>Protecting Your Privacy</h3>
                  <p>
                    Unlike credit card or bank transfers, peer-to-peer exchanges
                    do not collect information about buyers and sellers.
                  </p>
                </div>
              </div>
            </div>
            <div className="adv-img-sec">
              <img src={p2pMobile} alt="" className="p2p-mobile" />
            </div>
          </div>
          <div style={{ padding: "50px" }}>
            <h2 style={{ paddingBottom: "30x" }}>FAQs</h2>
            <Accordian />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Markets;
