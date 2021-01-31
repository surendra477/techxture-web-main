let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "akash.maurya18@siesgst.ac.in",
    pass: "Akash@3030",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

const sendMail = (to) => {
  console.log();
  var mail = {
    from: "akash.maurya18@siesgst.ac.in",
    to: "akash.maurya18@siesgst.ac.in",
    message: "subject",
    // text: "content",
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
    } else {
      console.log("Mail Sent", mail);
    }
  });
};

module.exports = sendMail;
