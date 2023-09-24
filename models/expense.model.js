const { Schema, model } = require("mongoose");

const expenseSchema = new Schema({
    Dsaleate: {
        type: Date,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    number: {
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

const Expense = model("Expense", expenseSchema);

module.exports = Expense;