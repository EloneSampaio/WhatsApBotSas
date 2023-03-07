import mongoose from 'mongoose';
import '../db.js'
const ServicoSchema = new mongoose.Schema({
    titulo: { type: String },
    hierarquia: { type: String },
    status: {type: Number}
});
export default mongoose.model('servicos', ServicoSchema);

