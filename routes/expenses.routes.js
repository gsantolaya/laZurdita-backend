const Router = require("express");
const { jwtValidation } = require('../middlewares/jwtValidation');

const {
    getExpenses,
    getExpenseById,
    createExpense,
    deleteExpense,
    editExpense
} = require("../controllers/expenses.controllers");

const { body } = require('express-validator');
const router = Router();
const { validateErrors } = require("../middlewares/validateErrors");

// Rutas 
//Mostrar todos los gastos
router.get("/", jwtValidation, getExpenses);

//Mostrar un gasto por ID
router.get("/:id", jwtValidation, getExpenseById);

//Crear un gasto
router.post("/", jwtValidation, createExpense);

//Eliminar un gasto
router.delete("/:id", jwtValidation, deleteExpense);

//Modificar todas las propiedades de un gasto
router.put("/:id", jwtValidation, editExpense);

module.exports = router;