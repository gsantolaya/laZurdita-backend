const express = require('express');
const app = express();
const PORT = process.env.PORT || 4050
const cors = require('cors');
const { initDBConnection } = require('./database/dbConnection');
const userRoutes  = require('./routes/users.routes');

const morgan = require('morgan');
require('dotenv').config();


// Development Mode
if (process.env.DEV) {
    const morgan = require('morgan')
    app.use(morgan('dev'))
  }

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoutes)


app.get('/', (req, res)=>{
    res.send({ mensaje: "Bienvenido" })
})

app.listen(PORT, ()=>{
    initDBConnection();
    console.log(`Escuchando en puerto ${PORT}`)
})