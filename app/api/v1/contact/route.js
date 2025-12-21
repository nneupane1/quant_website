import { NextResponse } from 'next/server';
import { contactSchema } from '@/schemas/contactSchema';
import { sendEmail, contactEmailTemplate } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate data
    const validatedData = contactSchema.parse(body);

    // Send email
    const emailSent = await sendEmail(
      process.env.EMAIL_USER || 'noreply@quantfund-ai.com',
      `New Contact Form: ${validatedData.subject}`,
      contactEmailTemplate(validatedData)
    );

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation to user
    await sendEmail(
      validatedData.email,
      'We received your message - QuantFund AI',
      `<p>Hi ${validatedData.name},</p><p>Thank you for reaching out! We've received your message and will get back to you soon.</p><p>Best regards,<br>QuantFund AI Team</p>`
    );

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
