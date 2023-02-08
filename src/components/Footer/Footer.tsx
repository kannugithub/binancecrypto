import React from "react";
import { Box, Grid, Link } from "@mui/material";
import { Container, styled } from "@mui/system";
import { Telegram, Twitter, Instagram, YouTube } from "@mui/icons-material";
import "./Footer.css";

const LinksStyled = styled(Link)({
  // underline: "none",
  color: "#707A8A",
  fontSize: "13px",
  lineHeight: "2.2em",
  // marginTop: "30px",
  "&:hover": {
    color: "#f3ba2f !important",
  },
});

const Footer = () => {
  return (
    <Box sx={{ alignItems: "center", padding: "50px 0" }}>
      <Container>
        <Grid
          container
          xs={12}
          spacing={{ xs: 2, md: 2 }}
          sx={{ textAlign: "center" }}
        >
          {/* About us footer section */}

          <Grid
            xs={2}
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              display: "inline-grid",
            }}
          >
            <h4 className="foo1">About Us</h4>
            <LinksStyled href="#" underline="none">
              About
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Careers
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Business Contacts
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Community
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Binance Blog
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Legal
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Terms
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Privacy
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Risk Warning
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Announcemets
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              News
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Notices
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Sitemap
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Cookie Prefernces
            </LinksStyled>
          </Grid>

          {/* Products Footer Section  */}
          <Grid
            xs={2}
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              display: "inline-grid",
            }}
          >
            <h4 className="foo1">Products</h4>
            <LinksStyled href="#" underline="none">
              Exchange
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Academy
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Binance Live
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Charity
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Card
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Labs
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Launchpad
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Research
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Trust Wallet
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              NFT
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Binance Pay
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Binance Gift Card
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              BABT
            </LinksStyled>
          </Grid>

          {/* Service Footer Section  */}

          <Grid
            xs={2}
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              display: "inline-grid",
            }}
          >
            <h4 className="foo1">Service</h4>
            <LinksStyled href="#" underline="none">
              Downloads
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Desktop Application
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Buy Crypto
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Institutional & VIP Services
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              OTC Trading
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Referral
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Affiliate
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              BNB
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Listing Applicaion
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              P2P Merchant Application
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              P2Pro Merchant Application
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Historical Market Data
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Proof of Collateral for B-Tokens
            </LinksStyled>
          </Grid>

          {/* Support Footer Section  */}

          <Grid
            xs={2}
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              display: "inline-grid",
            }}
          >
            <h4 className="foo1">Support</h4>
            <LinksStyled href="#" underline="none">
              Request a Feature
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Support Center
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Submit a request
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              APIs
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Fees
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Trading Rules
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Binance Verify
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Law Enforcement Requests
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Binance Legal(Court Orders)
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Binance Airdrop Portal
            </LinksStyled>
          </Grid>

          {/* Learn Footer Section  */}

          <Grid
            xs={2}
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              display: "inline-grid",
            }}
          >
            <h4 className="foo1">Learn</h4>
            <LinksStyled href="#" underline="none">
              Learn & Earn
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Browse Crypto Prices
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Bitcoin Price
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Ethereum Price
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Buy BNB
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Buy BUSD
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Buy Bitcoin
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Buy Ethereum
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Buy Dogecoin
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Buy XRP
            </LinksStyled>
            <LinksStyled href="#" underline="none">
              Buy Tradable Altcoins
            </LinksStyled>
          </Grid>

          {/* Community Footer Section */}

          <Grid xs={2} sx={{ textAlign: "left", paddingLeft: "30px" }}>
            <h4 className="foo1">Community</h4>
            <LinksStyled href="#" underline="none" paddingRight={1}>
              <Telegram />
            </LinksStyled>
            <LinksStyled href="#" underline="none" paddingRight={1}>
              <Instagram />
            </LinksStyled>
            <LinksStyled href="#" underline="none" paddingRight={1}>
              <Twitter />
            </LinksStyled>
            <LinksStyled href="#" underline="none" paddingRight={1}>
              <YouTube />
            </LinksStyled>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
