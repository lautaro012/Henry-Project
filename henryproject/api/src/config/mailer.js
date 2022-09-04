const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "henry.games.store@gmail.com", // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
});