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
  AccountCircle,
  Notifications,
  SystemUpdate,
} from "@mui/icons-material";
import { DrawerComp } from "./Drawer/DrawerComp";
import { fontSize } from "@mui/system";

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
                paddingLeft: "0px !important",
                paddingRight: "0px !important",
              }}
            >
              <Apps />
              <ArrowDropDown />
              <Box>
                {Pages.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    sx={{
                      maxWidth: "300px",
                      minWidth: "60px",
                      fontSize: "12px",
                      textTransform: "capitalize",
                    }}
                  />
                ))}
              </Box>
            </StyledToolbar>
            <Box
              sx={{
                marginLeft: "auto",
                alignItems: "center",
                paddingRight: "20px",
              }}
            >
              <Tabs value={"#"} aria-label="icon label tabs example">
                <Tab
                  icon={<ArrowDropDown />}
                  iconPosition="end"
                  label="Wallet"
                  sx={{
                    maxWidth: "300px",
                    minWidth: "60px",
                    fontSize: "12px",
                    textTransform: "capitalize",
                    padding: "12px 4px",
                  }}
                />
                <Tab
                  icon={<ArrowDropDown />}
                  iconPosition="end"
                  label="Orders"
                  sx={{
                    maxWidth: "300px",
                    minWidth: "60px",
                    fontSize: "12px",
                    textTransform: "capitalize",
                    padding: "12px 4px",
                  }}
                />
                <List sx={{ display: "flex" }}>
                  <ListItem sx={{ padding: "8px 10px" }}>
                    {" "}
                    <AccountCircle />
                  </ListItem>
                  <ListItem sx={{ padding: "8px 10px" }}>
                    {" "}
                    <Notifications />
                  </ListItem>
                  <ListItem sx={{ padding: "8px 10px" }}>
                    {" "}
                    <SystemUpdate />
                  </ListItem>
                  <ListItem sx={{ padding: "8px 10px" }}>
                    {" "}
                    <Language sx={{ fontSize: "20px" }} />
                  </ListItem>
                  <ListItem sx={{ padding: "8px 10px" }}>
                    {" "}
                    <span style={{ fontSize: "14px" }}> USD </span>
                  </ListItem>
                  <ListItem sx={{ padding: "8px 10px" }}>
                    {" "}
                    <DarkMode sx={{ fontSize: "20px" }} />
                  </ListItem>
                </List>
              </Tabs>
            </Box>
          </>
        )}
      </AppBar>
    </>
  );
};

export default Navbar;
