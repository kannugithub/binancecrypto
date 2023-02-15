import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordian.css";

export default function SimpleAccordion() {
  return (
    <div className="accor-sec">
      <div className="acc-sec1">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is P2P exchange?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              P2P stands for peer-to-peer, and P2P exchanges are platforms that
              allow users to buy and sell crypto for fiat currency directly with
              other users. Learn more about What is P2P Trading and How Does a
              Local Bitcoin Exchange Work??
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              How do I sell Bitcoin locally on Binance P2P?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              First, browse Buy Ads for the crypto you wish and sell, and find
              the best offers with your preferred payment method. You can read
              the reviews and check the requirements from the buyer. If they are
              agreeable for you, start the trade, and do not release the crypto
              until you have received the money in the payment method you
              provided. Learn more about how to sell crypto peer-to-peer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="acc-sec2">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              How do I buy Bitcoin locally on Binance P2P?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              P2P stands for peer-to-peer, and P2P exchanges are platforms that
              allow users to buy and sell crypto for fiat currency directly with
              other users. Learn more about What is P2P Trading and How Does a
              Local Bitcoin Exchange Work??
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Why is Binance P2P better than other P2P marketplaces?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              First, browse Buy Ads for the crypto you wish and sell, and find
              the best offers with your preferred payment method. You can read
              the reviews and check the requirements from the buyer. If they are
              agreeable for you, start the trade, and do not release the crypto
              until you have received the money in the payment method you
              provided. Learn more about how to sell crypto peer-to-peer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
