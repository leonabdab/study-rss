import {
    deleteRssLink,
    editRssLink,
    buildIDs,
    rssList
} from './rss.js';
import {
    makeEmailReadOnly,
} from './email.js';

const email = $('#email');
const rssInput = $('#rss-input');
const contentType = "application/json; charset=utf-8";

export const postData = async () => {
    try {
        const reqValues = JSON.stringify({
            rss: rssInput.val(),
            email: email.val()
        });

        console.log(reqValues)
        const response = await fetch('/user', {
            method: 'post',
            headers: {
                'Content-Type': contentType
            },
            body: reqValues
        })
        const data = await response.json();
        if (data) {
            let ids = buildIDs(data);
            rssList.append(linkTemplate(data, ids));
            rssInput.val('');
            editRssLink(data, ids.rssLinkId, ids.editId);
            deleteRssLink(data, ids.rssListItemId, ids.deleteId);
            return data;
        }
    } catch (error) {
        console.error(`Unexpected error: ${error.message}. Try again`);
    }
}

export const getRssEmailData = async () => {
    try {
        const response = await fetch('/user', {
            method: 'get'
        });
        const data = await response.json();
        if (data) {
            return data;
        }
    } catch (error) {
        console.error(`Unexpected error: ${error.message}. Try again`);
    }
}

export const getAllData = async () => {
    try {
        const response = await fetch('/user/all', {
            method: 'get'
        });
        const data = await response.json();
        if (data) {
            displayRssLinkList(data)
            makeEmailReadOnly(data);
            return data;
        }
    } catch (error) {
        console.error(`Unexpected error: ${error.message}. Try again`);
    }
}


const linkTemplate = (rssLink, ids) => {
    return `
    <li id="${ids.rssListItemId}" class="list-group-item">
      <div class="row">
         <div id="${ids.rssLinkId}" class="col-md-4">${rssLink.rss}</div>
         <div class="col-md-4"></div>
         <div class="col-md-4 text-right">
          <button id="${ids.editId}" class="btn btn-secondary rss-list__button">Edit</button>
          <button id="${ids.deleteId}" class="btn btn-danger rss-list__button">Delete</button>
        </div>
      </div>
    </li>`
}

export const getRssLinksPreview = async () => {
    try {
        const preview = await fetch('/user/parser/email', {
            method: 'get',
            headers: {
                'Content-Type': 'text/html'
            }
        });
        const result = await preview.text();
        const previewTag = $('#email-preview');
        if (result) {
            previewTag.html(result)
        } else {
            previewTag.html('<h2>Nothing to send</h2>')
        }
    } catch (error) {
        console.error('RssPreview: ', error.message);
    }
}

const displayRssLinkList = (data) => {
    data.forEach(rssLink => {
        if (rssLink.rss) {
            const ids = buildIDs(rssLink);
            rssList.append(linkTemplate(rssLink, ids));
            editRssLink(rssLink, ids.rssLinkId, ids.editId);
            deleteRssLink(rssLink, ids.rssListItemId, ids.deleteId);
        }
    })
}