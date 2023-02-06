import React from "react";
import BannerImg from "../../assets/bgImg.webp";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import CryptoTable from "../../layouts/CryptoTable";
import "./Home.css";
import {
  Button,
  Grid,
  Typography,
  Stack,
  Paper,
  ImageListItem,
  ImageList,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Campaign } from "@mui/icons-material";
import styled from "@emotion/styled";

const ContainerImg = styled(Container)({
  display: "grid",
  // height: "300px",
  alignItems: "center",
  alignContent: "center",
  paddingTop: "100px",
  paddingBottom: "100px",
});

const OutContain = styled(Container)({
  maxWidth: "100% !important",
  backgroundColor: "rgb(250, 250, 250)",
});

const Home = () => {
  return (
    <>
      <OutContain>
        <ContainerImg>
          <Box>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <Typography>
                  <h1 style={{ fontSize: "50px" }}>Fund your account</h1>
                  <p>
                    Add cash or crypto funds to your wallet and start trading
                    right away
                  </p>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: "15px", textTransform: "capitalize" }}
                  >
                    Fund account
                  </Button>
                </Typography>
              </Grid>
              <Grid xs={8}>
                <Typography></Typography>
              </Grid>
            </Grid>
          </Box>
        </ContainerImg>
      </OutContain>
      <ContainerImg>
        <Box>
          <ul>
            <li>
              <img src={img1} alt="" />
            </li>
            <li>
              <img src={img2} alt="" />
            </li>
            <li>
              <img src={img3} alt="" />
            </li>
            <li>
              <img src={img4} alt="" />
            </li>
          </ul>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <ul className="icon-list">
                <li>
                  <Campaign sx={{ paddingTop: "5px" }} />
                  Binance Futures Will Launch USDⓈ-M MINA and HIGH Perpetual
                  Contracts with Up to 20X Leverage{" "}
                  <span className="link">02-03 |</span>
                  <span className="link">More </span>
                </li>
                <li>
                  <Campaign sx={{ paddingTop: "5px" }} />
                  Special Notice about Binance.com in Singapore
                  <span className="link">More </span>
                </li>
                <li>
                  <Campaign sx={{ paddingTop: "5px" }} />
                  Special Notice About Binance Markets Limited
                  <span className="link">More </span>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ mt: "50px", alignItems: "center" }}>
            <Grid item xs={6} md={8}>
              <h1>Popular cryptocurrencies</h1>
            </Grid>
            <Grid item xs={6} md={4} sx={{ textAlign: "center" }}>
              <p>View more markets </p>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <CryptoTable />
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ mt: "50px", alignItems: "center" }}>
            <Grid item xs={6} md={12}>
              <h1>Trade. Anywhere.</h1>
              <p>
                Compatible with multiple devices, start trading with safety and
                convenience.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ mt: "50px", alignItems: "center" }}>
            <Grid item xs={6} md={6}></Grid>
            <Grid item xs={6} md={6}>
              <h1>Trade. Anywhere.</h1>
            </Grid>
          </Grid>
        </Box>
      </ContainerImg>
    </>
  );
};

export default Home;
