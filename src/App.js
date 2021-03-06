const express = require("express");
const cors = require("cors");
const Model = require("./Schema");

const app = express();
app.use(express.json());
app.use(cors());

const IsEmpty = (val) => !val;

app.post("/pay", async (req, res) => {
  const body = req.body;
  const { ownerName, cardNo, expDate, cvv } = body;
  if (
    IsEmpty(ownerName) ||
    IsEmpty(cardNo) ||
    IsEmpty(expDate) ||
    IsEmpty(cvv)
  ) {
    res.status(500).json({ message: "fill the details completely" });
  } else {
    const newTransaction = new Model(body);
    await newTransaction.save();
    res.status(201).send({ message: "Done" });
  }
});

module.exports = app;
