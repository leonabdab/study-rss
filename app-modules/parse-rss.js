const Parser = require('rss-parser');
rssParser = new Parser();

const parseRss = data => data.map(async rssLink => {
    const feed = await rssParser.parseURL(rssLink.rss);
    const emailContent = {
        title: feed.title,
        content: []
    };

    feed.items.forEach(item => {
        emailContent.content.push(`${item.title} : ${item.link}`)
    });

    return emailContent;
});

module.exports = parseRss;