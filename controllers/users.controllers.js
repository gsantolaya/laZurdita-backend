const Users = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Obtener todos los usuarios
const getUsers = async(req, res)=>{
    try {
        const users = await Users.find()
        res.send(users)
    } catch (error) {
        res.status(404).send(error)
    }
}

// Obtener un usuario por ID
const getUserById = async(req, res)=>{
    try {
        const id = req.params.id
        const user = await Users.findById(id)
        res.send(user)
    } catch (error) {
        res.status(404).send(error)
    }
}

// Crear usuario
const createUser = async(req, res)=>{
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:  req.body.email,
            password:  passwordHash,
            isActivated: req.body.isActivated || false,
            isAdmin: req.body.isAdmin || false
        }
        const user = Users.create(newUser)
        res.status(201).send({ mensaje: "Usuario creado con éxito", usuario: newUser })
        
    } catch (error) {
        res.status(404).send(error)
    }
}

// Login de usuario
const loginUser = async(req, res)=>{
    try {
        const email = req.body.email
        const userFind = await Users.findOne({email})
        if(userFind){
            const passwordEnterByUser = req.body.password
            const passwordStoredInDB = userFind.password
            const passwordMatch = bcrypt.compareSync(passwordEnterByUser, passwordStoredInDB)
            if(passwordMatch){
                const payload = {
                    id: userFind._id,
                    email: userFind.email,
                    firstName: userFind.firstName,
                    lastName: userFind.lastName,
                    isActivated: userFind.isActivated,
                    isAdmin: userFind.isAdmin
                }
                const token = jwt.sign(payload, process.env.SECRET_KEY, 
                { 
                    expiresIn: "12h" 
                })
                res.status(200).send({ mensaje: "Usuario logueado con éxito", token, ...payload })
            }else{
                res.status(400).send({ mensaje: "Email o contraseña incorrectos" })
            }
        }else{
            res.status(400).send({ mensaje: "Email o contraseña incorrectos" })
        }
    } catch (error) {
        res.send(error)
    }
}

//Modificar un usuario
const editUser = async(req, res)=>{
    const id = req.params.id
    const salt = bcrypt.genSaltSync(10);
    // const passwordHash = bcrypt.hashSync(req.body.password, salt);
    const userEdited = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:  req.body.email,
        //password:  passwordHash,
        isActivated: req.body.isActivated,
        isAdmin: req.body.isAdmin
    }
    try {
        const user = await Users.findByIdAndUpdate(id,userEdited)
        res.status(200).send({ mensaje: "Usuario modificado con éxito", user: userEdited })
    } catch (error) {
        res.status(404).send(error)
    }
}

// Eliminar un usuario de la db
const deleteUser = async(req, res)=>{
    const id = req.params.id
        try {
        const user = await Users.findByIdAndDelete(id)
        res.status(200).send({ mensaje: "Usuario eliminado con éxito", user: user })
    } catch (error) {
        res.status(404).send(error)
    }
}

// resetear contraseña
const resetPassword = async(req, res)=>{
    try {
        const email = req.body.email
        let userFind = await Users.findOne({email})
        if(userFind){
            const password = req.body.password
            const salt = bcrypt.genSaltSync(10);
            const passwordHash = bcrypt.hashSync(password, salt);
            userFind.password = passwordHash
            userFind.save()
            res.status(200).send({ mensaje: "Contraseña reseteada con exito" })
        }else{
            res.status(400).send({ mensaje: "Usuario no encontrado" })
        }
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser,
    editUser,
    resetPassword,
    deleteUser
}