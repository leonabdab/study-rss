const DbSchema = require('../schema');
const parseRss = require('../../app-modules/parse-rss');
const formatToHTML = require('../../app-modules/format-email');
const sendMail = require('../../app-modules/send-mail');

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

// const getRssEmailContent = async (req, res) => {
//     try {
//         const data = await getDataFromSchema();
//         const rssData = await Promise.all(parseRss(data));
//         let emailToSend = '';
//         if (rssData) {
//             rssData.forEach(rssLink => {
//                 emailToSend += formatToHTML(rssLink.title, rssLink.content);
//             })
//             sendMail('marta.gorlicka@gmail.com', emailToSend)
//             res.set('Content-Type', 'text/html')
//             res.status(200).send(emailToSend);
//         }
//     } catch (error) {
//         console.error(error)
//         console.error('RssGet: ', error.message);
//     }
// }

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
    // getRssEmailContent
}