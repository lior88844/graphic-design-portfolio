import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = 'dearliordoron@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    const { message, replyEmail } = (await request.json()) as {
      message?: string;
      replyEmail?: string;
    };

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    if (message.trim().length > 2000) {
      return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
    }

    const replyTo = replyEmail?.trim() || undefined;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: replyTo
        ? `Hey Lior! (from ${replyTo}) — portfolio contact`
        : 'Hey Lior! — portfolio contact',
      text: message.trim(),
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error('[contact] Resend error:', error);
      return NextResponse.json({ error: 'Failed to send. Try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
