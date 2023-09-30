const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});

const Client = model("Client", clientSchema);

module.exports = Client;