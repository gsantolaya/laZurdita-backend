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

router.get("/", getClients); //jwtValidation, 

//Mostrar un producto por ID
router.get("/:id", getClientById); //, jwtValidation

//Crear un producto
router.post("/", createClient);

//Eliminar un producto
router.delete("/:id", deleteClient); //jwtValidation, 

//Modificar todas las propiedades de un producto
router.put("/:id", editClient);

//Modificar el saldo de un cliente
router.patch("/:id/balance", editBalance)

module.exports = router;