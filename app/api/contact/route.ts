import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);  // ← moved inside

        const { firstName, phone, email, make, model, message } = await req.json();

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "ebadprince49@gmail.com",
            subject: `New Contact Form Submission from ${firstName}`,
            html: `
                <h2>New Contact Form Message</h2>
                <p><b>Name:</b> ${firstName}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Car Make:</b> ${make}</p>
                <p><b>Car Model:</b> ${model}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}