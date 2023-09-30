const Router = require("express");
const { jwtValidation } = require('../middlewares/jwtValidation');

const {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    editProduct
} = require("../controllers/products.controllers");

const { body } = require('express-validator');
const router = Router();
const { validateErrors } = require("../middlewares/validateErrors");

// Rutas 
//Mostrar todos los productos

router.get("/", getProducts); //jwtValidation, 

//Mostrar un producto por ID
router.get("/:id", getProductById); //, jwtValidation

//Crear un producto
router.post("/", createProduct);

//Eliminar un producto
router.delete("/:id", deleteProduct); //jwtValidation, 

//Modificar todas las propiedades de un producto
router.put("/:id", editProduct);

module.exports = router;