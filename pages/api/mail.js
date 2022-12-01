// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

export default async function handler(req, res) {
  const data = JSON.parse(req.body);
  const { name, email, message } = data;
  res.status(200).json({ status: 'ok' })

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Form Submission",
      html: `
      <p>Name:</p>${name}<br/>
      <p>Email:</p>${email}<br/>
      <p>Message:</p>${message}
      `

    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
}
