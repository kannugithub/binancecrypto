import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BTC from "../assets/BTC.png";

const CryptoTable = () => {
  const rows = [
    {
      id: 1143155,
      product: "BNB",
      img: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
      customer: "$325.9",
      date: "-1.24%",
      amount: "$51,444M",
    },
    {
      id: 2235235,
      product: "Bitcoin ",
      img: "https://www.maxpixel.net/static/photo/2x/Bitcoin-Money-Symbol-Digital-Currency-Logo-910307.png",
      customer: "$23,515",
      date: "-1.38%",
      amount: "$453,488M",
    },
    {
      id: 2342353,
      product: "Ethereum",
      img: "https://image.pngaaa.com/466/1559466-middle.png",
      customer: "$1,647",
      date: "-1.53%",
      amount: "$201,604M",
    },
    {
      id: 2357741,
      product: "Galxe",
      img: "https://www.maxpixel.net/static/photo/2x/Bitcoin-Money-Symbol-Digital-Currency-Logo-910307.png",
      customer: "$2.48",
      date: "-2.17%",
      amount: "$135M",
    },
    {
      id: 2342355,
      product: "Green Metaverse Token",
      img: "https://cryptoandreviews.com/wp-content/uploads/2022/03/18069.png",
      customer: "$0.5541",
      date: "-4.83%",
      amount: "$332M",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Last Price</TableCell>
            <TableCell className="tableCell">24h Change</TableCell>
            <TableCell className="tableCell">Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    src={row.img}
                    alt=""
                    className="coin-img"
                    style={{
                      height: "32px",
                      width: "32px",
                      borderRadius: "50%0",
                      marginRight: "10px",
                      objectFit: "cover",
                    }}
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell" style={{ color: "red" }}>
                {row.date}
              </TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;
