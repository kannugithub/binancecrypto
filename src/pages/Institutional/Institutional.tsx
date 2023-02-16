import React from "react";
import "./Institutional.css";
import logoLight from "../../assets/logo-light.svg";
import solutions from "../../assets/solutions-bg-new.svg";
import tradingOtc from "../../assets/tradingOtc.svg";
import custody from "../../assets/custody-new.svg";
import broker from "../../assets/broker-program-new.svg";
import liquidity from "../../assets/liquidity-program-new.svg";
import btc from "../../assets/btc.svg";
import busd from "../../assets/busd.svg";
import bnb from "../../assets/bnb.svg";
import professional from "../../assets/professional-services.svg";
import { Button, Container } from "@mui/material";
import { Check } from "@mui/icons-material";

const Institutional = () => {
  return (
    <>
      <div className="inst-main-sec">
        <Container>
          <div className="inst-banner-sec">
            <div className="banner-txt-sec">
              <h1>
                Your Trusted Platform in <br />
                Digital Assets for Institutions
              </h1>
              <p>
                Built by the world's largest digital asset exchange, Binance
                Institutional offers unparalleled
                <br /> access to digital asset solutions for VIP clients and
                institutions.
              </p>
              <Button variant="contained" className="btn">
                Get Started
              </Button>
            </div>
            <div></div>
          </div>
        </Container>
      </div>
      <div className="tail-sec2">
        <Container>
          <h2>Tailored Solutions Built Specifically for Institutions</h2>
          <div className="tail-head-sec">
            <div className="tail-icon-sec">
              <div className="icon-inner-main">
                <div className="icon-inner-sec">
                  <img src={tradingOtc} alt="" className="tail-icons" />
                </div>
                <div className="icon-txt-sec">
                  <h4>Execution & OTC Services</h4>
                  <p>
                    Trade on credit and get flexible financing solutions for OTC
                    with competitive rates and preferred terms
                  </p>
                  <Button variant="text">Learn More</Button>
                </div>
              </div>
              <div className="icon-inner-main">
                <div className="icon-inner-sec">
                  <img src={custody} alt="" className="tail-icons" />
                </div>
                <div className="icon-txt-sec">
                  <h4>Asset Management & Custody</h4>
                  <p>
                    Store and manage your digital assets on a licensed and
                    regulated platform that supports over 200 assets
                  </p>
                  <Button variant="text">Learn More</Button>
                </div>
              </div>
              <div className="icon-inner-main">
                <div className="icon-inner-sec">
                  <img src={broker} alt="" className="tail-icons" />
                </div>
                <div className="icon-txt-sec">
                  <h4>Link Program</h4>
                  <p>
                    Supercharge your business and earn commissions on trading
                    via Binance's liquidity and market depth
                  </p>
                  <Button variant="text">Learn More</Button>
                </div>
              </div>
              <div className="icon-inner-main">
                <div className="icon-inner-sec">
                  <img src={liquidity} alt="" className="tail-icons" />
                </div>
                <div className="icon-txt-sec">
                  <h4>Liquidity Program</h4>
                  <p>
                    Enjoy attractive rebates from trading in our spot and
                    futures markets, with the world's best liquidity
                  </p>
                  <Button variant="text">Learn More</Button>
                </div>
              </div>
            </div>
            <div className="tail-img-sec">
              <img src={solutions} alt="" />
            </div>
          </div>
          <div className="choose-bin-sec">
            <div className="bin-sec-inner">
              <div className="bin-txt-sec">
                <h2>Why Institutions Choose Binance</h2>
                <p>
                  As a pioneer in the digital asset industry, Binance
                  Institutional delivers market-leading and customized solutions
                  to all types of institutions:
                </p>
                <div>
                  <ul className="bin-list2">
                    <li>
                      <Check />
                      Over 1450 pairs for various spot trading needs
                    </li>
                    <li>
                      <Check />
                      Largest futures trading volume with over 200 contracts
                    </li>
                    <li>
                      <Check />
                      Comprehensive Binance blockchain ecosystem
                    </li>
                    <li>
                      <Check />
                      Access to the deepest cryptocurrency liquidity pool
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bin-col-sec">
                <div className="bin-col-sec1">
                  <div className="col-inner">
                    <h2>1st</h2>
                    <p>in aggregated spot & futures trading volume</p>
                  </div>
                  <div className="col-inner">
                    <h2>$100 billion</h2>
                    <p>24 hour trading volume peak</p>
                  </div>
                </div>

                <div className="bin-col-sec2">
                  <div className="col-inner">
                    <h2>$7.7 trillion</h2>
                    <p>annual exchange volume</p>
                  </div>
                  <div className="col-inner">
                    <h2>90 million</h2>
                    <p>registed users, and increasing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="compet-sec">
            <h1>Competitive Fees</h1>
            <div className="compet-main-head">
              <div className="compet-icon-sec">
                <div className="comp-icon-items">
                  <div className="comp-img-items">
                    <img src={btc} alt="" className="comp-imgs" />
                  </div>
                  <div className="comp-txt-items">
                    <h3>Zero BTC Fees</h3>
                    <p>
                      Trade Bitcoin at no cost. No transaction fee is charged
                      when trading BTC with eligible stablecoin and fiat.
                    </p>
                    <Button variant="text" sx={{ textTransform: "capitalize" }}>
                      Trade BTC
                    </Button>
                  </div>
                </div>
                <div className="comp-icon-items">
                  <div className="comp-img-items">
                    <img src={bnb} alt="" className="comp-imgs" />
                  </div>
                  <div className="comp-txt-items">
                    <h3>BNB Fee Deduction</h3>
                    <p>
                      Not only BNB serves an pivotal part in Binance Smart
                      Chain, also enjoy up to 25% off in spot fees when you
                      choose BNB to pay for your trading.
                    </p>
                    <Button variant="text" sx={{ textTransform: "capitalize" }}>
                      Trade BTC
                    </Button>
                  </div>
                </div>
                <div className="comp-icon-items">
                  <div className="comp-img-items">
                    <img src={busd} alt="" className="comp-imgs" />
                  </div>
                  <div className="comp-txt-items">
                    <h3>BUSD Trading Pairs</h3>
                    <p>
                      We offer even lower fee structure on BUSD trading pairs.
                      Zero maker fee is applied on all spot and margin BUSD
                      pairs.
                    </p>
                    <Button variant="text" sx={{ textTransform: "capitalize" }}>
                      Trade BTC
                    </Button>
                  </div>
                </div>
              </div>
              <div className="compet-img-sec">
                <img src={professional} alt="" className="comp-main-img" />
              </div>
            </div>
          </div>
        </Container>
        <div className="inst-footer-sec">
          <Container>
            <div className="footer-main-sec">
              <h2>Unlock Your Digital Asset Future with Binance</h2>
              <div className="foot-btn-sec">
                <div className="foot-btn1">
                  <Button variant="contained" className="btn">
                    Register Now
                  </Button>
                </div>
                <div className="foot-btn2">
                  <Button variant="contained" className="btn">
                    Trade Now
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Institutional;
