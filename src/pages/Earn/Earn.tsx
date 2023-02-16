import React from "react";
import "./Earn.css";
import hooked from "../../assets/hooked.jpg";
import logos from "../../assets/logos.jpg";
import { Button, Container } from "@mui/material";
import IconBox from "../../layouts/IconBox/IconBox";
const Earn = () => {
  return (
    <>
      <div className="earn-main-sec">
        <Container>
          <div className="earn-banner-sec">
            <h1>Binance's Token Launch Platform</h1>
            <p>Buy or earn new tokens directly on Binance</p>
            <div className="banner-count-sec">
              <div className="counter-items">
                <h2>$ 0</h2>
                <p>Current Funds Locked</p>
              </div>
              <div className="counter-items">
                <h2>$ 11,18,75,397</h2>
                <p>Total Funds Raised</p>
              </div>
              <div className="counter-items">
                <h2>66</h2>
                <p>Projects Launched</p>
              </div>
              <div className="counter-items">
                <h2>37,50,985</h2>
                <p>All-time Unique Participants</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="launchpad-sec">
        <Container>
          <h2>Launchpad</h2>
          <div className="launc-sec2">
            <div className="launch-img">
              <img src={hooked} alt="" className="launch-img" />
            </div>
            <div className="launch-txt">
              <h3>Hooked Protocol</h3>
              <p>A Web3 Gamified Social Learning Platform</p>
              <div className="launch-inner-txt">
                <div className="txt-sec1">
                  <div className="token-txt-items">
                    <span className="lbl">Tokens Offered</span>
                  </div>
                  <div className="token-txt-items">
                    <span className="lbl">Sale Price</span>
                  </div>
                </div>
                <div className="txt-sec1-1">
                  <div className="token-txt-items">
                    <span className="num-lbl">2,50,00,000.0000 HOOK</span>
                  </div>
                  <div className="token-txt-items">
                    <span className="num-lbl">1 HOOK = 0.00033810 BNB</span>
                  </div>
                </div>
                <div className="txt-sec2">
                  <div className="token-txt-items">
                    <span className="lbl">Participants</span>
                  </div>
                  <div className="token-txt-items">
                    <span className="lbl">Total committed</span>
                  </div>
                </div>
                <div className="txt-sec2-2">
                  <div className="token-txt-items">
                    <span className="num-lbl">1,14,772</span>
                  </div>
                  <div className="token-txt-items">
                    <span className="num-lbl">90,10,765.2954 BNB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-sec">
            <div className="pro-txt-sec">
              <h2>
                Launch a project on
                <br /> Binance now!
              </h2>
              <p>
                Binance Launchpad and Launchpool are platforms that help and
                advise project teams on how to best issue and launch their
                token. We provide a full service offering starting from advisory
                services
              </p>
              <Button variant="contained" className="btn">
                Apply to Launch
              </Button>
            </div>
            <div className="pro-img-sec">
              <img src={logos} alt="" className="pro-img" />
            </div>
          </div>
          <div className="choose-sec">
            <h2>Why choose us?</h2>
            <IconBox />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Earn;
