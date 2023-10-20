const Router = require("express")
const { jwtValidation } = require('../middlewares/jwtValidation')

const {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    editProduct,
    editStock
} = require("../controllers/products.controllers")

const { body } = require('express-validator')
const router = Router()
const { validateErrors } = require("../middlewares/validateErrors")

// Rutas 
//Mostrar todos los productos
router.get("/", jwtValidation, getProducts)

//Mostrar un producto por ID
router.get("/:id", jwtValidation, getProductById)

//Crear un producto
router.post("/", jwtValidation, createProduct)

//Eliminar un producto
router.delete("/:id", jwtValidation, deleteProduct)

//Modificar todas las propiedades de un producto
router.put("/:id", jwtValidation, editProduct)

//Modificar el stock de un producto
router.patch("/:id/stock", jwtValidation, editStock)

module.exports = router