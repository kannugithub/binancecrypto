import styled from "@emotion/styled";
import { Box, List, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import { Theme } from "../../Theme/Theme";
import "../ImageBox/ImageBox.css";

// const Root = styled(Box)(({ theme }) => ({
//   padding: Theme.spacing(1),
//   [Theme.breakpoints.down("sm")]: {
//     display: "block",
//   },
//   [Theme.breakpoints.up("md")]: {
//     display: "flex",
//   },
//   [Theme.breakpoints.up("lg")]: {
//     display: "flex",
//   },
// }));

const ImageBox = () => {
  return (
    <>
      <div className="img-box-main">
        <div className="img-item">
          <img src={img1} alt="" className="list-img" />
        </div>
        <div className="img-item">
          <img src={img2} alt="" className="list-img" />
        </div>
        <div className="img-item">
          <img src={img3} alt="" className="list-img" />
        </div>
        <div className="img-item">
          <img src={img4} alt="" className="list-img" />
        </div>
      </div>
    </>
  );
};

export default ImageBox;
