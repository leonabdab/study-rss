const mongoose = require('mongoose');
// const db = require('../../app-modules/db');


const validateEmail = (email) => {
    const re = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i;
    return re.test(email);
}
const validateRss = (rss) => {
    const re = /^http.*/i;
    return re.test(rss);
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
        validate: [validateRss, 'Error: Invalid link']
    }
});

const model = mongoose.model('user-data', schema, 'user');

module.exports = model;