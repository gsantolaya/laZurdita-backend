const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  category:{
    type: String,
    enum: ['minorista', 'mayorista'],
    default: 'minorista',
    required: true
  },
  balance: {
    type: Number,
    default: '0',
    required: true
  },
});

const Client = model("Client", clientSchema);

module.exports = Client;