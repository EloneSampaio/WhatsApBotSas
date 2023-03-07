const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    whatsapp: { type: String, default: '' },
    nome: String,
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('clientes', clienteSchema)