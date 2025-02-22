require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// Banks Data
const banks = [
  {
    id: 1,
    name: "State Bank of India",
    services: ["Savings Account", "Loans", "Credit Cards"],
    location: "Mumbai",
    rating: 4.8,
    reviews: 1200,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/SBI-logo.svg/800px-SBI-logo.svg.png",
  },
  {
    id: 2,
    name: "HDFC Bank",
    services: ["Fixed Deposits", "Home Loans", "Net Banking"],
    location: "Delhi",
    rating: 4.7,
    reviews: 980,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/HDFC_Bank_logo.svg/800px-HDFC_Bank_logo.svg.png",
  },
  {
    id: 3,
    name: "ICICI Bank",
    services: ["Personal Loans", "Wealth Management", "Forex"],
    location: "Bangalore",
    rating: 4.6,
    reviews: 850,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/ICICI_Bank_Logo.svg/800px-ICICI_Bank_Logo.svg.png",
  },
  {
    id: 4,
    name: "Axis Bank",
    services: ["Corporate Banking", "Insurance", "Mobile Banking"],
    location: "Chennai",
    rating: 4.5,
    reviews: 750,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Axis_Bank_logo.svg/800px-Axis_Bank_logo.svg.png",
  },
];

app.get("/banks", (req, res) => {
  res.json(banks);
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () =>
  console.log(`Your bank data is available at http://localhost:${PORT}`)
);