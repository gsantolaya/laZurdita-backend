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

router.get("/", getExpenses); //jwtValidation, 

//Mostrar un gasto por ID
router.get("/:id", getExpenseById); //, jwtValidation

//Crear un gasto
router.post("/", createExpense);

//Eliminar un gasto
router.delete("/:id", deleteExpense); //jwtValidation, 

//Modificar todas las propiedades de un gasto
router.put("/:id", editExpense);

module.exports = router;