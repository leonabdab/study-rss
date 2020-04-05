const formatToEmail = (emailTitle, emailContent) => {
    let email = `<h2>${emailTitle}</h2>`;
    emailContent.forEach(contentItem => {
        email += `<p>${contentItem}</p>`
    })
    return email;
}

module.exports = formatToEmail;