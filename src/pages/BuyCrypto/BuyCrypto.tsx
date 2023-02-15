import React from "react";
import { Container } from "@mui/system";
import currency from "../../../assets/seo-currency.svg";
import group from "../../assets/seo-group.svg";
import id from "../../assets/seo-id.svg";
import frame from "../../assets/seo-frame3.svg";
import CryptoCurrencyConv from "../../layouts/CryptoCurrencyConv/CryptoCurrencyConv";

import "./BuyCrypto.css";

import "../../index.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  AttachMoney,
  CurrencyExchange,
  CurrencyPound,
  CurrencyRuble,
  Euro,
  KeyboardArrowRight,
} from "@mui/icons-material";

const BuyCrypto = () => {
  return (
    <>
      <div className="main-sec">
        <Container>
          <h2>Buy Crypto with Card</h2>
          <div className="trade-crypto-sec">
            <div className="trade-sec2">
              <h2>
                Buy & Sell Crypto on Binance: Where You Trade Crypto in 3 Steps
              </h2>
              <p>
                Binance is a safe and secure platform to buy and sell
                cryptocurrencies quickly using our streamlined buy/sell process.
                You're just three steps away from your first Bitcoin, Ethereum,
                and other cryptocurrencies.
              </p>
            </div>
          </div>
          <div className="icon-sec">
            <div className="icon-items">
              <Link to="#">
                <img src={group} alt="" />
                <h3>Register for an account</h3>
              </Link>
            </div>
            <div className="icon-items">
              <Link to="#">
                <img src={id} alt="" />
                <h3>Verify your identity</h3>
              </Link>
            </div>
            <div className="icon-items">
              <Link to="#">
                <img src={group} alt="" />
                <h3>Buy Crypto!</h3>
              </Link>
            </div>
          </div>
          <div className="buySell-sec">
            <div className="buysell-text">
              <h2>
                Buy & Sell Crypto: Fund Your Account with Traditional Currencies
              </h2>
              <p>
                Users can easily buy Bitcoin and other cryptocurrencies using a
                wide range of payment options, including bank transfer, credit
                or debit card, and cash. There’s a payment option for everyone
                on Binance. <br />
                <br />
                We work only with verified and trusted partners to give you a
                secure and seamless crypto-buying experience.
                <br />
                <br /> Binance accepts a wide range of currencies and makes it
                easy for you to buy crypto using USD , EUR, CNY, AUD, INR, RUB,
                and other fiat currencies. You can also use a wide range of
                accepted stablecoins such as Binance USD (BUSD), Coinbase USD
                Coin (USDC), and Tether (USDT) to buy crypto.
                <br /> <br /> Once you complete the purchase, we will deposit
                your new crypto directly to your Binance wallet - a safe and
                simple way to manage your crypto assets. You can immediately
                trade your purchased crypto on the many products and services on
                the Binance Platform.
              </p>
              <Button
                className="btn"
                variant="contained"
                endIcon={<KeyboardArrowRight />}
              >
                Create your account
              </Button>
            </div>
            <div className="buysell-img">
              <img src={frame} alt="" />
            </div>
          </div>
        </Container>
        <CryptoCurrencyConv />
      </div>
    </>
  );
};

export default BuyCrypto;
