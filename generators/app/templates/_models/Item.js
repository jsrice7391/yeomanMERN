const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemschema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemschema);

module.exports = Item;
