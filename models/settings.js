const mongoose = require('mongoose');
const SettingsSchema = new mongoose.Schema({
    welcome: { type: String },
    seunome: { type: String },
    menu_footer: { type: String},
    menu_header: { type: String},
    menu_description: { type: String}
});
const Setting = mongoose.model('settings', SettingsSchema);

module.exports = {
    SettingsSchema,
    Setting,
}