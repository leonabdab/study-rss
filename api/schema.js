const mongoose = require('mongoose');
// const db = require('../../app-modules/db');


const validateEmail = (email) => {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
    return re.test(email);
}

const schema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: [validateEmail, 'Error: Invalid email address']
    },
    rss: {
        type: String,
        // match: /^http.*/i
    }
});

const model = mongoose.model('user-data', schema, 'data');

module.exports = model;