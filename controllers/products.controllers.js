const Products = require("../models/product.model");
require('dotenv').config();

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Obtener un producto por ID
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Products.findById(id);
        if (!product) {
            return res.status(404).send({ error: "Producto no encontrado" });
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Agregar un nuevo producto
const createProduct = async (req, res) => {
    try {
        const newProduct = {
            type: req.body.type,
            description: req.body.description,
            value: req.body.value,
            stock: req.body.stock,
        }
        const product = await Products.create(newProduct);
        res.status(201).send({ mensaje: "Producto agregado exitosamente", idProduct: product._id });
    } catch (error) {
        res.status(400).send({ error: "Solicitud incorrecta" });
    }
}

// Eliminar un producto
const deleteProduct = async (req, res) => {
    console.log('hola')
    const id = req.params.id;
    try {
        const product = await Products.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send({ error: "Producto no encontrado" });
        }
        res.status(200).send({ mensaje: "Producto eliminado exitosamente" });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Modificar un producto
const editProduct = async (req, res) => {
    const id = req.params.id;
    const newProductData = {
        type: req.body.type,
        description: req.body.description,
        value: req.body.value,
        stock: req.body.stock,
    }
    try {
        const updatedProduct = await Products.findByIdAndUpdate(id, newProductData, { new: true });
        if (!updatedProduct) {
            return res.status(404).send({ mensaje: "No se encontró el producto" });
        }
        res.status(200).send({ mensaje: "Producto modificado con éxito", producto: updatedProduct });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    editProduct
}