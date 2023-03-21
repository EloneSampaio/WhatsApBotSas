import Stage from '../models/stage.js';
import menuModel from './menu.js';
export default {

    async findById(id) { 

        try {

            const foundStage =await  Stage.findOne({step:id});
            
            if (foundStage) {
                
                return foundStage;
            } else {
                return '';
            }
        } catch (error) {

            return error;
        }
    },

    async findByIdMenu(myid,menu) {

        try {
            let my_menu= await menuModel.findMenu( menu) 
            let menu_id =  my_menu._id
           // console.log(menu_id)
            const foundStage = await  Stage.findOne({step:myid,menu_key: menu_id});
            
            if (foundStage) {
                
                return foundStage;
            } else { 
                return '';
            }
        } catch (error) {

            return error;
        }
    },

    async findByOptionAndMenu(option,menu) {

        try {
            let my_menu= await menuModel.findMenu(menu) 
            console.log(option+''+menu)
            console.log(my_menu)
            const foundStage = await  Stage.findOne({key1: option, menu_key: my_menu._id});
            
            if (foundStage) {
                
                return foundStage;
            } else {
                return '';
            }
        } catch (error) {

            return error;
        }
    },


    async findAll() {

        try {

            const foundStage = await Stage.find();
            if (foundStage) {

                return foundStage;
            } else {
                return '';
            }
        } catch (error) {

            return error;
        }
    },

    
}


