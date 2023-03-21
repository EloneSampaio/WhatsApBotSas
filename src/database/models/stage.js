import mongoose from 'mongoose';
import '../db.js'
const StagioSchema = new mongoose.Schema({
    step: { type: 'number' },
    key1: {type: 'string' },
    key2: {type: 'string' },
    key3: {type: 'string' },
    key4: {type: 'string' },
    key5: {type: 'string' },
    menu_key: { type: mongoose.Schema.Types.ObjectId, ref: 'menu',required:false}
});

export default mongoose.model('steps', StagioSchema);

