const DbSchema = require('../schema')

const post = async (req, res, next) => {
    try {
        const reqBody = await req.body;
        if (reqBody) {
            const email = new DbSchema({
                email: reqBody.email
            });
            const response = await email.save();
            res.json(response);
        }
        next();
    } catch (error) {
        console.error('PostEmail: ', error.message);
    }
}

const get = async (req, res) => {
    try {
        return res.json(await DbSchema.find().select({rss: 0, _id: 0, __v: 0}))
    } catch (error) {
        console.error('GetEmail: ', error.message);
    }
}

module.exports = {
    post,
    get
}