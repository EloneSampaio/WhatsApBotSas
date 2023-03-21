import { storage } from '../storage.js';
import atendimentoModel from '../database/controllers/atendimento.js';
import stageModel from '../database/controllers/stage.js';

export const initialStage = {
 async exec({ from }) {
    let userExist = '';
    let config = null;
   
    let msg = '';

    await atendimentoModel.createAtendimento(from).then(val => userExist = val );
    await atendimentoModel.updateAtendimentoByStep(from,storage[from].stage,0).then(val => console.log(''));
    config = await stageModel.findById(0);
    //console.log(config)
    //config = config.replace(/\\n/g, "\n");

 
     
      if(userExist==='exist'){
        msg +=  (config['key1']+ ' ').replace(/\\n/g, "\n") + (config['key2']+ ' ').replace(/\\n/g, "\n");
        storage[from].stage = 1;
       
      }else{
        msg +=  (config['key1']+ ' ').replace(/\\n/g, "\n") + (config['key2']+ ' ').replace(/\\n/g, "\n");

      storage[from].stage = 1;
    
      }
    return msg
  },
};