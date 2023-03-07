const mongoose = require('mongoose');
const ServicoSchema = new mongoose.Schema({
    titulo: { type: String },
    hierarquia: { type: String },
    status: {type: Number}
});
const Servico = mongoose.model('servicos', ServicoSchema);

module.exports = {
    ServicoSchema,
    Servico,
}