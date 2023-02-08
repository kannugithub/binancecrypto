import React from "react";
import CryptoTable from "../../layouts/CryptoTable";
import "./Home.css";
import {
  Button,
  Grid,
  List as ul,
  ListItem as li,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import {
  Campaign,
  KeyboardArrowRight,
  SpeakerNotes,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import IconBox from "../../layouts/IconBox/IconBox";
import ImageBox from "../../layouts/ImageBox/ImageBox";
import MobileScreenSection from "../../layouts/MobileScreenSection/MobileScreenSection";
import { Theme } from "../../Theme/Theme";
import "../../index.css";

// const ContainerImg = styled(Container)({
//   display: "grid",
//   // height: "300px",
//   alignItems: "center",
//   alignContent: "center",
//   paddingTop: "100px",
//   paddingBottom: "100px",
// });

const OutContain = styled(Container)({
  maxWidth: "100% !important",
  backgroundColor: "#fafafa",
  display: "flex",
});

const Responsive = styled(Box)(({ theme }) => ({
  [Theme.breakpoints.down("md")]: {
    color: "green",
    fontSize: "22px",
  },
}));

const Home = () => {
  return (
    <>
      {/* <Responsive>
        <Box sx={{ padding: "100px 0", backgroundColor: "neutral.main" }}>
          <Container>
            <Grid xs={12}>
              <h1>Fund your account</h1>
              <p>
                Add cash or crypto funds to your wallet and start trading right
                away
              </p>
              <Button variant="contained" className="btn">
                Fund Account
              </Button>
            </Grid>
          </Container>
        </Box>

        <Container fixed>
          <Box sx={{ marginTop: "30px" }}>
            <Grid
              container
              spacing={2}
              sx={{ mt: "50px", alignItems: "center" }}
            >
              <ImageBox />
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ mt: "20px", alignItems: "center" }}
            >
              <Grid>
                <List className="icon-list">
                  <ListItem>
                    <Campaign sx={{ paddingTop: "5px", fontSize: "24px" }} />
                    Binance Futures Will Launch USDⓈ-M MINA and HIGH Perpetual
                    Contracts with Up to 20X Leverage{" "}
                    <span className="link">02-03 |</span>
                    <span className="link">More </span>
                  </ListItem>
                  <ListItem>
                    <SpeakerNotes
                      sx={{ paddingTop: "5px", fontSize: "18px" }}
                    />
                    Special Notice about Binance.com in Singapore
                    <span className="link">More </span>
                  </ListItem>
                  <ListItem>
                    <SpeakerNotes
                      sx={{ paddingTop: "5px", fontSize: "18px" }}
                    />
                    Special Notice About Binance Markets Limited
                    <span className="link">More </span>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ mt: "50px", alignItems: "center" }}
            >
              <Grid item xs={6} md={8}>
                <h1>Popular cryptocurrencies</h1>
              </Grid>
              <Grid item xs={6} md={4} sx={{ textAlign: "center" }}>
                <p>View more markets </p>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Grid
              container
              spacing={2}
              sx={{ mt: "50px", alignItems: "center" }}
            >
              <CryptoTable />
            </Grid>
          </Box>
          <Box sx={{ marginTop: "100px" }}>
            <Grid
              container
              spacing={2}
              sx={{ mt: "50px", alignItems: "center" }}
            >
              <MobileScreenSection />
            </Grid>
          </Box>

          <Box>
            <Grid
              container
              spacing={2}
              sx={{ mt: "50px", mb: "50px", alignItems: "center" }}
            >
              <h1>Get in touch. Stay in touch.</h1>
              <IconBox />
            </Grid>
          </Box>
        </Container>
      </Responsive> */}
      <div className="home-main">
        <Container fixed>
          <div className="banner-txt">
            <h1>Fund your account</h1>
            <p>
              Add cash or crypto funds to your wallet and start trading right
              away
            </p>
            <Button variant="contained" className="btn">
              Fund Account
            </Button>
          </div>
        </Container>
      </div>
      <div className="img-box">
        <Container fixed>
          <ImageBox />
        </Container>
      </div>
      <div className="list-sec">
        <Container>
          <ul className="list-item">
            <li>
              <Campaign sx={{ fontSize: "24px" }} />
              Binance Has Completed the Gifto (GTO) Token Swap to Gifto (GFT)
              02-08 | More
            </li>
            <li>
              <SpeakerNotes sx={{ fontSize: "18px" }} />
              Special Notice about Binance.com in Singapore <span>More</span>
            </li>
            <li>
              <SpeakerNotes sx={{ fontSize: "18px" }} />
              Special Notice About Binance Markets Limited <span>More</span>
            </li>
          </ul>
        </Container>
      </div>
      <div className="crypto-table">
        <Container>
          <div className="text-sec-crypto">
            <div className="text-sec1">
              <h1>Popular cryptocurrencies</h1>
            </div>
            <div className="text-sec2">
              <Button
                variant="text"
                endIcon={<KeyboardArrowRight />}
                sx={{ textTransform: "capitalize" }}
              >
                View More markets
              </Button>
            </div>
          </div>
          <CryptoTable />
        </Container>
      </div>
      <div className="trade-sec">
        <Container>
          <div className="trade-text-sec1">
            <h1>Trade. Anywhere.</h1>
            <p>
              Compatible with multiple devices, start trading with safety and
              convenience.
            </p>
          </div>
          <div>
            <MobileScreenSection />
          </div>
        </Container>
      </div>
      <div className="contact-sec">
        <Container>
          <div className="contact-text-sec1">
            <h1>Get in touch. Stay in touch.</h1>
          </div>
          <div>
            <IconBox />
          </div>
        </Container>
      </div>
      <div className="footer-sec">
        <Container>
          <div className="ft-txt-sec">
            <h1>Start trading now</h1>
            <Button className="btn" variant="contained">
              Trade Now
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
