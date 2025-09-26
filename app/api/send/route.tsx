import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.CONTACT_TO || !process.env.CONTACT_FROM) {
  throw new Error("Missing CONTACT_TO or CONTACT_FROM in .env.local");
}

const CONTACT_TO = process.env.CONTACT_TO!;
const FROM = process.env.CONTACT_FROM!;

type Body = {
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  const { email, subject, message } = (await req.json()) as Body;

  if (!email || !message) {
    return NextResponse.json(
      { error: "Missing email or message" },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [CONTACT_TO],
      subject: `[Contact From Blog] ${subject || "New message"}`,
      react: (
        <EmailTemplate
          heading="[Contact From Blog]"
          fromEmail={email}
          subject={subject}
          message={message}
        />
      ),
    });
  
  {/* Error Handelling */}
    if (error) return NextResponse.json({ error }, { status: 500 });
    return NextResponse.json({ id: data?.id }, { status: 200 });
  } 
  catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
