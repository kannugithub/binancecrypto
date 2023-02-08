import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import { colors } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#f6ca25",
    },
    secondary: {
      main: "#000000",
    },
    neutral: {
      main: "#f6f6f6a1",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
