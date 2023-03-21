
import { storage } from '../storage.js';
import stageModel from '../database/controllers/stage.js';
import atendimentoModel from '../database/controllers/atendimento.js';
let items = [];

export const stageTwo = {
 async exec({ from, message, client }) {
  storage[from].stage = 3;

  let messages = await stageModel.findById(message)
  await atendimentoModel.updateAtendimentoByStep(from,4,message).then(val => console.log(''));
  //console.log(messages['key1'])
    
      //items = [ process.env.APP_IMG1,process.env.APP_IMG2,process.env.APP_IMG3,process.env.APP_IMG4,process.env.APP_IMG5,process.env.APP_IMG6];
      items = messages['key3'].split(",")
      let msg = messages['key1'].replace(/\\n/g, "\n") 
      msg += messages['key2'].replace(/\\n/g, "\n")
      msg += messages['key4'].replace(/\\n/g, "\n")
      msg += messages['key5'].replace(/\\n/g, "\n")
      //msg += messages['key5']
     // msg += process.env.APP_QUESTION_2 + "\n\n"
     
    items.forEach(async element => {
      console.log(element)
     await client.sendFile(from, element).then(() => {
        console.log('Message sent.');
      }).catch(error => console.error('Error when sending message', error));
    }); 

      
      return msg;
    } 
  

  

  
  
};