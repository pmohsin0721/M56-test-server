const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect("mongodb://localhost:27017/transaction", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(9999, () => console.log("Listening on port " + 9999));
