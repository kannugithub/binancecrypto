// import "./BuyCryptoDropdown.css";
// import {
//   AccountCircle,
//   Edit,
//   Mail,
//   Settings,
//   Help,
//   Logout,
//   ArrowDropDown,
// } from "@mui/icons-material";
// import React, { useState, useEffect, useRef } from "react";
// import { Button, Link } from "@mui/material";

// function App() {
//   const [open, setOpen] = useState(false);

//   let menuRef: any = useRef();

//   useEffect(() => {
//     let handler = (e: any) => {
//       if (!menuRef.current.contains(e.target)) {
//         setOpen(false);
//         console.log(menuRef.current);
//       }
//     };

//     document.addEventListener("mousedown", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   });

//   return (
//     <div className="App">
//       <div className="menu-container" ref={menuRef}>
//         <div
//           className="menu-trigger"
//           onClick={() => {
//             setOpen(!open);
//           }}
//           // onMouseEnter={() => {
//           //   setOpen(!open);
//           // }}
//         >
//           <Button variant="text" endIcon={<ArrowDropDown />}>
//             Buy Crypto
//           </Button>
//         </div>

//         <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
//           <ul>
//             {/* <DropdownItem icon={<AccountCircle />} text={"Bank Deposit"} />
//             <DropdownItem icon={<Edit />} text={"Credit/Debit Card"} />
//             <DropdownItem icon={<Mail />} text={"Cash Balance"} />
//             <DropdownItem icon={<Settings />} text={"P2P Trading"} /> */}
//             <Link></Link>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DropdownItem(props: any) {
//   return (
//     <li className="dropdownItem">
//       <img src={props.icon}></img>
//       <a> {props.text} </a>
//     </li>
//   );
// }

// export default App;

import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
// import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  AccountBalance,
  ArrowDropDown,
  CreditCard,
  People,
} from "@mui/icons-material";

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          endIcon={<ArrowDropDown />}
          className="btn-nav"
        >
          Buy Crypto
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper sx={{ width: "300px", height: "200px" }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <NavLink to="/">
                      <MenuItem
                        onClick={handleClose}
                        href="#"
                        sx={{ lineHeight: "36px" }}
                      >
                        <AccountBalance
                          sx={{ marginRight: "15px", color: "primary.main" }}
                        />
                        Bank Deposit
                      </MenuItem>
                    </NavLink>

                    <NavLink to="/creditdebitcard">
                      <MenuItem
                        onClick={handleClose}
                        sx={{ lineHeight: "36px" }}
                      >
                        <CreditCard
                          sx={{ marginRight: "15px", color: "primary.main" }}
                        />
                        Credit/Debit Card
                      </MenuItem>
                    </NavLink>
                    <MenuItem onClick={handleClose} sx={{ lineHeight: "36px" }}>
                      <AccountBalance
                        sx={{ marginRight: "15px", color: "primary.main" }}
                      />
                      Cash Balance
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{ lineHeight: "36px" }}>
                      <People
                        sx={{ marginRight: "15px", color: "primary.main" }}
                      />
                      P2P Trading
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
