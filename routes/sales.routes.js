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

router.get("/", getSales); //jwtValidation, 

//Mostrar una venta por ID
router.get("/:id", getSaleById); //, jwtValidation

//Crear una venta
router.post("/", createSale);

//Eliminar una venta
router.delete("/:id", deleteSale); //jwtValidation, 

//Modificar todas las propiedades de una venta
router.put("/:id", editSale);

module.exports = router;