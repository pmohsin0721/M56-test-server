const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  ownerName: String,
  cardNo: Number,
  expDate: String,
  cvv: Number,
});

const Model = mongoose.model("cardDetail", Schema);

module.exports = Model;
