import mongoose from 'mongoose';
import '../db.js'
const ServicoDetailSchema = new mongoose.Schema({
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'servicos' },
    hierarquia: { type: String },
    arquivos: { type: String },
    texto1: { type: String },
    texto2: { type: String },
    texto3: { type: String },
    texto4: { type: String },
    texto5: { type: String },
    status: { type: Number }
});
export default mongoose.model('servicos_details', ServicoDetailSchema);

