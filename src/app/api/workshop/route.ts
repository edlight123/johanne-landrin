import { NextRequest, NextResponse } from 'next/server';

// Rate limiting storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }

  if (limit.count >= 3) {
    // Stricter limit for workshop inquiries
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

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
    const { orgName, contactName, email, phone, date, audience, location, message } = body;

    if (!orgName || !contactName || !email || !phone || !date || !audience || !location || !message) {
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

    console.log('Workshop inquiry received:', {
      orgName,
      contactName,
      email,
      phone,
      date,
      audience,
      budget: body.budget,
      location,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, send email here
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Demande d'atelier: ${orgName}`,
    //   body: `
    //     Organisation: ${orgName}
    //     Contact: ${contactName}
    //     Email: ${email}
    //     Téléphone: ${phone}
    //     Date souhaitée: ${date}
    //     Taille audience: ${audience}
    //     Budget: ${body.budget || 'Non spécifié'}
    //     Lieu: ${location}
    //     Message: ${message}
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Workshop error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
