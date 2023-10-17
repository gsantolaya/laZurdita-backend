const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    retailPrice: {
        type: Number,
        required: true,
    },
    wholesalePrice: {
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
