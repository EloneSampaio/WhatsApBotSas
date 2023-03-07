import Servico from '../models/servicos.js';

export default {

    async findAllServico() {

        try {

            const foundServico = await Servico.find();
            if (foundServico) {

                return foundServico;
            } else {
                return '';
            }
        } catch (error) {

            return error;
        }
    },

    async findServico(hierarquia) {

        try {

            const foundServico = await Servico.findOne({ hierarquia: hierarquia });
            if (foundServico) {

                return foundServico;
            } else {
                return '';
            }
        } catch (error) {

            return error;
        }
    },

    
}


