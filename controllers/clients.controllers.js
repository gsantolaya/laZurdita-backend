const Clients = require("../models/client.model");
require('dotenv').config();

// Obtener todos los clientes
const getClients = async (req, res) => {
    try {
        const clients = await Clients.find();
        res.status(200).send(clients);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Obtener un cliente por ID
const getClientById = async (req, res) => {
    try {
        const id = req.params.id;
        const client = await Clients.findById(id);
        if (!client) {
            return res.status(404).send({ error: "Cliente no encontrado" });
        }
        res.status(200).send(client);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Agregar un nuevo cliente
const createClient = async (req, res) => {
    try {
        const newClient = {

            

        }
        const client = await Clients.create(newClient);
        res.status(201).send({ mensaje: "Cliente agregado exitosamente", idClient: client._id });
    } catch (error) {
        res.status(400).send({ error: "Solicitud incorrecta" });
    }
}

// Eliminar un cliente
const deleteClient = async (req, res) => {
    const id = req.params.id;
    try {
        const client = await Clients.findByIdAndDelete(id);
        if (!client) {
            return res.status(404).send({ error: "Cliente no encontrado" });
        }
        res.status(200).send({ mensaje: "Cliente eliminado exitosamente" });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Modificar una venta
const editClient = async (req, res) => {
    const id = req.params.id;
    const newClientData = {

        
    }
    try {
        const updatedClient = await Clients.findByIdAndUpdate(id, newClientData, { new: true });
        if (!updatedClient) {
            return res.status(404).send({ mensaje: "No se encontró el cliente" });
        }
        res.status(200).send({ mensaje: "Cliente modificado con éxito", cliente: updatedClient });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getClients,
    getClientById,
    createClient,
    deleteClient,
    editClient
}