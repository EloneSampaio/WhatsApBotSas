import { menu } from '../menu.js';
import { storage } from '../storage.js';
import clienteModel from '../database/cliente.js';

export const finalStage = {
    exec({ from, message, client }) {
        let data = null;
        clienteModel.findCliente(from).then(res =>data = res );
        if (message === '1') {
            let msg = '🚨 *Resumo do seu pedido*  🚨\n\n';
           
          
           
            msg+= '*Nome*:' + data['nome'] +"\n";
            msg+= '*Telefone* :' + data['whatsapp'] + "\n";
            msg+= "*Pedido*: "+ data['texto']+"\n\n"
            msg+="Se quiser reiniciar o atendimento digite *LUAI* "
            msg+= data;
            storage[from].stage = 1;
            bolCurso =false
            globalDescricao= ''
            

            client.sendText('244929764155@c.us',msg).then(() => {
                console.log('Resumo enviado.');
              }).catch(error => console.error('Error when sending message', error));
           
            return msg;
        } else if (message === '0') {
            let msg = '🚨 Digite *LUAI*  para voltar ao menu 🚨\n\n';
            storage[from].stage = 1;
            bolCurso = false
            globalDescricao = ''
            return msg;
        }

    },
};