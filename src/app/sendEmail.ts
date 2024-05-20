// src/pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
  fullName: string;
  email: string;
  titleOfWork: string;
  typeOfWork: string;
  author: string;
  dateOfCreation: string;
  equipment: string;
  genAI: string;
  copyrightClaimant: string;
  previousCopyright: string;
  feePayment: string;
  address: string;
  declaration: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      fullName,
      email,
      titleOfWork,
      typeOfWork,
      author,
      dateOfCreation,
      equipment,
      genAI,
      copyrightClaimant,
      previousCopyright,
      feePayment,
      address,
      declaration,
    }: FormData = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@example.com', // Replace with recipient email
      subject: 'New Form Submission',
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Title of the Work: ${titleOfWork}
        Type of Work: ${typeOfWork}
        Author(s) or Creator(s): ${author}
        Date of Creation: ${dateOfCreation}
        Equipment/Software/Tools: ${equipment}
        Gen AI Details: ${genAI}
        Copyright Claimant: ${copyrightClaimant}
        Previous Copyright Registration: ${previousCopyright}
        Fee Payment: ${feePayment}
        Address: ${address}
        Declaration: ${declaration ? 'Yes' : 'No'}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
