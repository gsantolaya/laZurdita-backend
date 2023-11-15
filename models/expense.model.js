const { Schema, model } = require("mongoose");

const expenseItemSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    additionalDescription: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    }
});

const expensePaymentSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    wayToPay: {
        type: String,
        required: false
    },
    payment: {
        type: Number,
        required: false,
    }
})

const expenseSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    voucherNumber: {
        type: String,
        required: true,
        default: "s/c"
    },
    provider: {
        type: String,
        required: true
    },
    items: [expenseItemSchema],
    payments: [expensePaymentSchema],

});

const Expense = model("Expense", expenseSchema);

module.exports = Expense;
