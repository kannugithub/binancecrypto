import React, { useState, useEffect } from "react";
import {
  ScatterPlot,
  BackupTable,
  GroupWork,
  Adjust,
  Api,
  Check,
} from "@mui/icons-material";
import "./CarousalComp.css";

const cardsItems = [
  {
    id: 1,
    img: <ScatterPlot sx={{ color: "primary.main", fontSize: "60px" }} />,
    title: "Spot Grid",
    content: "Buy low and sell high 24/7 automatically with just one click.",
    list: `Volatile Markets`,
    list1: `Preset Ranges`,
  },
  {
    id: 2,
    img: <BackupTable sx={{ color: "primary.main", fontSize: "60px" }} />,
    title: "Future Grid",
    content:
      "Amplify your purchasing power with an advanced version of Grid Trading.",
    list: `Short Orders`,
    list1: `USD-M / COIN-M`,
  },
  {
    id: 3,
    img: <GroupWork sx={{ color: "primary.main", fontSize: "60px" }} />,
    title: "Rebalancing Bot",
    content:
      "A Long term position strategy supporting an investment portfolio.",
    list: `Diversify Risk`,
    list1: `Dynamic Rebalance`,
  },
];

// const CarousalComp: React.FC<Props> = ({ cards }) => {
const CarousalComp = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [currentIndex, cards.length]);

  return (
    <div className="card-carousel">
      {cardsItems.map((card, index) => (
        <div key={card.id} className={"card-item"}>
          <h2>{card.img}</h2>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
          <p>{card.list}</p>
          <p>{card.list1}</p>
        </div>
      ))}
    </div>
  );
};

export default CarousalComp;
