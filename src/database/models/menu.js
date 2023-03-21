import mongoose from 'mongoose';
import '../db.js'
const MenuSchema = new mongoose.Schema({
    nome: { type: String },
    posicao: { type: Number }
});
export default mongoose.model('menu', MenuSchema);

