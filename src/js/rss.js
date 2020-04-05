const contentType = "application/json; charset=utf-8";
export const rssList = $('#rss-list');
export const rssInput = $('#rss-input');

export const getRssLinks = async () => {
    try {
        const fetchOptions = {
            method: 'get'
        };
        const rss = await fetch('/rss', fetchOptions);
        const result = await rss.json()
        return result;
    } catch (e) {
        console.error(`Unexpected error: ${e.message}. Please try again`)
    }
}

export const buildIDs = (rss) => {
    return {
        editId: `edit-${rss._id}`,
        deleteId: `delete-${rss._id}`,
        rssListItemId: `list-item-${rss._id}`,
        rssLinkId: `rss-${rss._id}`
    }
}

export const postRssLink = async () => {
    try {
        const rss = await fetch('/rss', {
            method: 'post',
            body: JSON.stringify({
                rss: rssInput.val()
            }),
            headers: {
                "Content-Type": contentType
            }
        });
        const data = await rss.json();
        return data;
    } catch (e) {
        console.error(`Unexpected error: ${e.message}. Please try again`)
    }
}

export const deleteRssLink = (rssLink, rssListItemId, deleteId) => {
    let deleteButton = $(`#${deleteId}`);
    deleteButton.click(async () => {
        try {
            const item = await fetch(`/rss/${rssLink._id}`, {
                method: 'delete'
            });
            const response = await item.json();
            if (response) {
                $(`#${rssListItemId}`).remove();
            }
        } catch (e) {
            console.error(`Unexpected error: ${e.message}. Please try again`)
        }

    })
};

export const editRssLink = (rssLink, rssLinkId, editId) => {
    let editButton = $(`#${editId}`);
    editButton.click(async () => {
        try {
            const item = await fetch(`/rss/${rssLink._id}`, {
                method: 'put',
                headers: {
                    "Content-Type": contentType
                },
                body: JSON.stringify({
                    rss: rssInput.val()
                })
            });
            const data = await item.json();
            if (data) {
                $(`#${rssLinkId}`).html(data.rss);
            }
        } catch (e) {
            console.error(`Unexpected error: ${e.message}. Please try again`)
        }
    })
}

export const getRssLinksPreview = async () => {
    try {
        const preview = await fetch('/rss/parsed/email', {
            method: 'get'
        });
        const result = await preview;
        console.log(result);
        // return await preview.json();        
    } catch (error) {
        console.log(error)
        console.error('RssPreview: ', error.message);
    }
}