const DbSchema = require('../schema');

const getDataFromSchema = () => {
    return DbSchema.find().select({
        email: 0,
        __v: 0
    });
}
const get = async (req, res) => {
    try {
        return res.json(await getDataFromSchema());
    } catch (error) {
        console.error('RssGet: ', error.message);
    }
}

const put = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            rss
        } = await req.body;
        if (!id) return res.status(404).send(`Error: id: ${id} not found`);
        if (rss) {
            const newRss = await DbSchema.findByIdAndUpdate(id, {
                $set: {
                    rss
                },
            }, {
                new: true
            });
            res.json(newRss);
        }
    } catch (error) {
        console.error('RssPut: ', error.message);
    }

}

const post = async (req, res, next) => {
    try {
        const {
            rss
        } = req.body;
        if (rss) {
            const newRss = new DbSchema({
                rss
            });
            const response = await newRss.save();
            res.json(response);
        }
        next();
    } catch (error) {
        console.error('RssPost: ', error.message);
    }
}

const deleteRss = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) return res.status(404).send(`Error: id: ${id} not found`);

        const deletedRss = await DbSchema.findByIdAndRemove(id);
        res.json(deletedRss);
    } catch (error) {
        console.error('RssDelete: ', error.message);
    }

}

module.exports = {
    get,
    put,
    post,
    deleteRss,
}