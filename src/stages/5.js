
import { storage } from '../storage.js';
import stageModel from '../database/controllers/stage.js';
import atendimentoModel from '../database/controllers/atendimento.js';


export const stageFive = {
   async exec({ from, message, client }) {
    let menu_selected = await atendimentoModel.findAtendimento(from)
    let messages = await stageModel.findByIdMenu(5,menu_selected['menu_selected'])
    storage[from].stage = 6;
    console.log(messages)
   
           
        let msg = messages['key1'].replace(/\\n/g, "\n") ;
        msg+= messages['key2'].replace(/\\n/g, "\n") 
        msg+=messages['key3'].replace(/\\n/g, "\n") 
        msg+=messages['key4'].replace(/\\n/g, "\n") 
     
      return msg

    },
};