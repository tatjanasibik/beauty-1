const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    clientName: {
        type: String,
        required: true,
    },
    clientSurname: {
        type: String,
        required: true,
    },
    clientEmail: {
        type: String,
        required: true,
    },
    clientDate: {
        type: Date,
        required: true,
    },
    clientTime: {
        type: String,
        required: true,
    },
});

const Client = mongoose.model('client', clientSchema);
module.exports = Client;

