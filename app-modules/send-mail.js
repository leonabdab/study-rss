const sgMail = require('@sendgrid/mail');
const mjmlEmail = '';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email) => {

    const msg = {
        to: email,
        from: 'doubterleon@gmail.com',
        subject: 'Rss list',
        html: mjmlEmail,
    };

    try {
        await sgMail.send(msg);
    } catch (err) {
        console.error(err.toString());
    }
};

module.exports = sendEmail;