import styled from "@emotion/styled";
import { Box, List, Stack } from "@mui/material";
import React from "react";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import "../ImageBox/ImageBox.css";

const ImageBox = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack direction="row" spacing={2}>
        <List>
          <img src={img1} alt="" className="list-img" />
        </List>
        <List>
          <img src={img2} alt="" className="list-img" />
        </List>
        <List>
          <img src={img3} alt="" className="list-img" />
        </List>
        <List>
          <img src={img4} alt="" className="list-img" />
        </List>
      </Stack>
    </Box>
  );
};

export default ImageBox;
