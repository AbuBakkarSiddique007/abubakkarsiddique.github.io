import { resend } from '@/lib/resend';

export type ContactEmailPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export async function sendContactFormEmail(payload: ContactEmailPayload) {
  const { firstName, lastName, email, message } = payload;

  const { data, error } = await resend.emails.send({
    from: 'Portfolio Contact Form <onboarding@resend.dev>',
    to: ['abubakkar.cce25.iiuc@gmail.com'],
    subject: `[Portfolio] New message from ${firstName} ${lastName}`,
    replyTo: email,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #0284c7;">New Contact Form Submission</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="margin-top: 20px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #fff; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">${message}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
