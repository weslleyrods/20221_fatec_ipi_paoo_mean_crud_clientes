const express = require ('express')
const app = express()


// app.use((req, res, next)=>{
//   console.log("Chegou uma requisição")
//   next()
// })

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

//localhost:3000/api/clientes
app.use('/api/clientes', (req, res) =>{
  res.status(200).json({
    mensagem: "Tudo OK",
    clientes: clientes
  })
})

//v1 da funcao
// app.use('/api/clientes', (req, res) =>{
//   res.send('Hello from the back end (Express)')
// })

module.exports = app
