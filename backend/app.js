const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'marinamachivayam2003@gmail.com', // Replace with your Gmail address
      pass: 'fzxu yvab dlni shwj' // Replace with your Gmail password
    }
  });

  // Email content
  const mailOptions = {
    from: email, // Use user's email as sender address
    to: 'marinamachiavayam2003@gmail.com', // Replace with your email address
    subject: `New Message: ${subject}`,
    text: `Name:${name}/n Message: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
