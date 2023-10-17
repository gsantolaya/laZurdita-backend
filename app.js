const express = require('express');
const app = express();
const PORT = process.env.PORT || 4050
const cors = require('cors');
const { initDBConnection } = require('./database/dbConnection');
const usersRoutes  = require('./routes/users.routes');
const productsRoutes  = require('./routes/products.routes');
const clientsRoutes  = require('./routes/clients.routes');
const salesRoutes  = require('./routes/sales.routes');
const expensesRoutes  = require('./routes/expenses.routes');

const morgan = require('morgan');
require('dotenv').config();


// Development Mode
if (process.env.DEV) {
    const morgan = require('morgan')
    app.use(morgan('dev'))
  }

app.use(express.json())
app.use(cors())
app.use("/api/users", usersRoutes)
app.use("/api/products", productsRoutes)
app.use("/api/clients", clientsRoutes)
app.use("/api/sales", salesRoutes)
app.use("/api/expenses", expensesRoutes)

app.get('/', (req, res)=>{
    res.send({ mensaje: "Bienvenido" })
})

app.listen(PORT, ()=>{
    initDBConnection();
    console.log(`Escuchando en puerto ${PORT}`)
})