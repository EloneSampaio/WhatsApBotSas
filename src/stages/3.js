
import { storage } from '../storage.js';
import stageModel from '../database/controllers/stage.js';
import atendimentoModel from '../database/controllers/atendimento.js';

export const stageThree = {
 async exec({ from, message, client }) {
  storage[from].stage = 4;
  let menu_selected = await atendimentoModel.findAtendimento(from)
  let messages = await stageModel.findByOptionAndMenu(message,menu_selected['menu_selected'])
  
    if (message === messages['key1']) {
      let msg = messages['key2'].replace(/\\n/g, "\n") ;
      msg+= messages['key3'].replace(/\\n/g, "\n") 
      msg+=messages['key4'].replace(/\\n/g, "\n") 
      

      return msg;
    }

    else if (message === messages['key4']) {
      client.markUnseenMessage(from);

      storage[from].stage = 1;
      storage[from].type = 1;
      return messages['key5'].replace(/\\n/g, "\n") ;
    }

   
  },
};
