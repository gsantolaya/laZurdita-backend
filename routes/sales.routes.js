const Router = require("express");
const { jwtValidation } = require('../middlewares/jwtValidation');

const {
    getSales,
    getSaleById,
    createSale,
    deleteSale,
    editSale
} = require("../controllers/sales.controllers");

const { body } = require('express-validator');
const router = Router();
const { validateErrors } = require("../middlewares/validateErrors");

// Rutas 
//Mostrar todas las ventas
router.get("/", jwtValidation, getSales);

//Mostrar una venta por ID
router.get("/:id", jwtValidation, getSaleById);

//Crear una venta
router.post("/", jwtValidation, createSale);

//Eliminar una venta
router.delete("/:id", jwtValidation, deleteSale);

//Modificar todas las propiedades de una venta
router.put("/:id", jwtValidation, editSale);

module.exports = router;