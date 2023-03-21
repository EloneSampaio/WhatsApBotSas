
import { storage } from '../storage.js';
import atendimentoModel from '../database/controllers/atendimento.js';
import stageModel from '../database/controllers/stage.js';
export const stageFour = {
  async  exec({ from, message, client }) {
          storage[from].stage = 5;
       
          let messages = await stageModel.findById(storage[from].stage)
     
            let msg = messages['key1'].replace(/\\n/g, "\n");
            atendimentoModel.updateAtendimento(from,false,message)
            msg +=  messages['key2'].replace(/\\n/g, "\n");
            msg += messages['key3'].replace(/\\n/g, "\n");
            msg += messages['key4'].replace(/\\n/g, "\n");
            return msg;
    },
};