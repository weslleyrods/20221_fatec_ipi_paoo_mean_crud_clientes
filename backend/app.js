const express = require ('express')
const cors  = require('cors')
const Cliente = require('./models/cliente')
const app = express()
let id = 3;

//use serve para usa ruum middleware

// app.use((req, res, next)=>{
//   console.log("Chegou uma requisição")
//   next()
// })

app.use(cors())
//req.body pode ser tratado como um objeto JSON
app.use(express.json())

const clientes = [
  {
      id: '1',
      nome: 'José,',
      fone: '123456',
      email: 'jose@mail.com'

  },
  {
    id: '2',
    nome: 'Antonio,',
    fone: '789456',
    email: 'antonio@mail.com'
  }
]


// app.use((req,res,next)=>{
//   console.log("oi");
//   res.json()
// })

//localhost:3000/api/clientes
app.get('/api/clientes', (req, res) =>{
  res.status(200).json({
    mensagem: "Tudo OK",
    clientes: clientes
  })
})

//v1 da funcao
// app.use('/api/clientes', (req, res) =>{
//   res.send('Hello from the back end (Express)')
// })
//localhost:3000/api/clientes
app.post('/api/clientes', (req, res)=>{
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
  res.status(201).json({mensagem: 'Cliente inserido'})
})

module.exports = app
