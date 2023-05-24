const mongoose = require("mongoose");

const { Schema } = mongoose;
const user1Schema = new Schema({
  uid: { type: String, require: true },
  name: { type: String, require: true },
  hp: { type: String },
  age: { type: Number, require: true },
});

// User1이라는 이름으로 스키마를 export
module.exports = mongoose.model("User1", user1Schema);
