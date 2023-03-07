import { menu } from '../menu.js';
import { storage } from '../storage.js';
import clienteModel from '../database/controllers/cliente.js';

export const finalStage = {
    exec({ from, message, client }) {

        let data = null;
        clienteModel.findCliente(from).then(res =>data = res );
        if (message === '1') {
            let msg = '🚨 *Resumo do seu pedido*  🚨\n\n';
           
          
           
            msg += '*Nome*: O que você inseriu' +"\n";
            msg+= "*Pedido*: "+ globalDescricao+"\n\n"
            msg+="Se quiser reiniciar o atendimento digite *LUAI* "
            storage[from].stage = 1;
            storage[from].type = 2;
            bolCurso =false
            globalDescricao= ''
            storage[from].stage = 1;
          
            

             client.sendText('244929764155@c.us',msg).then(() => {
                console.log('Resumo enviado.');
              }).catch(error => console.error('Error when sending message', error)); 
           
            return msg;
        } else if (message === '0') {
            let msg = '🚨 Digite *LUAI*  para voltar ao menu 🚨\n\n';
            storage[from].stage = 1;
            storage[from].type = 2;
            bolCurso = false
            globalDescricao = ''
            return msg;
        }

    },
};