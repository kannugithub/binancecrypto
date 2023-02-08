import react, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

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
export const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ width: "200px" }}>
          {Pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          color: "black",
          marginLeft: "auto",
          marginTop: "15px",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Menu />
      </IconButton>
    </>
  );
};
