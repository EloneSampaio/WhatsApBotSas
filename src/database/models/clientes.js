import mongoose from 'mongoose';
import '../db.js'

const ClienteSchema = new mongoose.Schema({
    nome: { type: String },
    whatsapp: { type: String },
    createdAt: { type: Date },
    texto: { type: String }
    
});
export default mongoose.model('clientes', ClienteSchema);

