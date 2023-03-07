import mongoose from 'mongoose';
import '../db.js'
const SettingsSchema = new mongoose.Schema({
    welcome: { type: String },
    seunome: { type: String },
    menu_footer: { type: String},
    menu_header: { type: String},
    menu_description: { type: String}
});
export default mongoose.model('settings', SettingsSchema);

