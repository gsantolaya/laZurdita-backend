const mongoose = require('mongoose')
const Client = require('./client.model')
const Product = require('./product.model')
const User = require('./user.model')

const {
    Schema,
    model
} = require("mongoose");

const saleProductSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Product
    },
    amount: {
        type: Number,
        required: true,
    },
    amountDescription: {
        type: String,
        enum: ['unidad', 'docena'],
        default: 'unidad',
        required: true
    },
    productStatus: {
        type: String,
        enum: ['horneadas', 'congeladas'],
        default: 'horneadas',
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
})

const saleSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User
    },
    date: {
        type: Date,
        required: true,
    },
    number: {
        type: Number,
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Client
    },
    type: {
        type: String,
        enum: ['mayorista', 'minorista'],
        default: 'minorista',
        required: true
    },
    products: [saleProductSchema],
    wayToPay: {
        type: String,
        required: false
    },
    payment: {
        type: Number,
        required: false,
    },
    tip: {
        type: Number,
        required: false,
    },
    status: {
        type: String,
        enum: ['completed', 'pending'],
        default: 'pending',
        required: true
    }
});

const Sale = model("Sale", saleSchema);

module.exports = Sale;