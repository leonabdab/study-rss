import {
    postData,
    getAllData,
    getRssLinksPreview
} from './user.js';


$(document).ready(() => {

    const form = $('#rss-email-form');

    getAllData();

    form.submit((e) => {
        e.preventDefault();
        postData();
    });
});

$('#send').click(() => {
    (async () => await getRssLinksPreview())();
});