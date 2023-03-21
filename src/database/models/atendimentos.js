import mongoose from 'mongoose';
import '../db.js'

const AtendimentoSchema = new mongoose.Schema({
    nome: { type: String },
    whatsapp: { type: String },
    texto: { type: String },
    step:{ type: Number },
    menu_selected:{ type: Number }
    
});
export default mongoose.model('atendimentos', AtendimentoSchema);

