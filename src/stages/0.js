import { storage } from '../storage.js';
import clienteModel from '../database/controllers/cliente.js';


export const initialStage = {
  exec({ from }) {
    let userExist = '';
    
    clienteModel.createCliente(from).then(val => userExist = val );
   
    let msg = '';
     
      if(userExist==='exist'){
        msg =  process.env.WELCOME + process.env.WELCOME_CUSTOMER2;
        storage[from].stage = 2;
      }else{
      msg =  process.env.WELCOME + process.env.YOUR_NAME;
      storage[from].stage = 1;
      storage[from].type = 2;
      }
    return msg
  },
};