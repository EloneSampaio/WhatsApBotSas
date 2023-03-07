import { menu } from '../menu.js';
import { storage } from '../storage.js';
import clienteModel from '../database/controllers/cliente.js';
import serviceModel from '../database/controllers/servicos.js';


export const stageOne = {
  exec({ from, message, client }) {
    let msg = null
    let myv = null
    if (message.length>1) {
     
      let dados =  serviceModel.findAllServico();
      dados.then(val =>  
        val.forEach(element => {
          myv = {
            "rowId": element.hierarquia,
            "title": element.titulo,
            "title": element.titulo,
            "description": "" 
        }
        }))

     console.log(myv)
       msg = {
        buttonText: process.env.SERVICE_DESCRIPTION,
        description: process.env.SERVICE_MENU_DESCRIPTION,            
        title:  process.env.WELCOME_CUSTOMER,
        footer: process.env.SERVICE_FOOTER,
        sections: [
          {
            title: process.env.SERVICE_MENU_DESCRIPTION,
            rows: [
                {
                    rowId: "1",
                    title: process.env.SERVICE_MENU_LIST1,
                    description: "" 
                },
                {
                    rowId: "2",
                    title: process.env.SERVICE_MENU_LIST2 ,
                    description: ""                           
                },

                {
                    rowId: "3",
                    title: process.env.SERVICE_MENU_LIST3,
                    description: ""                            
                }
            ]
        }
        ]
    };




      let name = ''
      storage[from].stage = 2;
      storage[from].type = 1;
      clienteModel.findCliente(from).then(res => name = res.nome);
      if(name===''){
        clienteModel.updateCliente(from,message)
      }
     /*  let msg = process.env.WELCOME_CUSTOMER ;
     

      msg += "\n-----------------------------------\n"
      msg+= process.env.SERVICE_MENU_DESCRIPTION
      msg+= process.env.SERVICE_MENU_LIST
      msg += "\n-----------------------------------\n" */

      return msg;
    }

    return '❌ *Digite um nome/texto válido, por favor.* \n⚠️ ```No mínimo 3 caractares``` ⚠️';
  },
};