import React from "react";
import { Button, Container } from "@mui/material";
import tradeImg from "../../assets/trade-img.jpg";
import traderwagon from "../../assets/trader-wagon.svg";
import savepal from "../../assets/safepal.svg";
import cryptorg from "../../assets/cryptorg.svg";
import tradesanta from "../../assets/tradesanta.svg";
import moonbot from "../../assets/moonbot.svg";
import {
  RequestQuote,
  CurrencyExchange,
  AutoGraph,
  CurrencyBitcoin,
} from "@mui/icons-material";
import "./Derivatives.css";

const Derivatives = () => {
  return (
    <>
      <div className="deri-main-sec">
        <Container>
          <div className="deriva-sec2">
            <h1>Trade Crypto Futures</h1>
            <div>
              <Button className="btn" variant="contained">
                Open Account
              </Button>
            </div>
          </div>
        </Container>
        <div className="deri-icon-sec">
          <Container>
            <div className="icon-items-sec">
              <div className="deri-icon-item">
                <RequestQuote
                  sx={{ color: "primary.main", fontSize: "60px", mb: 1 }}
                />
                <h3>USDⓈ-M Futures</h3>
                <p>Perpetual or Quarterly Contracts settled in USDT or BUSD.</p>
                <Button variant="contained" className="btn">
                  Trade Now
                </Button>
              </div>
              <div className="deri-icon-item">
                <CurrencyExchange
                  sx={{ color: "primary.main", fontSize: "60px", mb: 1 }}
                />
                <h3>COIN-M Futures</h3>
                <p>
                  Perpetual or Quarterly Contracts settled in Cryptocurrency.
                </p>
                <Button variant="contained" className="btn">
                  Trade Now
                </Button>
              </div>
              <div className="deri-icon-item">
                <AutoGraph
                  sx={{ color: "primary.main", fontSize: "60px", mb: 1 }}
                />
                <h3>Strategy Trading</h3>
                <p>
                  Automate your Futures trading strategy with just one click.
                </p>
                <Button variant="contained" className="btn">
                  Trade Now
                </Button>
              </div>
              <div className="deri-icon-item">
                <CurrencyBitcoin
                  sx={{ color: "primary.main", fontSize: "60px", mb: 1 }}
                />
                <h3>Binance Options</h3>
                <p>
                  Crypto Options made simple. Limited risk and unlimited
                  profits.
                </p>
                <Button variant="contained" className="btn">
                  Trade Now
                </Button>
              </div>
            </div>
            <div className="deri-img-sec-main">
              <div className="deri-img-text-sec">
                <h2>
                  Invite Your Friends to Start Futures Grid Trading: Share Up to
                  35,000 USDT!
                </h2>
                <p>
                  Binance Futures is launching three promotions to reward our
                  community this Valentine's Day! Eligible users will stand to
                  receive a VIP Upgrade Voucher and share a total rewards pool
                  of up to 35,000 USDT by simply creating futures grid
                  strategies, sharing their futures grid strategies on social
                  media, and inviting their friends to join the promotions!{" "}
                </p>
                <div className="deri-btn-sec-main">
                  <div className="deri-img-btn-sec">
                    <Button variant="contained" className="btn">
                      Learn More
                    </Button>
                  </div>
                  <div className="deri-img-btn-sec2">
                    <Button variant="contained" className="btn">
                      Enroll Me
                    </Button>
                  </div>
                </div>
              </div>
              <div className="deri-img-sec">
                <img src={tradeImg} alt="" className="vip-upgrade" />
              </div>
            </div>
          </Container>
        </div>
        <div className="partners-sec">
          <Container>
            <div className="partners-txt">
              <h2>Broker Partners</h2>
              <p>
                These companies operate independently. Binance only provides
                technical services.
              </p>
            </div>
            <div className="partners-icon-sec">
              <div className="partners-icons-items">
                <img src={traderwagon} alt="" className="part-img" />
                <Button variant="contained" className="btn">
                  TraderWagon
                </Button>
              </div>
              <div className="partners-icons-items">
                <img src={savepal} alt="" className="part-img" />
                <Button variant="contained" className="btn">
                  Safepal
                </Button>
              </div>
              <div className="partners-icons-items">
                <img src={cryptorg} alt="" className="part-img" />
                <Button variant="contained" className="btn">
                  Cryptorg
                </Button>
              </div>
              <div className="partners-icons-items">
                <img src={tradesanta} alt="" className="part-img" />
                <Button variant="contained" className="btn">
                  TradeSanta
                </Button>
              </div>
              <div className="partners-icons-items">
                <img src={moonbot} alt="" className="part-img" />
                <Button variant="contained" className="btn">
                  Moonbot
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Derivatives;
