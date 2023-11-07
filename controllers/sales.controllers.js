const Sales = require("../models/sale.model");
require('dotenv').config();

// Obtener todas las ventas
const getSales = async (req, res) => {
    try {
        const sales = await Sales.find();
        res.status(200).send(sales);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Obtener una venta por ID
const getSaleById = async (req, res) => {
    try {
        const id = req.params.id;
        const sale = await Sales.findById(id);
        if (!sale) {
            return res.status(404).send({ error: "Venta no encontrada" });
        }
        res.status(200).send(sale);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Agregar una nueva venta
const createSale = async (req, res) => {
    try {
        const newSale = {
            user: req.body.user,
            date: req.body.date,
            client: req.body.client,
            type: req.body.type,
            products: req.body.products,
            status: req.body.status
        }
        const sale = await Sales.create(newSale);
        res.status(201).send({ mensaje: "Venta creada exitosamente", idSale: sale._id });
    } catch (error) {
        res.status(400).send({ error: "Solicitud incorrecta" });
    }
}

// Eliminar una venta
const deleteSale = async (req, res) => {
    const id = req.params.id;
    try {
        const sale = await Sales.findByIdAndDelete(id);
        if (!sale) {
            return res.status(404).send({ error: "Venta no encontrada" });
        }
        res.status(200).send({ mensaje: "Venta eliminada exitosamente" });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Modificar una venta
const editSale = async (req, res) => {
    const id = req.params.id;
    const newSaleData = {
        user: req.body.user,
        date: req.body.date,
        client: req.body.client,
        type: req.body.type,
        products: req.body.products,
        wayToPay: req.body.wayToPay,
        payment: req.body.payment,
        tip: req.body.tip,
        status: req.body.status
    }
    try {
        const updatedSale = await Sales.findByIdAndUpdate(id, newSaleData, { new: true });
        if (!updatedSale) {
            return res.status(404).send({ mensaje: "No se encontró la venta" });
        }
        res.status(200).send({ mensaje: "Venta modificada con éxito", venta: updatedSale });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getSales,
    getSaleById,
    createSale,
    deleteSale,
    editSale
}