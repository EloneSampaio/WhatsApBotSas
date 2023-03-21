import Menu from '../models/menu.js';

export default {

    async findAllMenu() {

        try {

            const foundMenu = await Menu.find();
            if (foundMenu) {

                return foundMenu;
            } else {
                return '';
            }
        } catch (error) {

            return error;
        }
    },

    async findMenu(po) {

        try {
            
            const foundMenu = await Menu.findOne({ posicao: po });
            if (foundMenu) {

                return foundMenu;
            } else {
                return '';
            }
        } catch (error) {

            return error;
        }
    },

    
}


