const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (emailAddress, emailBody) => {
    const msg = {
        to: emailAddress,
        from: 'doubterleon@gmail.com',
        subject: 'Rss list',
        html: `
                <html>
                    <body>
                        ${emailBody}
                    </body>
                </html>`,
    };

    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error.toString());
    }
};

module.exports = sendEmail;