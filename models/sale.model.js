const { Schema, model } = require("mongoose");

const saleSchema = new Schema({
    saleDate: {
        type: Date,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    observation: {
        type: String,
        required: false,
    },
    payment: {
        type: Number,
        required: true,
    },
});

const Sale = model("Sale", saleSchema);

module.exports = Sale;
