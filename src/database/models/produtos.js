import mongoose from 'mongoose';
import '../db.js'
const ProdutoSchema = new mongoose.Schema({
    descricao: { type: String },
    nome: { type: String },
    preco: { type: String}
});
export default mongoose.model('produtos', ProdutoSchema);

