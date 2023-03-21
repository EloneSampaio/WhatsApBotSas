import { storage } from '../storage.js';
import atendimentoModel from '../database/controllers/atendimento.js';
import menuModel from '../database/controllers/menu.js';

export const stageOne = {
 async exec({ from, message, client }) {
  storage[from].stage = 2;
    let menu = null
    let msgMenu =null
    let myrows=[]
     menu = await menuModel.findAllMenu();
     await atendimentoModel.updateAtendimentoByStep(from,storage[from].stage,0).then(val => console.log(''));
     await atendimentoModel.updateAtendimento(from,message,false)
   
     //console.log(menu)
    menu.forEach(item => {
      myrows.push( {
            rowId: item['posicao'],
            title: item['nome'],
            description: "" 
        })
    }); 

    msgMenu = {
       
        buttonText: process.env.SERVICE_DESCRIPTION,
        description: process.env.SERVICE_MENU_DESCRIPTION,            
        title:  process.env.WELCOME_CUSTOMER,
        footer: process.env.SERVICE_FOOTER,
        sections: myrows
   
        
    }; 
   
    //console.log(msgMenu)

    let name = ''
    
    
     /* await atendimentoModel.findAtendimento(from).then(res => name = res.nome);
      if(name===''){
       await atendimentoModel.updateAtendimento(from,message)
      } */
      //let msg = "Selecione a opção no menu" ;
      let msg = process.env.WELCOME_CUSTOMER ;
     

      msg += "\n-----------------------------------\n"
      msg+= process.env.SERVICE_MENU_DESCRIPTION
      //msg+= process.env.SERVICE_MENU_LIST
      menu.forEach(item => {
        msg += item['posicao'] + '-' + item['nome'] + '\n'
      });
      
      msg += "\n-----------------------------------\n" 
      
    //  console.log(msgMenu) 
       await client.sendListMessage(from, msgMenu).then(() => {
                  console.log('Menu enviado ao cliente.');
                }).catch(error => console.error('Error when sending message', error));
 
      return msg;
    }

   

};