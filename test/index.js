// require('dotenv').config();
const dotenv = require("dotenv");
dotenv.config({ path: "test/config.env" });
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
    try {
        const oauth2Client = new OAuth2(
            "987529189438-402osbaqgqnqmqq87197ll4esbpahu0q.apps.googleusercontent.com",
            "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",
            "https://developers.google.com/oauthplayground"
        );
    
        oauth2Client.setCredentials({
            refresh_token: "1//04PPtQoWC_cFdCgYIARAAGAQSNwF-L9IroyTZHIkQ6unaVsEp9nPxoIhZCYBd1ZmM6gZmUJZHU8VQTQ7FdIHCvac7Em2DggUMBPs"
        });
    
        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject();
                }
                resolve(token);
            });
        });
    
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "ansari.adil2015@gmail.com",
                accessToken,
                clientId: "987529189438-402osbaqgqnqmqq87197ll4esbpahu0q.apps.googleusercontent.com",
                clientSecret: "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",
                refreshToken: "1//04PPtQoWC_cFdCgYIARAAGAQSNwF-L9IroyTZHIkQ6unaVsEp9nPxoIhZCYBd1ZmM6gZmUJZHU8VQTQ7FdIHCvac7Em2DggUMBPs"
            }
        });
    
        return transporter;
    } catch (error) {
        console.log("error", error);
    }
};

const sendEmail = async (emailOptions) => {
    try {
        let emailTransporter = await createTransporter();
        console.log("emailTransporter", emailTransporter);
        await emailTransporter.sendMail(emailOptions);
    } catch (error) {
        console.log("error", error);
    }
};

sendEmail({
    subject: "Test",
    text: "I am sending an email from nodemailer!",
    to: "saumyachaman456@gmail.com",
    from: 'ansari.adil2015@gmail.com'
});
