const mongoose = require('mongoose');
const ProdutoSchema = new mongoose.Schema({
    descricao: { type: String },
    nome: { type: String },
    preco: { type: String}
});
const Produto = mongoose.model('produtos', ProdutoSchema);

module.exports = {
    ProdutoSchema,
    Produto,
}