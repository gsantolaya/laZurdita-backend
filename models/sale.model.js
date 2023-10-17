const mongoose = require('mongoose')
const Client = require('./client.model')
const Product = require('./product.model')
const User = require('./user.model')

const { Schema, model } = require("mongoose");

const saleSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User
    },
    date: {
        type: Date,
        required: true,
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
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Product
    },
    productStatus: {
        type: String,
        enum: ['horneadas', 'congeladas'],
        default: 'horneadas',
        required: true
    },
    unitPrice:{
        type: Number,
        required: true
    },
    wayToPay: {
        type: String,
        enum: ['efectivo', 'mercadoPago', 'transferencia'],
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
    status:{
        type: String,
        enum: ['completed', 'pending'],
        default: 'pending',
        required: true
    }
});

const Sale = model("Sale", saleSchema);

module.exports = Sale;
