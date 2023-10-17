const Expenses = require("../models/expense.model");
require('dotenv').config();

// Obtener todos los gastos
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expenses.find();
        res.status(200).send(expenses);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}
// Obtener un gasto por ID
const getExpenseById = async (req, res) => {
    try {
        const id = req.params.id;
        const expense = await Expenses.findById(id);
        if (!expense) {
            return res.status(404).send({ error: "Venta no encontrada" });
        }
        res.status(200).send(expense);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Agregar un nuevo gasto
const createExpense = async (req, res) => {
    try {
        const newExpense = {
            date: req.body.date,
            voucherNumber: req.body.voucherNumber,
            provider: req.body.provider,
            amount: req.body.amount,
            description: req.body.description,
            additionalDescription: req.body.additionalDescription,
            unitPrice: req.body.unitPrice,
            wayToPay: req.body.wayToPay,
            payment: req.body.payment
        }
        const expense = await Expenses.create(newExpense);
        res.status(201).send({ mensaje: "Venta creada exitosamente", idExpense: expense._id });
    } catch (error) {
        res.status(400).send({ error: "Solicitud incorrecta" });
    }
}

// Eliminar un gasto
const deleteExpense = async (req, res) => {
    const id = req.params.id;
    try {
        const expense = await Expenses.findByIdAndDelete(id);
        if (!expense) {
            return res.status(404).send({ error: "Venta no encontrada" });
        }
        res.status(200).send({ mensaje: "Venta eliminada exitosamente" });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Modificar un gasto
const editExpense = async (req, res) => {
    const id = req.params.id;
    const newExpenseData = {
        date: req.body.date,
        voucherNumber: req.body.voucherNumber,
        provider: req.body.provider,
        amount: req.body.amount,
        description: req.body.description,
        additionalDescription: req.body.additionalDescription,
        unitPrice: req.body.unitPrice,
        wayToPay: req.body.wayToPay,
        payment: req.body.payment
    }
    try {
        const updatedExpense = await Expenses.findByIdAndUpdate(id, newExpenseData, { new: true });
        if (!updatedExpense) {
            return res.status(404).send({ mensaje: "No se encontró la venta" });
        }
        res.status(200).send({ mensaje: "Venta modificada con éxito", venta: updatedExpense });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getExpenses,
    getExpenseById,
    createExpense,
    deleteExpense,
    editExpense
}