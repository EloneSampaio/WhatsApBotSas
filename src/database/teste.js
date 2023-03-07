
import serviceModel from '../database/controllers/servicos.js';




  let dados =  serviceModel.findAllServico();
  dados.then(val =>  
    val.forEach(element => {
        console.log(element)
    }))
    
  //clienteModel.updateCliente("9235500033","Elone","Quero um carro")





