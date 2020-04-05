const DbSchema = require('../schema');
const propsExcluded = {
    _id: 0,
    __v: 0
}

const get = async (req, res) => {
    try {
        const query = req.query;

        if (JSON.stringify(query) === '{}') {
            return res.json(await DbSchema.find({}).select(propsExcluded));
        } else if (query) {
            const response = await DbSchema.find(query)
                .select({
                    ...propsExcluded,
                });

            if (JSON.stringify(response) === '[]') {
                res.status('404').send('Error: resource not found');
            }
            return res.json(response);
        }
    } catch (e) {
        console.error('DataGetError: ', e.message);
    }
}

const getAll = async (req, res) => {
    try {
        const query = req.query;
        const response = await DbSchema.find(query);

        if (JSON.stringify(response) === '[]') {
            res.status('404').send('Error: resource not found');
        }
        return res.json(response);
    } catch (e) {
        console.error('DataGetError: ', e.message);
    }
}

const post = async (req, res, next) => {
    try {
        const {
            email,
            rss
        } = req.body;
        if (email && rss) {
            const data = new DbSchema({
                email,
                rss
            });
            const response = await data.save();
            res.json(response);
        }
        next();
    } catch (error) {
        console.error('DataPostError', error.message)
    }
}

module.exports = {
    get,
    getAll,
    post
}