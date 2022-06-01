require('dotenv').config()
const express = require ('express')
const cors  = require('cors')
const Cliente = require('./models/cliente')
const app = express()
const mongoose = require('mongoose')
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

// const clientes = [
//   {
//       id: '1',
//       nome: 'José,',
//       fone: '123456',
//       email: 'jose@mail.com'

//   },
//   {
//     id: '2',
//     nome: 'Antonio,',
//     fone: '789456',
//     email: 'antonio@mail.com'
//   }
// ]

// app.use((req,res,next)=>{
//   console.log("oi");
//   res.json()
// })

//localhost:3000/api/clientes
app.get('/api/clientes', (req, res) =>{
  Cliente.find().then(documents=>{
    res.status(200).json({
      mensagem: "Tudo OK",
      //clientes: clientes
      clientes: documents
    })
  })
})

//v1 da funcao
// app.use('/api/clientes', (req, res) =>{
//   res.send('Hello from the back end (Express)')
// })

//localhost:3000/api/clientes
app.post('/api/clientes', (req, res)=>{
  //objeto cliente com os dados vindo da requisição
  //exibir com um log e armazenar no mongo db
  const cliente = new Cliente({
    ...req.body,
    //id: id++
  })
  console.log(cliente);
  // clientes.push({
  //   ...req.body,
  //   id: id++
  // })
  //res.end() encerra a resposta da requisição
  cliente.save()
  res.status(201).json({mensagem: 'Cliente inserido'})
})

app.delete

module.exports = app
