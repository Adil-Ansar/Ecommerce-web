nodeMailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const config = require("../config/config.js");


const createTransporter = async () => {
    try {
        // console.log("Process", process.env.SMTP_MAIL);
        const OAuth2_client = new OAuth2(config.clientId,
            config.clientSecret,
            "https://developers.google.com/oauthplayground"
        );

        OAuth2_client.setCredentials({
            refresh_token: config.refreshToken
        });

        const accessToken = await new Promise((resolve, reject) => {
            OAuth2_client.getAccessToken((err, token) => {
                if (err) {
                    reject("Failed to create access token :(");
                }
                resolve(token);
            });
        });

        const transporter = nodeMailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.SMTP_MAIL,
                accessToken,
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                refreshToken: config.refreshToken
            }
        });

        return transporter;
    } catch (error) {
        console.log("error", error);
    }
};

const sendEmail = async (options) => {
    try {
        const emailOptions = {
            from: process.env.SMTP_MAIL,
            to: options.email,
            subject: options.subject,
            text: options.message
        }

        let emailTransporter = await createTransporter();
        // console.log("emailTransporter", emailTransporter);
        await emailTransporter.sendMail(emailOptions);
    } catch (error) {
        console.log("error", error);
    }
};

module.exports = sendEmail;
