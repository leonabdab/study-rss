const DbSchema = require('../schema');
const parseRss = require('../../app-modules/parse-rss');
const formatToHTML = require('../../app-modules/format-email');
const sendMail = require('../../app-modules/send-mail');

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
        console.error('UserGetError: ', e.message);
    }
}

const getAllUserData = async (req, res) => {
    const query = req.query;
        const response = await DbSchema.find(query);

        if (JSON.stringify(response) === '[]') {
            res.status('404').send('Error: resource not found');
        }
        return response;
}

const getAll = async (req, res) => {
    try {
        const response = await getAllUserData(req, res);
        return res.json(response);
    } catch (e) {
        console.error('UserGetAllError: ', e.message);
    }
}

const parseAndSendEmail = async (req, res) => {
    try {
        const response = await getAllUserData(req, res);

        const userData = {
            email: '',
            rss: []
        }

        response.forEach(data => {
            userData.email = data.email;
            userData.rss.push(data.rss)
        });
        console.log(userData.rss)

        const rssData = await Promise.all(parseRss(userData.rss));
        
        let emailToSend = '';
        if (rssData) {
            rssData.forEach(rssLink => {
                emailToSend += formatToHTML(rssLink.title, rssLink.content);
            })
            sendMail('marta.gorlicka@gmail.com', emailToSend)
            res.set('Content-Type', 'text/html')
            res.status(200).send(emailToSend);
        }
    } catch (e) {
        console.log(e)
        // console.error('UserGetError: ', e.message);
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
        console.error('UserPostError', error.message)
    }
}

module.exports = {
    get,
    getAll,
    post,
    parseAndSendEmail
}