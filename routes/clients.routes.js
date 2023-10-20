const Router = require("express");
const { jwtValidation } = require('../middlewares/jwtValidation');

const {
    getClients,
    getClientById,
    createClient,
    deleteClient,
    editClient,
    editBalance
} = require("../controllers/clients.controllers");

const { body } = require('express-validator');
const router = Router();
const { validateErrors } = require("../middlewares/validateErrors");

// Rutas 
//Mostrar todos los productos
router.get("/", jwtValidation, getClients); 

//Mostrar un producto por ID
router.get("/:id", jwtValidation, getClientById);

//Crear un producto
router.post("/", jwtValidation, createClient);

//Eliminar un producto
router.delete("/:id", jwtValidation, deleteClient);

//Modificar todas las propiedades de un producto
router.put("/:id", jwtValidation, editClient);

//Modificar el saldo de un cliente
router.patch("/:id/balance", jwtValidation, editBalance)

module.exports = router;