import Atendimento from '../models/atendimentos.js';

export default {

    async createAtendimento(number) {
        const foundAtendimento = await Atendimento.findOne({ whatsapp: number });
        if (!foundAtendimento) {

            const atendimento = await Atendimento.create({ whatsapp: number });
            return 'create'
        } else {
            return 'exist';
        }
    },

    async findAtendimento(number) {

        try {

            const foundAtendimento = await Atendimento.findOne({ whatsapp: number });
            if (foundAtendimento) {

                return foundAtendimento;
            } else {
                return '';
            }
        } catch (error) {

            return error;
        }
    },

    async updateAtendimentoByStep(number,last_Step,option_selected) {
        let atendimento = {}
        atendimento = {
            step: last_Step,
            menu_selected: option_selected
        };
        const updatedAtendimento = await Atendimento.findOneAndUpdate({ whatsapp: number}, atendimento, { new: true });

        return updatedAtendimento;
    },

    async updateAtendimento(number, nome, texto) {
        let atendimento = {}
        try {
            if (nome) {

                atendimento = {
                    nome: nome,

                };

            }
            if (texto) {

                atendimento = {

                    texto: texto,
                };

            }


            const updatedAtendimento = await Atendimento.findOneAndUpdate({ whatsapp: number }, atendimento, { new: true });
            if (updatedAtendimento) {

                return true;
            } else {

                return '';
            }
        } catch (error) {

            return error;
        }
    },
}


