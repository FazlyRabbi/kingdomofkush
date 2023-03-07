const nodemailer = require("nodemailer");

import memberEmailTamplate from "emails/memberEmailTamplate";

export default async function sendmail(req, res) {
  try {
    if (req.method != "GET") return res.status(400);

    // create transporter
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "message.delwar@gmail.com",
        pass: "ppqvmdlcsxaerxnv",
      },
    });

    // send mail with defined transport object
    let info = {
      from: "message.delwar@gmail.com", 
      to: "delwar.mmc@gmail.com",
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: memberEmailTamplate(), // html body
    };

    transporter.sendMail(info, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email Sent: " + info.response);
      }
    });

    res.status(200).send("Successfully Send Email!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
