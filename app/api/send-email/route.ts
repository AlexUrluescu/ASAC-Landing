import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  const { to, subject, message, firstName } = await req.json();

  const personalizedText = message.replace("[First Name]", firstName);
  const htmlVersion = personalizedText.replace(/\n/g, "<br />");

  try {
    await sendgrid.send({
      to,
      from: process.env.NEXT_SENDGRID_FROM_EMAIL!,
      subject,
      text: personalizedText,
      html: htmlVersion,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error(error.response?.body || error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
