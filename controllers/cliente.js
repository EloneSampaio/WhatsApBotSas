const clienteModel = require('../models/cliente.js');

async function save(data) {
    const cliente = new clienteModel({
        whatsapp: data.whatsapp,
        nome: data.name
    })

    try {
        await cliente.save();
        return true

    }
    catch (error) {
        return error.message
    }

}
exports.save = save;

async function getAll() {
    try {
        const data = await clienteModel.find();
        return data
    }
    catch (error) {
        return error.message
    }
}

exports.getAll = getAll;

async function getByPhone(phone) {
    try {
        const data = await clienteModel.findOne({ whatsapp: phone });
        return data
    }
    catch (error) {
        return error.message
    }
}
exports.getByPhone = getByPhone;

async function update(phone, data) {
    try {
        const options = { new: false };
        const result = await clienteModel.findOneAndUpdate({ whatsapp: phone }, data, options);
        return result
    }
    catch (error) {
        return error.message
    }
}
exports.update = update;

async function drop(phone) {
    try {
        const id = await clienteModel.findOne({ whatsapp: phone });
        const data = await clienteModel.findByIdAndDelete(id);
        return `Document with ${data.nome} has been deleted..`
    }
    catch (error) {
        return error.message

    }
}
exports.drop = drop;