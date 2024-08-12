app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received request:", { name, email, message });

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);  // Log the exact error
      return res.status(500).send({ success: false, error: error.message });
    }
    console.log('Email sent:', info.response);  // Log successful sending
    res.send({ success: true });
  });
});
