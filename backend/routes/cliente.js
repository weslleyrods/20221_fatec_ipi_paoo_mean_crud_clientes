const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');
const base_url = '/api/clientes'

//localhost:3000/api/clientes
router.get('', (req, res) =>{
  Cliente.find().then(documents=>{
    res.status(200).json({
      mensagem: "Tudo OK",
      //clientes: clientes
      clientes: documents
    })
  })
});

router.get('/:id', (req, res)=>{
  Cliente.findById(req.params.id)
  .then(cli=>{
    if(cli){
      res.status(200).json(cli)
    }
    else{
      res.status(404).json({
        mensagem: "Cliente não encontrado!"
      })
    }
  })
})

router.put('/:id', (req, res)=>{
  const cliente = new Cliente({
    ...req.body,
    _id: req.params.id
  })
  Cliente.updateOne(
    {_id: req.params.id},
    cliente
  )
  .then(mongoResponse=>{
    console.log(mongoResponse)
    res.status(200).json({
      mensagem: 'Atualização realizada com sucesso'
    })
  })
})

//localhost:3000/api/clientes
router.post('', (req, res)=>{
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
  cliente.save().then((clienteInserido)=>{
    res.status(201).json({
      mensagem: 'Cliente inserido',
      id: clienteInserido._id
  })
  })
  //res.status(201).json({mensagem: 'Cliente inserido'})
})

//localhost:3000/api/clientes/123456
//:id - variavel
router.delete('/:id', (req, res)=>{
  Cliente.deleteOne({_id: req.params.id})
  .then((resultado)=>{
    console.log(resultado);
    res.status(200).end()
  })
})

module.exports = router
