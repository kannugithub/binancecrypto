import React from "react";
import mobileScreen from "../../assets/mobileScreen.jpg";
import qrcode from "../../assets/qrcode.jpg";
import "./MobileScreenSection.css";
import {
  Apple,
  Android,
  Shop,
  Cancel,
  Window,
  Source,
  ElectricalServices,
  ArrowRight,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Button } from "@mui/material";

// const BrandLogo = [
//   {
//     img: <Apple />,
//     disc: "App Store",
//   },
//   {
//     img: <Android />,
//     disc: "Android APK",
//   },
//   {
//     img: <Shop />,
//     disc: "Google Play",
//   },
//   {
//     img: <Cancel />,
//     disc: "MacOS",
//   },
//   {
//     img: <Window />,
//     disc: "Windows",
//   },
//   {
//     img: <Source />,
//     disc: "Linux",
//   },
//   {
//     img: <ElectricalServices />,
//     disc: "API",
//   },
// ];

const MobileScreenSection = () => {
  return (
    <>
      <div className="mobile-section2">
        <div className="img-mobile-sec">
          <img src={mobileScreen} />
        </div>
        <div className="code-sec">
          <div className="qrCode-sec">
            <div className="qrCode">
              <img src={qrcode} alt="" />
            </div>
            <div className="qrCode-text">
              <h4>Scan to Download</h4>
              <h3>iOS & Android</h3>
            </div>
          </div>
          <div className="brand-logo">
            <div className="brand-items">
              <Apple />
              <p>App Store</p>
            </div>
            <div className="brand-items">
              <Android />
              <p>Android APK</p>
            </div>
            <div className="brand-items">
              <Shop />
              <p>Google Play</p>
            </div>
          </div>
          <div className="brand-logo">
            <div className="brand-items">
              <Cancel />
              <p>MacOS</p>
            </div>
            <div className="brand-items">
              <Window />
              <p>Windows</p>
            </div>
            <div className="brand-items">
              <Source sx={{ textAlign: "center" }} />
              <p>Linux</p>
            </div>
          </div>
          <div className="brand-logo">
            <div className="brand-items">
              <ElectricalServices />
              <p>API</p>
            </div>
          </div>
        </div>
      </div>
      <div className="link-option">
        <Button
          variant="text"
          endIcon={<KeyboardArrowRight />}
          sx={{ textTransform: "capitalize" }}
        >
          More Download Options
        </Button>
      </div>
    </>
  );
};

export default MobileScreenSection;
