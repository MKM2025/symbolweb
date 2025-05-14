import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, company, service, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'mail.symboltech.net',
      port: 465,
      secure: true,
      auth: {
        user: 'sales@symboltech.net',
        pass: 'Zl]wk}g.)ouX',
      },
    });

    // Email content
    const mailOptions = {
      from: `"${fullName}" <sales@symboltech.net>`,
      to: 'sales@symboltech.net',
      replyTo: email,
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #0a192f; margin-bottom: 20px; border-bottom: 2px solid #0a192f; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong style="color: #0a192f;">Name:</strong> ${fullName}</p>
            <p style="margin: 5px 0;"><strong style="color: #0a192f;">Email:</strong> <a href="mailto:${email}" style="color: #0a192f; text-decoration: none;">${email}</a></p>
            ${phone ? `<p style="margin: 5px 0;"><strong style="color: #0a192f;">Phone:</strong> <a href="tel:${phone}" style="color: #0a192f; text-decoration: none;">${phone}</a></p>` : ''}
            ${company ? `<p style="margin: 5px 0;"><strong style="color: #0a192f;">Company:</strong> ${company}</p>` : ''}
            ${service ? `<p style="margin: 5px 0;"><strong style="color: #0a192f;">Service:</strong> ${service}</p>` : ''}
          </div>

          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #0a192f; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
            <p style="margin: 0;">This email was sent from the contact form on Symboltech's website.</p>
            <p style="margin: 5px 0;">You can reply directly to this email to respond to ${fullName}.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 