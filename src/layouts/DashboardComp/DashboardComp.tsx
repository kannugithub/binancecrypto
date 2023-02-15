import React from "react";
import "./DashboardComp.css";
import {
  AccountCircle,
  DriveFileRenameOutline,
  Verified,
  CardGiftcard,
  MonetizationOn,
  AccountBalanceWallet,
  CurrencyExchange,
  PlayCircle,
  Search,
  RemoveRedEye,
} from "@mui/icons-material";
import { Button, Input, InputAdornment, TextField } from "@mui/material";
import { Container } from "@mui/system";

const UserDetails = [
  {
    UserId: 565641911,
    UserType: "Regular User",
    Twitter: "not linked",
    LastLoginTime: "2023-02-10 21:38:13(103.121.174.10)",
  },
];

const DashboardComp = () => {
  return (
    <>
      <Container>
        <div className="dash-main">
          <div className="user-img">
            <AccountCircle
              sx={{
                fontSize: "70px",
                color: "primary.main",
                marginRight: "10px",
                marginTop: "6px",
              }}
            />
          </div>
          <div className="user-txt">
            <span style={{ fontSize: "15px", marginRight: "5px" }}>
              Anonymous-User-81646
            </span>
            <DriveFileRenameOutline sx={{ fontSize: "18px" }} />
            <span
              style={{
                fontSize: "13px",
                backgroundColor: "#eaecef",
                color: "#707a8a",
                padding: "5px",
                margin: "0 8px",
                borderRadius: "5px",
              }}
            >
              Personal
            </span>
            <Verified sx={{ fontSize: "18px" }} />
            {UserDetails.map((item, index) => (
              <table>
                <tbody>
                  <tr key={index}>
                    <td>User ID</td>
                    <td>User Type</td>
                    <td>Twitter</td>
                    <td>Last login time</td>
                  </tr>
                  <tr>
                    <td>{item.UserId}</td>
                    <td>{item.UserType}</td>
                    <td>{item.Twitter}</td>
                    <td>{item.LastLoginTime}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
          <div className="user-claim">
            <CardGiftcard
              sx={{ fontSize: "70px", color: "primary.main", marginTop: "6px" }}
            />
          </div>
        </div>
        <div className="wallet-swc-main">
          <div className="fund-sec">
            <h3>Fund Your Wallet</h3>
            <p>
              Binance supports multiple options to fund your account. Find a
              method that suits you the best.
            </p>
            <div className="wall-icon-sec">
              <div className="wall-items">
                <MonetizationOn
                  sx={{
                    fontSize: "70px",
                    color: "primary.main",
                    position: "relative",
                    top: "6px",
                  }}
                />
              </div>
              <div className="wall-items">
                <h5>
                  HOT <span>Buy Crypto</span>
                  <span>
                    <PlayCircle
                      sx={{ fontSize: "15px", color: "primary.main" }}
                    />{" "}
                    Video Tutorial
                  </span>
                </h5>

                <p style={{ fontSize: "12px", padding: "0px" }}>
                  Buy crypto directly with cash, hassle-free and suggested for
                  new users.
                </p>
              </div>
              <div className="wall-items">
                <Button className="btn2" variant="contained">
                  Buy
                </Button>
              </div>
            </div>
            <div className="wall-icon-sec">
              <div className="wall-items">
                <MonetizationOn
                  sx={{
                    fontSize: "70px",
                    color: "primary.main",
                    position: "relative",
                    top: "6px",
                  }}
                />
              </div>
              <div className="wall-items">
                <h5>
                  Crypto Deposit
                  <span>
                    <PlayCircle
                      sx={{ fontSize: "15px", color: "primary.main" }}
                    />{" "}
                    Video Tutorial
                  </span>
                </h5>

                <p style={{ fontSize: "12px", padding: "0px" }}>
                  Buy crypto directly with cash, hassle-free and suggested for
                  new users.
                </p>
              </div>
              <div className="wall-items">
                <Button className="btn2" variant="contained">
                  Deposit
                </Button>
              </div>
            </div>
            <div className="wall-icon-sec">
              <div className="wall-items">
                <MonetizationOn
                  sx={{
                    fontSize: "70px",
                    color: "primary.main",
                    position: "relative",
                    top: "6px",
                  }}
                />
              </div>
              <div className="wall-items">
                <h5>Fiat Deposit</h5>

                <p style={{ fontSize: "12px", padding: "0px" }}>
                  Buy crypto directly with cash, hassle-free and suggested for
                  new users.
                </p>
              </div>
              <div className="wall-items">
                <Button className="btn2" variant="contained">
                  Deposit
                </Button>
              </div>
            </div>
          </div>
          <div className="exp-sec">
            <h3>Explore</h3>
            <TextField
              sx={{ width: "400px", marginTop: "15px" }}
              id="outlined-basic"
              label="Coin, Function, Announcemnt"
              variant="outlined"
            />
          </div>
        </div>
        <div className="est-bln-sec">
          <h4>Estimated Balance</h4>
          <RemoveRedEye />
          <div></div>
        </div>
      </Container>
    </>
  );
};

export default DashboardComp;
