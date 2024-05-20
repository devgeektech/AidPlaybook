// src/app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
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
    declaration 
  } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "",
      pass: "",
    },
  });

  const mailOptions = {
    from: "",
    to: 'recipient@example.com', // Replace with the recipient's email
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
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
