require('dotenv').config()
const express = require ('express')
const cors  = require('cors')
const app = express()
const mongoose = require('mongoose')
const clienteRoutes = require('./routes/cliente')

const { reduceEachLeadingCommentRange } = require('typescript')
let id = 3;

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_HOST,
  MONGODB_CLUSTER,
  MONGODB_DATABASE,
} = process.env

//"use" serve para usar um middleware

// app.use((req, res, next)=>{
//   console.log("Chegou uma requisição")
//   next()
// })

//mongodb+srv://weslleyrods:<password>@cluster0.gvdih.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
.then(()=>{
  console.log("Conexão OK")
})
.catch((e)=>{
  console.log("Conexão não OK"+e);
})

app.use(cors())
//req.body pode ser tratado como um objeto JSON
app.use(express.json())

app.use('/api/clientes', clienteRoutes)

module.exports = app
