const Router = require('express');
const { getUsers, getUserById, createUser, loginUser, deleteUser, editUser, resetPassword} = require('../controllers/users.controllers');
const router = Router()
const { body } = require('express-validator');
const { validateErrors } = require('../middlewares/validateErrors');
const { jwtValidation } = require('../middlewares/jwtValidation');

router.get('/', getUsers)

router.get('/:id', jwtValidation, getUserById)

router.put('/:id'
,[
    body('email').isEmail().withMessage('El email debe ser un email válido'),
    body('firstName').notEmpty().withMessage('El nombre es obligatorio'),
    body('firstName').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body('lastName').isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'),
    validateErrors,
    jwtValidation
],
editUser)

router.post("/"
,[
    body('email').isEmail().withMessage('El email debe ser un email válido'),
    body('firstName').notEmpty().withMessage('El nombre es obligatorio'),
    body('firstName').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body('lastName').isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/).withMessage('La contraseña debe tener al menos una mayúscula, una minúscula y un número'),
    validateErrors,
]
,createUser)

router.delete("/:id", jwtValidation,deleteUser)

router.post("/login"
,[
    body('email').isEmail().withMessage('El email debe ser un email válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    validateErrors
]
,loginUser)

router.put("/reset/password"
,[
    body('email').isEmail().withMessage('El email debe ser un email válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/).withMessage('La contraseña debe tener al menos una mayúscula, una minúscula y un número'),
    validateErrors
]
,resetPassword)

module.exports = router;