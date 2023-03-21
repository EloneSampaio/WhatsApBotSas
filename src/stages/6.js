
import { storage } from '../storage.js';
import atendimentoModel from '../database/controllers/atendimento.js';
import stageModel from '../database/controllers/stage.js';

export const finalStage = {
   async exec({ from, message, client }) {

    let menu_selected = await atendimentoModel.findAtendimento(from)
    let messages = await stageModel.findByIdMenu(6,menu_selected['menu_selected'])
    
    
    if (message === messages['key1']) {
        let msg = messages['key2'].replace(/\\n/g, "\n") ;
        msg+= messages['key3'].replace(/\\n/g, "\n") 
        
        
        storage[from].stage = 1;
        return msg;
      }
  
      else if (message === messages['key4']) {
        client.markUnseenMessage(from);
  
        storage[from].stage = 1;
        
        return messages['key5'].replace(/\\n/g, "\n") ;
      }
  

    },
};