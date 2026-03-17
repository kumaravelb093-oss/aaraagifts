import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await req.json();
        const { name, email, category, quantity, message } = body;

        if (!name || !email) {
            return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Aaraa Gifts <onboarding@resend.dev>',
            to: ['aaraagiftshop@gmail.com'],
            subject: `New Inquiry from ${name} - ${category}`,
            text: `
                New Inquiry Details:
                -------------------
                Name: ${name}
                Email: ${email}
                Category: ${category}
                Expected Quantity: ${quantity || 'Not specified'}
                Message: ${message || 'No additional message provided.'}
                
                ---
                This email was sent from the Aaraa Gifts website contact form.
            `,
            replyTo: email,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}
