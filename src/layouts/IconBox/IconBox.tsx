import React from "react";
import {
  SupportAgent,
  Newspaper,
  QuestionAnswer,
  PeopleAlt,
} from "@mui/icons-material";
import "../IconBox/IconBox.css";

// import { Card, CardContent, Typography, CardActions } from "@mui/material";
const IconBox = () => {
  const rows = [
    {
      img: <SupportAgent />,
      title: "24/7 Support",
      disc: "Got a problem? Just get in touch. Our support team is available 24/7.",
    },
    {
      img: <Newspaper />,
      title: "Binance Blog",
      disc: "News and updates from the world’s leading cryptocurrency exchange.",
    },
    {
      img: <QuestionAnswer />,
      title: "Community",
      disc: "Binance is global. Join the discussion in our worldwide...",
    },
    {
      img: <PeopleAlt />,
      title: "Careers",
      disc: "Help build the future of technology. Start your new career at Binance.",
    },
  ];
  return (
    <div className="icon-box">
      <div className="iconbox-items">
        {rows.map((item) => (
          <ul>
            <li>{item.img}</li>
            <li>{item.title}</li>
            <li className="disc-sm">{item.disc}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default IconBox;
