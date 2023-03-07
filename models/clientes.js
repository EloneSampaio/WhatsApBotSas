const mongoose = require('mongoose');
const ClienteSchema = new mongoose.Schema({
    nome: { type: String },
    whatsapp: { type: String },
    createdAt: { type: Date },
    texto: { type: String }
    
});
const Cliente = mongoose.model('clientes', ClienteSchema);

module.exports = {
    ClienteSchema,
    Cliente,
}