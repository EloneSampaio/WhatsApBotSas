import { menu } from '../menu.js';
import { storage } from '../storage.js';
import clienteModel from '../database/controllers/cliente.js';

export const stageFour = {
    exec({ from, message, client }) {
       
       
        if (message.length > 2) {
            let msg = '🚨 Obrigado*  🚨\n\n';
            clienteModel.updateCliente(from,false,message)
            globalDescricao= message
            msg += "Sua mensagem foi registrada" + "\n\n"
            msg += "Sua solicitação é urgente?";
            msg += '\n-----------------------------------\n1️⃣ - ```Urgente``` \n0️⃣ - ```Posso esperar```\n\n';

            storage[from].stage = 5;


            return msg;
        }

        return '❌ *Texto muito curto.* \n⚠️ ```PORFAVOR ESCREVA UMA DESCRIÇÃO COM NO MINIMO 20 CARACTERES``` ⚠️';
    },
};