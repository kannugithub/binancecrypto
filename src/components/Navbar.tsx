import React from "react";
import { Theme } from "../Theme/Theme";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  List,
  ListItem,
  Link,
  Divider,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Apps,
  ArrowDropDown,
  QrCodeScanner,
  Language,
  DarkMode,
} from "@mui/icons-material";
import { DrawerComp } from "./Drawer/DrawerComp";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  // justifyContent: "space-between",
  padding: "0px",
  backgroundColor: "#ffffff",
  alignItems: "center",
  fontSize: "14px",
  color: "#000000",
}));

const Navbar = () => {
  const theme = useTheme();
  console.log(theme);

  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(isMatch);

  const Pages = [
    "Buy Crypto",
    "Markets",
    "Trade",
    "Derivatives",
    "Earn",
    "Finance",
    "NFT",
    "Institutional",
    "Feed",
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ display: "-webkit-inline-box", backgroundColor: "#ffffff" }}
      >
        <Typography sx={{ paddingRight: "20px", marginTop: "15px" }}>
          <img
            src="/src/assets/binancelogo.png"
            alt=""
            width={180}
            height={36}
            style={{ marginLeft: "30px" }}
          />
        </Typography>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <StyledToolbar
              sx={{
                // xs: "none",
                // sm: "block",
                // width: "70%",
                paddingLeft: "30px !important",
                paddingRight: "0px !important",
              }}
            >
              <Apps />
              <ArrowDropDown />
              {Pages.map((page, index) => (
                <Tab key={index} label={page} />
              ))}
            </StyledToolbar>
          </>
        )}
      </AppBar>
    </>
  );
};

export default Navbar;
