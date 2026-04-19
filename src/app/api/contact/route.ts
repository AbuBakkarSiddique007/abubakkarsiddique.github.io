import { NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/services/email.service';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await sendContactFormEmail({ firstName, lastName, email, message });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
