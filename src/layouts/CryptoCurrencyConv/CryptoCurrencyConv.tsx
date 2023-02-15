import {
  AttachMoney,
  CurrencyBitcoin,
  CurrencyExchange,
  CurrencyLira,
  CurrencyPound,
  CurrencyRuble,
  Euro,
  LocalFireDepartment,
  Pinterest,
  UnfoldLess,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import "./CryptoCurrencyConv.css";
import React from "react";

const CryptoCurrencyConv = () => {
  return (
    <>
      <div className="cryp-conv-sec">
        <h2>Top Cryptocurrency Conversions</h2>
        <Container>
          <div className="conv-text-sec">
            <div className="conv-items">
              <Button
                className="btn"
                variant="text"
                startIcon={<CurrencyExchange />}
              >
                Buy with USD
              </Button>
            </div>
            <div className="conv-items">
              <Button className="btn" variant="text" startIcon={<Euro />}>
                BBuy with EUR
              </Button>
            </div>
            <div className="conv-items">
              <Button
                className="btn"
                variant="text"
                startIcon={<CurrencyRuble />}
              >
                Buy with PHP
              </Button>
            </div>
            <div className="conv-items">
              <Button
                className="btn"
                variant="text"
                startIcon={<AttachMoney />}
              >
                Buy with AUD
              </Button>
            </div>
            <div className="conv-items">
              <Button
                className="btn"
                variant="text"
                startIcon={<CurrencyPound />}
              >
                Buy with GBP
              </Button>
            </div>
            <div className="conv-items">
              <Button
                className="btn"
                variant="text"
                startIcon={<CurrencyRuble />}
              >
                Buy with RUB
              </Button>
            </div>
          </div>
          <div className="conv-text-sec2">
            <div className="conv-items2">
              <Button
                className="btn"
                variant="text"
                startIcon={<CurrencyBitcoin />}
              >
                BTC to USD
              </Button>
            </div>
            <div className="conv-items2">
              <Button
                className="btn"
                variant="text"
                startIcon={<CurrencyLira />}
              >
                ETH to USD
              </Button>
            </div>
            <div className="conv-items2">
              <Button className="btn" variant="text" startIcon={<Pinterest />}>
                DOT to USD
              </Button>
            </div>
            <div className="conv-items2">
              <Button className="btn" variant="text" startIcon={<UnfoldLess />}>
                XRP to USD
              </Button>
            </div>
            <div className="conv-items2">
              <Button
                className="btn"
                variant="text"
                startIcon={<LocalFireDepartment />}
              >
                SHIB to USD
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CryptoCurrencyConv;
