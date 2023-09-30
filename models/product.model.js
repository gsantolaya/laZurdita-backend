const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    type: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false,
    },
    value: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    }
});

const Product = model("Product", productSchema);

module.exports = Product;
