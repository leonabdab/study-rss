import {
    postData,
    getAllData
} from './data.js';
import {
 getRssLinksPreview
} from './rss.js'

$(document).ready(() => {

    const form = $('#rss-email-form');

    getAllData();

    form.submit((e) => {
        e.preventDefault();
        postData();
    });   
});

$('#send').click(() => {
    const preview = (async () => await getRssLinksPreview())();
    // console.log(preview)
//    $('#email-preview').html(getRssLinksPreview());
});