const express = require('express');
const router = express.Router();

//RETORNA TODAS AS MENSAGEM  
router.get('/', (req, res, next) =>  { 
   res.status(200).send({ 
   mensagem: 'Retorna uma MENSAGEM' 
   
   })
});

//INSERE UMA MENSAGEM
router.post('/', (req, res, next) => {

  const pedidos = {
id_produtos: req.body.id_produtos,
quantidade: req.body.quantidade
  }

   res.status(201).send({
       mensagem: 'Uma  MENSAGEM foi criada',
       pedidoCriado: pedidos
   })

});

//RETORNA OS DADOS DE UM MENSAGEM
router.get('/:id_pedidos', (req, res, next)=> {
   const id = req.params.id_pedidos
    res.status(200).send({
        mensagem: 'Detalhes da MENSAGEM',
          id_pedidos: id 
     
        });
});

//ALTERA UMA MENSAGEM
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'MENSAGEM foi alterada'
    })
 
 });

//DELETA UMA MENSAGEM
 router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'MENSAGEM Excluida'
    })
 
 });

module.exports = router;