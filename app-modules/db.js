const mongoose = require('mongoose');
const DB_NAME = 'user';
const DB_URL = process.env.DB_KEY || `mongodb://localhost:27017/${DB_NAME}`;

const DB_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const state = {
    db: null
}

mongoose.set('useFindAndModify', false);

const connect = () => {
    if (!state.connected) {
        mongoose.connect(DB_URL, DB_OPTIONS)
            .then((result) => {
                state.db = result;
                console.log(`Successfully connected to: ${DB_URL}`)
            })
            .catch(error => console.log('DB connection failed: ', error.message));
    }
}

const db = () => state.db;
const primaryKey = (_id) => mongoose.Types.ObjectId(_id);

module.exports = {
    connect,
    db,
    primaryKey
};