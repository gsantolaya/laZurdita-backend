const { Schema, model } = require("mongoose");

const expenseSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    voucherNumber:{
        type: String,
        required: true,
        default: "s/c"
    },
    provider:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    additionalDescription:{
        type: String,
        required: true
    },
    unitPrice:{
        type: Number,
        required: true
    },
    wayToPay: {
        type: String,
        required: false,
    },
    payment: {
        type: Number,
        required: true,
    }
});

const Expense = model("Expense", expenseSchema);

module.exports = Expense;