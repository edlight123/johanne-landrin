import { NextRequest, NextResponse } from 'next/server';

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 5) {
    // Max 5 requests per minute
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    const { name, email, phone, preferredDate, preferredTime } = body;

    if (!name || !email || !phone || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you would send an email using a service like Resend or Nodemailer
    // Example with environment variables:
    // - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    // - Or RESEND_API_KEY

    console.log('Booking request received:', {
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // In production, send email here
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: 'Nouvelle demande de rendez-vous',
    //   body: `
    //     Nom: ${name}
    //     Email: ${email}
    //     Téléphone: ${phone}
    //     Date souhaitée: ${preferredDate}
    //     Heure souhaitée: ${preferredTime}
    //     Message: ${body.message || 'N/A'}
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
