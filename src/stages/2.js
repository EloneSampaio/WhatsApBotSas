import { menu } from '../menu.js';
import { storage } from '../storage.js';


let items = [];

export const stageTwo = {
  exec({ from, message, client }) {
    if (message===process.env.SERVICE_MENU_LIST1) {
      items = [ process.env.APP_IMG1,process.env.APP_IMG2,process.env.APP_IMG3,process.env.APP_IMG4,process.env.APP_IMG5,process.env.APP_IMG6];
      let msg = '🚨  Você escolheu a opção *Aplicativos*  🚨\n\n';
      msg += process.env.APP_FAQ + "\n\n"
      msg += process.env.APP_QUESTION_1 + "\n\n"
      msg+= '\n-----------------------------------\n1️⃣ - ```CONTINUAR ATENDIMENTO``` \n0️⃣ - ```VOLTAR AO MENU```\n\n' ;
     // msg += process.env.APP_QUESTION_2 + "\n\n"
     
     items.forEach(element => {
      console.log(element)
      client.sendFile(from, element).then(() => {
        console.log('Message sent.');
      }).catch(error => console.error('Error when sending message', error));
    });

      storage[from].stage = 3;


      return msg;
    } else if (message===process.env.SERVICE_MENU_LIST2) {

      items = [ process.env.SITE_IMG1,process.env.SITE_IMG2,process.env.SITE_IMG3,process.env.SITE_IMG4,process.env.SITE_IMG5];

      let msg = '🚨  Você escolheu a opção *Sites e Lojas*  🚨\n\n';
      msg += process.env.SITE_FAQ + "\n\n"
      msg += process.env.SITE_QUESTION_1 + "\n\n"
      msg+= '\n-----------------------------------\n1️⃣ - ```CONTINUAR ATENDIMENTO``` \n0️⃣ - ```VOLTAR AO MENU```\n\n' ;



      items.forEach(element => {
        console.log(element)
        client.sendFile(from, element).then(() => {
          console.log('Message sent.');
        }).catch(error => console.error('Error when sending message', error));
      });

      storage[from].stage = 3;


      return msg;



    }
    else if (message===process.env.SERVICE_MENU_LIST3) {


      let msg = '🚨  Você escolheu a opção *Formação/Cursos*  🚨\n\n';
      msg += process.env.CURSO_FAQ + "\n\n"
      msg += process.env.CURSO_QUESTION_1 + "\n\n"
      msg+= '\n-----------------------------------\n1️⃣ - ```CONTINUAR ATENDIMENTO``` \n0️⃣ - ```VOLTAR AO MENU```\n\n' ;

      storage[from].stage = 3;
      bolCurso =true;


      return msg;
    }

  
  },
};